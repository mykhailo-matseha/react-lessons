import { useState } from "react";
import styles from "./Dishes.module.scss";
import DishesList from "./DishesList";
function Dishes() {
  const [dishesArr, setDishesArr] = useState([]);
  const [inputVal, setinputVal] = useState("");

  const goNext = (id) => {
    setDishesArr((dishesArr) =>
      dishesArr.map((el) =>
        el.id === id ? { ...el, status: el.status + 1 } : el,
      ),
    );
  };

  const add = (name) => {
    setDishesArr((prev) => [
      ...prev,
      { id: Date.now(), name: name, status: 1 },
    ]);
    setinputVal("");
  };

  const remove = (id) => {
    setDishesArr((dishesArr) => dishesArr.filter((el) => el.id !== id));
  };

  const onClickHandler = () => {
    if (inputVal.trim()) {
      add(inputVal.trim());
    }
  };

  const itemClickHandler = (id) => {
    const currentStatus = dishesArr.find((el) => el.id === id)?.status;
    if (!currentStatus) {
      return;
    } else if (currentStatus < 3) {
      goNext(id);
    } else {
      remove(id);
    }
  };
  return (
    <div className="form">
      <label>
        Додати страву
        <input
          value={inputVal}
          onChange={(e) => {
            setinputVal(e.target.value);
          }}
          className="input"
          type="text"
          placeholder="Введіть назву страви"
        />
      </label>
      <button onClick={onClickHandler} className="button">
        Додати
      </button>
      <div className={styles.Table}>
        <div className={styles.Table__Col}>
          <div className={styles.Table__Header}>Очікують</div>
          <DishesList
            dishes={dishesArr.filter((dish) => dish.status === 1)}
            buttonText="Готувати"
            clickHandler={itemClickHandler}
          />
        </div>
        <div className={styles.Table__Col}>
          <div className={styles.Table__Header}>Готуються</div>
          <DishesList
            dishes={dishesArr.filter((dish) => dish.status === 2)}
            buttonText="Готово"
            clickHandler={itemClickHandler}
          />
        </div>
        <div className={styles.Table__Col}>
          <div className={styles.Table__Header}>Готові</div>
          <DishesList
            dishes={dishesArr.filter((dish) => dish.status === 3)}
            buttonText="Подано"
            clickHandler={itemClickHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Dishes;
