import styles from "./Dishes.module.scss";
function DishesList({ dishes, buttonText, clickHandler }) {
  return dishes.map((el) => (
    <div key={el.id} className={styles.Table__Body}>
      <div className={styles.Table__Item}>
        {el.name}
        <button
          className={styles.Table__Button}
          onClick={() => clickHandler(el.id)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  ));
}

export default DishesList;
