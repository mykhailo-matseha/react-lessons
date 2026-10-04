import styles from "./Storage.module.css";
function Products({ products, toggleProduct, selectedIds }) {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>Товари</h3>
      <div className={styles.list}>
        {products.length ? (
          products.map((p) => (
            <button
              key={p.id}
              className={selectedIds.includes(p.id) ? styles.selected : ""}
              onClick={() => toggleProduct(p.id)}
            >
              {p.name}
            </button>
          ))
        ) : (
          <span>Порожньо</span>
        )}
      </div>
    </div>
  );
}

export default Products;
