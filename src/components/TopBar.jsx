import { Link } from "react-router-dom";
import styles from "../styles/component.module.css";
import PixelArtCanvas from "./PixelArtCanvas";

const TopBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.wrapper} common-container`}>
        <div className={styles.leftSide}>
          <Link to="/" className={styles.logo}>
            <PixelArtCanvas
              src="./src/assets/textures/LootBoxLogo.png"
              alt="Loot Box logo"
              scaleX={4}
              scaleY={4}
            />
            <h1>LootBox</h1>
          </Link>  
          <ul>
            <li>
              <Link to="/items">Items</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
        
        <div className={styles.rightSide}>
          <input
            type="search"
            placeholder="search item..."
            name="searched-items"
          />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
