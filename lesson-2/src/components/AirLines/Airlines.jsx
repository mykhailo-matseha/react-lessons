import { useState } from "react";
import { changeEventHelper } from "../../helpers/data";
import { selectOptionsMap } from "../../helpers/layout";
import styles from "./Airlines.module.scss";

const newspapers = [
  { id: "none", name: "Не потрібно" },
  { id: "business", name: "Бізнес" },
  { id: "facts", name: "Факти і коментарі" },
  { id: "government_courier", name: "Урядовий кур'єр" },
  { id: "day", name: "День" },
];

const cognacs = [
  { id: "none", name: "Не потрібно" },
  { id: "shabo", name: "Shabo" },
  { id: "tavria", name: "Таврія" },
  { id: "hennessy", name: "Hennessy" },
  { id: "remy_martin", name: "Rémy Martin" },
];

const beers = [
  { id: "none", name: "Не потрібно" },
  { id: "lvivske", name: "Львівське" },
  { id: "chernihivske", name: "Чернігівське" },
  { id: "obolon", name: "Оболонь" },
  { id: "corona", name: "Corona Extra" },
];

const chips = [
  { id: "none", name: "Не потрібно" },
  { id: "lays", name: "Lay's" },
  { id: "pringles", name: "Pringles" },
  { id: "lux", name: "Люкс" },
  { id: "doritos", name: "Doritos" },
];

const boolOptions = [
  { id: "yes", name: "Так" },
  { id: "no", name: "Ні" },
];

const defaultData = {
  type: "econom",
  newspaper: "none",
  cognac: "none",
  food: "no",
  beer: "none",
  chips: "none",
};

function Airlines() {
  const [inputsData, setInputsData] = useState(defaultData);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "type") {
      setInputsData({
        ...defaultData,
        type: value,
      });
      return;
    }
    if (name === "cognac" && value === "none") {
      setInputsData((prev) => ({
        ...prev,
        cognac: value,
        food: defaultData.food,
      }));
      return;
    }
    setInputsData((prev) => changeEventHelper(prev, name, value));
  };

  return (
    <div className="form">
      <label>
        Оберіть клас
        <select
          className="input"
          name="type"
          onChange={onChangeHandler}
          value={inputsData.type}
        >
          <option value="business">Бізнес</option>
          <option value="econom">Економ</option>
        </select>
      </label>
      {inputsData.type === "business" ? (
        <>
          <img
            className={styles.bg}
            src="https://media.cntravellerme.com/photos/6a26d29645c481ddb76d7748/master/w_1600%2Cc_limit/PriestmanGoode_Riyadh-Air_BCL_cabin_overview_2.jpg"
            alt="Каюта бізнес класу"
          />
          <label>
            Оберіть категорію газети
            <select
              className="input"
              name="newspaper"
              onChange={onChangeHandler}
              value={inputsData.newspaper}
            >
              {selectOptionsMap(newspapers)}
            </select>
          </label>
          <label>
            Оберіть коньяк
            <select
              className="input"
              name="cognac"
              onChange={onChangeHandler}
              value={inputsData.cognac}
            >
              {selectOptionsMap(cognacs)}
            </select>
          </label>
          {inputsData.cognac !== "none" && (
            <label>
              Закуска потрібна?
              <select
                className="input"
                name="food"
                onChange={onChangeHandler}
                value={inputsData.food}
              >
                {selectOptionsMap(boolOptions)}
              </select>
            </label>
          )}
        </>
      ) : (
        <>
          <img
            className={styles.bg}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjpINk4hHz7-3o977EZ3p8D4bpFO7nJ6EOyiW853OFLXu6nfhCncjxMo&s=10"
            alt="Хмарки"
          />
          <label>
            Оберіть пиво
            <select
              className="input"
              name="beer"
              onChange={onChangeHandler}
              value={inputsData.beer}
            >
              {selectOptionsMap(beers)}
            </select>
          </label>
          <label>
            Оберіть чіпси
            <select
              className="input"
              name="chips"
              onChange={onChangeHandler}
              value={inputsData.chips}
            >
              {selectOptionsMap(chips)}
            </select>
          </label>
        </>
      )}
    </div>
  );
}

export default Airlines;
