import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "../styles/component.module.css";
import PixelArtCanvas from "./PixelArtCanvas";
import SearchBar from "./SearchBar";
import SiteLinks from "./SiteLinks";
import ButtonImage from "./ButtonImage";

const TopBarNarrow = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    // Matthew 7:13-14
    // Enter through the narrow gate; for the gate is wide and the way is broad that leads to destruction,
    // and there are many who enter through it. For the gate is small and the way is narrow that leads to life,
    // and there are few who find it.
    <nav className={styles.topBarNarrow}>
      <div className={`${styles.wrapper} common-container`}>
        <div className={styles.leftSide}>
          <ButtonImage
            src="./svgrepo/menu-svgrepo-com.svg"
            alt="drop down links"
            width={24}
            height={24}
            className={styles.dropDownButton}
            onClick={() => setOpenDropDown(!openDropDown)}
          />
          <Link to="/" className={styles.logo}>
            <PixelArtCanvas
              src="./textures/LootBoxLogo.png"
              alt="Loot Box logo"
              scaleX={3}
              scaleY={3}
            />
          </Link>
          <SearchBar />
        </div>
        
        {openDropDown && (
          <div className={styles.rightSide}>
            <SiteLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopBarNarrow;
