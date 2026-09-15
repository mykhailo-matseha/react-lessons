import { useState } from "react";
import styles from "./English.module.scss";
import EnglishCard from "./EnglishCard";
const englishData = [
  {
    word: "яблуко",
    answer: "apple",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=80",
  },
  {
    word: "гора",
    answer: "mountain",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80",
  },
  {
    word: "кава",
    answer: "coffee",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80",
  },
  {
    word: "велосипед",
    answer: "bicycle",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop&q=80",
  },
  {
    word: "книга",
    answer: "book",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
  },
  {
    word: "кіт",
    answer: "cat",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80",
  },
  {
    word: "ліс",
    answer: "forest",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80",
  },
  {
    word: "гітара",
    answer: "guitar",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&auto=format&fit=crop&q=80",
  },
  {
    word: "фотоапарат",
    answer: "camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80",
  },
  {
    word: "океан",
    answer: "ocean",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
  },
];
function English() {
  const [cardIndex, setCardIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("");
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const onClickHandler = () => {
    if (
      englishData[cardIndex].answer === inputValue.trim().toLowerCase() &&
      !status
    ) {
      nextCard();
    } else if (!status) {
      setStatus("wrong");
      setTimeout(() => {
        setStatus("");
        setInputValue("");
      }, 1000);
    }
  };
  const nextCard = () => {
    setStatus("right");
    setTimeout(() => {
      if (cardIndex < englishData.length - 1) {
        setCardIndex((p) => p + 1);
      } else {
        setCardIndex(0);
      }
      setStatus("");
      setInputValue("");
    }, 1000);
  };
  return (
    <div className={styles.English}>
      <div className={styles.English__Counter}>
        {cardIndex + 1}/{englishData.length}
      </div>
      <EnglishCard status={status} cardData={englishData[cardIndex]} />
      <input
        className="input"
        placeholder="Введіть переклад слова"
        value={inputValue}
        onChange={onChangeHandler}
        type="text"
        disabled={!!status}
      />
      <button disabled={!!status} onClick={onClickHandler}>
        Далі
      </button>
    </div>
  );
}

export default English;
