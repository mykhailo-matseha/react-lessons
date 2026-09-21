import { useEffect, useState } from "react";
import styles from "./Translator.module.scss";

const words = [
  { id: 1, en: "car", ua: "автомобіль" },
  { id: 2, en: "bus", ua: "автобус" },
  { id: 3, en: "man", ua: "чоловік" },
  { id: 4, en: "boy", ua: "хлопець" },
  { id: 5, en: "woman", ua: "жінка" },
  { id: 6, en: "girl", ua: "дівчина" },
  { id: 7, en: "house", ua: "будинок" },
  { id: 8, en: "book", ua: "книга" },
  { id: 9, en: "city", ua: "місто" },
  { id: 10, en: "water", ua: "вода" },
];
function Translator() {
  const [selected, setSelected] = useState({
    en: null,
    ua: null,
  });
  const [selectedState, setSelectedState] = useState("selected");
  const [doneWords, setDoneWords] = useState([]);
  const [uaShuffled] = useState(() =>
    [...words].sort(() => Math.random() - 0.5),
  );
  const [enShuffled] = useState(() =>
    [...words].sort(() => Math.random() - 0.5),
  );
  const onClickHandler = (w, lang) => {
    if (selectedState !== "selected") return;
    setSelected((prev) => ({ ...prev, [lang]: w.id }));
  };
  const getModClass = (w, lang) => {
    if (selected[lang] === w.id) {
      return styles[selectedState];
    } else return "";
  };
  useEffect(() => {
    if (!selected.ua || !selected.en) return;
    const isCorrect = selected.ua === selected.en;
    setSelectedState(isCorrect ? "active" : "error");
    const timeoutId = setTimeout(() => {
      if (isCorrect) setDoneWords((doneWords) => [...doneWords, selected.ua]);
      setSelected({
        en: null,
        ua: null,
      });
      setSelectedState("selected");
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [selected]);

  return (
    <div className={styles.Translator}>
      {words.length !== doneWords.length ? (
        <>
          <div className={styles.Translator__Block}>
            {enShuffled
              .filter((w) => !doneWords.includes(w.id))
              .map((w) => (
                <button
                  key={w.id}
                  onClick={() => onClickHandler(w, "en")}
                  className={`${styles.Translator__Button} ${getModClass(w, "en")}`}
                >
                  {w.en}
                </button>
              ))}
          </div>
          <div className={styles.Translator__Block}>
            {uaShuffled
              .filter((w) => !doneWords.includes(w.id))
              .map((w) => (
                <button
                  key={w.id}
                  onClick={() => onClickHandler(w, "ua")}
                  className={`${styles.Translator__Button} ${getModClass(w, "ua")}`}
                >
                  {w.ua}
                </button>
              ))}
          </div>
        </>
      ) : (
        <div className={styles.Translator__Block}>
          <h3>Чудово, все відгадано!</h3>
        </div>
      )}
    </div>
  );
}

export default Translator;
