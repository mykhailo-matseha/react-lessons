import styles from "./Storage.module.css";
function ProductsLocations({ products, departments, productsInDepartments }) {
  const getProductsListByDepartment = (id) => {
    return productsInDepartments[id].map((prodId) => (
      <li key={prodId}>{getProductById(prodId)?.name || `Товар ${prodId}`}</li>
    ));
  };
  const getProductById = (id) => products.find((p) => p.id === id);
  const getDepartmentById = (id) => departments.find((d) => d.id === id);
  return (
    <div className={styles.block}>
      <h3>Розподіл товарів</h3>
      {Object.keys(productsInDepartments).length ? (
        Object.keys(productsInDepartments).map((depId) => (
          <div key={depId}>
            <h4>
              {getDepartmentById(Number(depId))?.name || `Відділення ${depId}`}
            </h4>
            <ul>{getProductsListByDepartment(Number(depId))}</ul>
          </div>
        ))
      ) : (
        <span>Порожньо</span>
      )}
    </div>
  );
}

export default ProductsLocations;
