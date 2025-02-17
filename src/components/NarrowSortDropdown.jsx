import { useState } from "react";
import PropTypes from "prop-types";

import styles from "../styles/component.module.css";

const NarrowSortDropdown = ({ onFiltersChanged, defaultFilters }) => {
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
          <button onClick={() => toggleCategory("potion")} className={categories.potion ? styles.selected : ""}>Potion</button>
          <button onClick={() => toggleCategory("food")} className={categories.food ? styles.selected : ""}>Food</button>
          <button onClick={() => toggleCategory("gems")} className={categories.gems ? styles.selected : ""}>Gems</button>
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
    categories: PropTypes.shape({
      potion: PropTypes.bool.isRequired,
      food: PropTypes.bool.isRequired,
      gems: PropTypes.bool.isRequired,
    }),
  }).isRequired,
};

export default NarrowSortDropdown;