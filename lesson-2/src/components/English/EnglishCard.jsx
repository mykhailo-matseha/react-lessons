import styles from "./English.module.scss";

function EnglishCard({ cardData, status }) {
  return (
    <div
      className={`${styles.Card} ${status === "right" ? styles.Right : ""} ${status === "wrong" ? styles.Wrong : ""}`}
    >
      <img
        src={cardData.image}
        alt={cardData.word}
        className={styles.Card__Image}
      />
      <h3 className={styles.Card__Title}>{cardData.word}</h3>
    </div>
  );
}

export default EnglishCard;
