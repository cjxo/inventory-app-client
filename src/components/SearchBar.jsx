import styles from "../styles/component.module.css";

const SearchBar = () => {
  return (
    <input
      type="search"
      placeholder="search item..."
      name="searched-items"
      className={styles.navSearchBar}
    />
  );
};

export default SearchBar;
