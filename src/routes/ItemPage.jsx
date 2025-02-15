import { useState } from "react";
import styles from "../styles/route.module.css";
import ButtonImage from "../components/ButtonImage";
import NarrowSortDropdown from "../components/NarrowSortDropdown";
import SortOptionsWide from "../components/SortOptionsWide";

const ItemPage = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <div className={styles.itemPage}>
      <h1 className="title">Items</h1>
      <div className={styles.mainDisplay}>
        <div className={styles.sortBar}>
          <p className={styles.resultsP}>0 results</p>
          <p className={styles.filterP}>Filter</p>
          
          <ButtonImage
            src="./src/assets/svgrepo/filter-svgrepo-com.svg"
            alt="filter"
            width={32}
            height={32}
            className={styles.sortBtn}
            onClick={() => setOpenDropDown(!openDropDown)}
          /> 
          
          <SortOptionsWide />
        </div>

        {openDropDown && <NarrowSortDropdown />}
    
        <ul className={styles.itemGrid}>
          
        </ul>
      </div>
    </div>
  );
};

export default ItemPage;
