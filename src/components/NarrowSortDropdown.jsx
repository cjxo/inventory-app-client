import styles from "../styles/component.module.css";

const NarrowSortDropdown = () => {
  return (
    <div className={styles.dropDown}>
      <div className={styles.sortGroup}>
        <h3>Sort By Name</h3>
        <div className={styles.buttons}>
          <button data-testid="name-asc">Ascending</button>
          <button data-testid="name-desc">Descending</button>
        </div>
      </div>

      <div className={styles.sortGroup}>
        <h3>Sort By Price</h3>
        <div className={styles.buttons}>
          <button data-testid="price-asc">Ascending</button>
          <button data-testid="price-desc">Descending</button>
        </div>
      </div>

      <div className={styles.sortGroup}>
        <h3>Filter By Category</h3>
        <div className={styles.buttons}>
          <button>Potion</button>
          <button>Food</button>
          <button>Gems</button>
        </div>
      </div>
    </div>
  );
};

export default NarrowSortDropdown;
