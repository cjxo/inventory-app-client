import { useState } from "react";
import PropTypes from "prop-types";

import styles from "../styles/component.module.css";
import useCategory from "../hooks/useCategory";

const NarrowSortDropdown = ({ onFiltersChanged, defaultFilters }) => {
  const categoryContext = useCategory();
  const [nameSortOrder, setNameSortOrder] = useState(defaultFilters.nameSortOrder);
  const [priceSortOrder, setPriceSortOrder] = useState(defaultFilters.priceSortOrder);
  const [categories, setCategories] = useState(defaultFilters.categories);
  
  const setFilters = (nameSortOrder, priceSortOrder, categories) => {
    onFiltersChanged({ nameSortOrder, priceSortOrder, categories });
  };

  const handleNameSortChange = (value) => {
    setNameSortOrder(value);
    setFilters(value, priceSortOrder, categories);
  };
  
  const handlePriceSortChange = (value) => {
    setPriceSortOrder(value);
    setFilters(nameSortOrder, value, categories);
  };
  
  const toggleCategory = (name) => {
    const newCategories = { ...categories, [name]: !categories[name] };
    setCategories(prevState => newCategories);
    setFilters(nameSortOrder, priceSortOrder, newCategories);
  };
  
  return (
    <div className={styles.dropDown}>
      <div className={styles.sortGroup}>
        <h3>Sort By Name</h3>
        <div className={styles.buttons}>
          <button data-testid="name-asc" className={(nameSortOrder==="asc") ? styles.selected : ""} onClick={() => handleNameSortChange("asc")}>Ascending</button>
          <button data-testid="name-desc" className={(nameSortOrder==="desc") ? styles.selected : ""} onClick={() => handleNameSortChange("desc")}>Descending</button>
          <button data-testid="name-none" className={(nameSortOrder==="none") ? styles.selected : ""} onClick={() => handleNameSortChange("none")}>None</button>
        </div>
      </div>

      <div className={styles.sortGroup}>
        <h3>Sort By Price</h3>
        <div className={styles.buttons}>
          <button data-testid="price-asc" className={(priceSortOrder==="asc") ? styles.selected : ""} onClick={() => handlePriceSortChange("asc")}>Ascending</button>
          <button data-testid="price-desc" className={(priceSortOrder==="desc") ? styles.selected : ""} onClick={() => handlePriceSortChange("desc")}>Descending</button>
          <button data-testid="price-none" className={(priceSortOrder==="none") ? styles.selected : ""} onClick={() => handlePriceSortChange("none")}>None</button>
        </div>
      </div>

      <div className={styles.sortGroup}>
        <h3>Filter By Category</h3>
        <div className={styles.buttons}>
          {categoryContext.categories.map(category => (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.name)}
              className={categories[category.name] ? styles.selected : ""}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

NarrowSortDropdown.propTypes = {
  onFiltersChanged: PropTypes.func.isRequired,
  defaultFilters: PropTypes.shape({
    nameSortOrder: PropTypes.oneOf(["none", "asc", "desc"]).isRequired,
    priceSortOrder: PropTypes.oneOf(["none", "asc", "desc"]).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default NarrowSortDropdown;