import { Link } from "react-router-dom";
import styles from "../styles/component.module.css";
import PixelArtCanvas from "./PixelArtCanvas";

import SearchBar from "./SearchBar";
import SiteLinks from "./SiteLinks";

const TopBarWide = () => {
  return (
    <nav className={styles.topBarWide}>
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
          <SiteLinks />
        </div>
        
        <div className={styles.rightSide}>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default TopBarWide;
