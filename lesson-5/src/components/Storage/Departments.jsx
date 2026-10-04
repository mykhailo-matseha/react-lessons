import styles from "./Storage.module.css";
function Departments({ departments, selectDepartment, selectedId }) {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>Відділення</h3>
      <div className={styles.list}>
        {departments.length ? (
          departments.map((d) => (
            <button
              key={d.id}
              className={selectedId === d.id ? styles.selected : ""}
              onClick={() => selectDepartment(d.id)}
            >
              {d.name}
            </button>
          ))
        ) : (
          <span>Порожньо</span>
        )}
      </div>
    </div>
  );
}

export default Departments;
