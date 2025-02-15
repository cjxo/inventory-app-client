import styles from "../styles/component.module.css";
import categoryStyles from "./CategoryStyles";

const SortOptionsWide = () => {
  return (
    <div className={styles.sortDropdownWide}>
      <div className={styles.sortGroup}>
        <h3>Sort By Name</h3>
        <form>
          <div className={styles.inputLabelPair}>
            <input id="name-asc" value="asc" name="name-sort-order" type="radio" />
            <label htmlFor="name-asc">Ascending</label>
          </div>
          
          <div className={styles.inputLabelPair}>
            <input id="name-desc" value="desc" name="name-sort-order" type="radio" />
            <label htmlFor="name-desc">Descending</label>
          </div>
        </form>
      </div>
      
      <div className={styles.sortGroup}>
        <h3>Sort By Price</h3>
        <form>
          <div className={styles.inputLabelPair}>
            <input id="price-asc" value="asc" name="price-sort-order" type="radio" />
            <label htmlFor="price-asc">Ascending</label>
          </div>
          
          <div className={styles.inputLabelPair}>
            <input id="price-desc" value="desc" name="price-sort-order" type="radio" />
            <label htmlFor="price-desc">Descending</label>
          </div>
        </form>
      </div>
      
      <div className={styles.sortGroup}>
        <h3>Filter By Category</h3>
        
        <form>
          <div className={styles.inputLabelPair}>
            <input id="potion" value="potion" name="potion" type="checkbox" />
            <label style={categoryStyles.potion} htmlFor="potion">Potion</label>
          </div>
          <div className={styles.inputLabelPair}>
            <input id="food" value="food" name="food" type="checkbox" />
            <label style={categoryStyles.food} htmlFor="food">Food</label>
          </div>
          <div className={styles.inputLabelPair}>
            <input id="gems" value="gems" name="gems" type="checkbox" />
            <label style={categoryStyles.gems} htmlFor="gems">Gems</label>
          </div>
        </form>

      </div>
    </div>
  );
};

export default SortOptionsWide;
