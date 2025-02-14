import { Link } from "react-router-dom";
import styles from "../styles/component.module.css";
import PixelArtCanvas from "./PixelArtCanvas";

const SiteLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/items">Items</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  );
};

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

const TopBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.wrapper} common-container`}>
        <div className={styles.leftSide}>
          <button className={styles.dropDownButton}>
            <img
              src="./src/assets/svgrepo/menu-svgrepo-com.svg"
              alt="drop down links"
            />
          </button>
          <Link to="/" className={styles.logo}>
            <PixelArtCanvas
              src="./src/assets/textures/LootBoxLogo.png"
              alt="Loot Box logo"
              scaleX={4}
              scaleY={4}
            />
            <h1>LootBox</h1>
          </Link>  
          <SiteLinks />
          <SearchBar />
        </div>
        
        <div className={styles.rightSide}>
          <SiteLinks />
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
