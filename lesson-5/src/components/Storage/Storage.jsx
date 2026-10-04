import { useState } from "react";
import Departments from "./Departments";
import Products from "./Products";
import styles from "./Storage.module.css";
import ProductsLocations from "./ProductsLocations";

// Мережа магазинів. Дано список відділень та список товарів. Для кожного відділення можна вибирати декілька товарів. Вибирати та відображати перелік вибраних товарів для кожного відділення.

function Storage({ departments, products }) {
  const [selected, setSelected] = useState({
    departmentId: null,
    productIds: [],
  });
  const [productsInDepartments, setProductsInDepartments] = useState({});
  const assignedProducts = Object.values(productsInDepartments).flat();
  const isButtonDisabled = Boolean(
    !selected.departmentId || !selected.productIds.length,
  );
  const availableProducts = products.filter(
    (p) => !assignedProducts.includes(p.id),
  );
  const toggleProduct = (id) => {
    if (id === null || id === undefined) return;
    if (!selected.productIds.includes(id)) {
      setSelected((prev) => ({
        ...prev,
        productIds: [...prev.productIds, id],
      }));
    } else {
      setSelected((prev) => ({
        ...prev,
        productIds: prev.productIds.filter((p) => p !== id),
      }));
    }
  };
  const selectDepartment = (id) => {
    if (id === null || id === undefined) return;
    setSelected((prev) => ({ ...prev, departmentId: id }));
  };
  const addClickHandler = () => {
    if (!selected.departmentId || !selected.productIds.length) return;
    setProductsInDepartments((prev) => {
      const existingProducts = prev[selected.departmentId] || [];
      return {
        ...prev,
        [selected.departmentId]: Array.from(
          new Set([...existingProducts, ...selected.productIds]),
        ),
      };
    });
    setSelected({
      departmentId: null,
      productIds: [],
    });
  };
  return (
    <div>
      <div className={styles.content}>
        <Products
          products={availableProducts}
          toggleProduct={toggleProduct}
          selectedIds={selected.productIds}
        />
        <Departments
          departments={departments}
          selectDepartment={selectDepartment}
          selectedId={selected.departmentId}
        />
      </div>
      <button
        className={styles.button}
        disabled={isButtonDisabled}
        onClick={addClickHandler}
      >
        Додати
      </button>
      <ProductsLocations
        products={products}
        departments={departments}
        productsInDepartments={productsInDepartments}
      />
    </div>
  );
}

export default Storage;
