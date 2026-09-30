import styles from "./Guess.module.scss";
function NumberComp({ numObj, players, allGuessedChars, errorState, winner }) {
  const getItem = (key, charObj) => {
    const ownerId = charObj.player;
    const color = players.find((p) => p.id === ownerId)?.color;
    return (
      <div
        key={key}
        style={{ backgroundColor: color }}
        className={styles.NumberComp__Item}
      >
        {!!ownerId && charObj.value}
      </div>
    );
  };

  return (
    <div className={styles.NumberComp}>
      <div className={styles.NumberComp__Content}>
        Число
        <div className={styles.NumberComp__Body}>
          {numObj.map((char, i) => getItem(i, char))}
        </div>
      </div>
      <div
        className={`${styles.NumberComp__Label} ${errorState ? styles.error : ""}`}
      >
        {allGuessedChars.size !== 0 &&
          `Відгадані цифри: ${[...allGuessedChars].join(", ")}`}
      </div>
      <div
        className={`${styles.NumberComp__Label} ${errorState ? styles.error : ""}`}
      >
        {!!winner && (
          <div>
            Переможець:{" "}
            <span style={{ color: winner.color }}>Гравець {winner.id}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default NumberComp;
