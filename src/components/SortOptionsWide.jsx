import { useState } from "react";
import PropTypes from "prop-types";

import styles from "../styles/component.module.css";
import categoryStyles from "./CategoryStyles";

const SortOptionsWide = ({ onFiltersChanged, defaultFilters }) => {
  const [nameSortOrder, setNameSortOrder] = useState(defaultFilters.nameSortOrder);
  const [priceSortOrder, setPriceSortOrder] = useState(defaultFilters.priceSortOrder);
  const [categories, setCategories] = useState(defaultFilters.categories);

  const setFilters = (nameSortOrder, priceSortOrder, categories) => {
    onFiltersChanged({ nameSortOrder, priceSortOrder, categories });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    if (name === "name-sort-order") {
      setNameSortOrder(value);
      setFilters(value, priceSortOrder, categories);
    } else if (name === "price-sort-order") {
      setPriceSortOrder(value);
      setFilters(nameSortOrder, value, categories);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const newCategories = {
      ...categories,
      [name]: checked,
    };

    setCategories(prevState => newCategories);
    setFilters(nameSortOrder, priceSortOrder, newCategories);
  };

  return (
    <div className={styles.sortDropdownWide}>
      <div className={styles.sortGroup}>
        <h3>Sort By Name</h3>
        <form>
          <div className={styles.inputLabelPair}>
            <input id="name-asc" value="asc" name="name-sort-order" type="radio" onChange={handleRadioChange} />
            <label htmlFor="name-asc">Ascending</label>
          </div>
          
          <div className={styles.inputLabelPair}>
            <input id="name-desc" value="desc" name="name-sort-order" type="radio" onChange={handleRadioChange} />
            <label htmlFor="name-desc">Descending</label>
          </div>
          
          <div className={styles.inputLabelPair}>
            <input id="name-none" value="none" name="name-sort-order" type="radio" defaultChecked onChange={handleRadioChange} />
            <label htmlFor="name-none">None</label>
          </div>
        </form>
      </div>
      
      <div className={styles.sortGroup}>
        <h3>Sort By Price</h3>
        <form>
          <div className={styles.inputLabelPair}>
            <input id="price-asc" value="asc" name="price-sort-order" type="radio" onChange={handleRadioChange} />
            <label htmlFor="price-asc">Ascending</label>
          </div>
          
          <div className={styles.inputLabelPair}>
            <input id="price-desc" value="desc" name="price-sort-order" type="radio" onChange={handleRadioChange} />
            <label htmlFor="price-desc">Descending</label>
          </div>

          <div className={styles.inputLabelPair}>
            <input id="price-none" value="none" name="price-sort-order" type="radio" defaultChecked onChange={handleRadioChange} />
            <label htmlFor="price-none">None</label>
          </div>
        </form>
      </div>
      
      <div className={styles.sortGroup}>
        <h3>Filter By Category</h3>
        
        <form>
          <div className={styles.inputLabelPair}>
            <input id="potion" value="potion" name="potion" type="checkbox" checked={categories.potion} onChange={handleCheckboxChange} />
            <label style={categoryStyles.potion} htmlFor="potion">Potion</label>
          </div>
          <div className={styles.inputLabelPair}>
            <input id="food" value="food" name="food" type="checkbox" checked={categories.food} onChange={handleCheckboxChange} />
            <label style={categoryStyles.food} htmlFor="food">Food</label>
          </div>
          <div className={styles.inputLabelPair}>
            <input id="gems" value="gems" name="gems" type="checkbox" checked={categories.gems} onChange={handleCheckboxChange} />
            <label style={categoryStyles.gems} htmlFor="gems">Gems</label>
          </div>
        </form>
      </div>
    </div>
  );
};

SortOptionsWide.propTypes = {
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

export default SortOptionsWide;
