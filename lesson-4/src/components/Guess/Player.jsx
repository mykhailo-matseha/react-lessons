import { useEffect, useRef, useState } from "react";
import styles from "./Guess.module.scss";
function Player({
  moveFn,
  player,
  allGuessedChars,
  setErrorState,
  isDisabled,
}) {
  const [fieldVal, setFieldVal] = useState("");
  const fieldRef = useRef(null);
  const onClickHandler = () => {
    moveFn(player, Number(fieldVal));
    setFieldVal("");
  };
  const onChangeHandler = (e) => {
    const value = e.target.value;
    if (allGuessedChars.has(Number(value))) {
      setFieldVal("");
      setErrorState(true);
    } else if (value.length < 2) {
      setFieldVal(value);
    }
  };

  useEffect(() => {
    if (!isDisabled) fieldRef.current.focus();
  }, [isDisabled]);

  return (
    <div
      style={{ backgroundColor: player.color }}
      className={`${styles.Player} ${isDisabled ? styles.Player_Disabled : ""}`}
    >
      <h3 className={styles.Player__Title}>{`Гравець ${player.id}`}</h3>
      <div className={styles.Player__Body}>
        <label>
          Цифра(0-9)
          <input
            ref={fieldRef}
            value={fieldVal}
            onChange={onChangeHandler}
            type="number"
            className="input"
            disabled={isDisabled}
          />
        </label>
        <button disabled={!fieldVal.length} onClick={onClickHandler}>
          Хід
        </button>
      </div>
    </div>
  );
}

export default Player;
