import { useState } from "react";
import styles from "./Dance.module.scss";
import { Plus, Trash } from "lucide-react";
const pupils = [
  { id: 1, name: "Коля", sex: "boy" },
  { id: 2, name: "Олена", sex: "girl" },
  { id: 3, name: "Максим", sex: "boy" },
  { id: 4, name: "Софія", sex: "girl" },
  { id: 5, name: "Тарас", sex: "boy" },
  { id: 6, name: "Дар'я", sex: "girl" },
  { id: 7, name: "Богдан", sex: "boy" },
  { id: 8, name: "Анастасія", sex: "girl" },
  { id: 9, name: "Андрій", sex: "boy" },
  { id: 10, name: "Марія", sex: "girl" },
  { id: 11, name: "Денис", sex: "boy" },
  { id: 12, name: "Вікторія", sex: "girl" },
  { id: 13, name: "Роман", sex: "boy" },
  { id: 14, name: "Юлія", sex: "girl" },
  { id: 15, name: "Артем", sex: "boy" },
  { id: 16, name: "Катерина", sex: "girl" },
  { id: 17, name: "Владислав", sex: "boy" },
  { id: 18, name: "Поліна", sex: "girl" },
  { id: 19, name: "Ілля", sex: "boy" },
  { id: 20, name: "Олександра", sex: "girl" },
];

// Пари для танців. Поступово вибираємо хлопця, дівчину і додаємо у обрані пари. Пару можна видалити. Поки не вибрано хлопця і дівчину кнопка «Додати» заблокована. Якщо не вистачає хлопців або дівчат вибір також блокується.

function Dance() {
  const [selected, setSelected] = useState({ boy: null, girl: null });
  const [pairs, setPairs] = useState([]);
  const pairedIds = new Set(pairs.flatMap((el) => Object.values(el)));
  const freePupils = pupils.filter((el) => !pairedIds.has(el.id));

  const onPupilClickHandler = (p) => {
    if (isSelected(p)) return;
    const nextSelected = { ...selected, [p.sex]: p.id };
    if (nextSelected.boy && nextSelected.girl) {
      addPair(nextSelected);
      setSelected({ boy: null, girl: null });
    } else {
      setSelected(nextSelected);
    }
  };

  const isSelected = (pupil) => {
    return Object.values(selected).includes(pupil.id);
  };

  const addPair = (pair) => {
    if (pair.boy && pair.girl) {
      setPairs((prev) => [...prev, pair]);
    } else {
      throw new Error("Must be boy and girl id");
    }
  };

  const removePair = (pair) => {
    if (pair.boy && pair.girl) {
      setPairs((prev) =>
        prev.filter((p) => p.boy !== pair.boy || p.girl !== pair.girl),
      );
    } else {
      throw new Error("Pair not found");
    }
  };

  const getPupilName = (id) => {
    return pupils.find((p) => p.id === id)?.name ?? "";
  };

  const onPairClickHandler = (pair) => {
    removePair(pair);
  };

  return (
    <div className={styles.Dance}>
      <div className={styles.Dance__Block}>
        <h3 className={styles.Dance__Title}>Хлопці</h3>
        <div className={styles.Dance__List}>
          {freePupils
            .filter((el) => el.sex === "boy")
            .map((p) => (
              <button
                key={p.id}
                onClick={() => onPupilClickHandler(p)}
                className={`${styles.Dance__Button} ${isSelected(p) ? styles.active : ""}`}
              >
                {p.name}
                <Plus size="16" />
              </button>
            ))}
        </div>
      </div>
      <div className={styles.Dance__Block}>
        <h3 className={styles.Dance__Title}>Дівчата</h3>
        <div className={styles.Dance__List}>
          {freePupils
            .filter((el) => el.sex === "girl")
            .map((p) => (
              <button
                key={p.id}
                onClick={() => onPupilClickHandler(p)}
                className={`${styles.Dance__Button} ${isSelected(p) ? styles.active : ""}`}
              >
                {p.name}
                <Plus size="16" />
              </button>
            ))}
        </div>
      </div>
      <div className={styles.Dance__Block}>
        <h3 className={styles.Dance__Title}>Пари</h3>
        <div className={styles.Dance__List}>
          {pairs.map((pair) => (
            <button
              key={`${pair.boy}-${pair.girl}`}
              onClick={() => onPairClickHandler(pair)}
              className={styles.Dance__Button}
            >
              {getPupilName(pair.boy)} - {getPupilName(pair.girl)}
              <Trash size="16" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dance;
