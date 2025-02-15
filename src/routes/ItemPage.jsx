import { useState } from "react";
import styles from "../styles/route.module.css";
import ButtonImage from "../components/ButtonImage";
import NarrowSortDropdown from "../components/NarrowSortDropdown";
import SortOptionsWide from "../components/SortOptionsWide";
import categoryStyles from "../components/CategoryStyles";

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
          <li className={styles.itemCard}>
            <div className={styles.image}>
            </div>
            <div className={styles.itemInfo} style={{background: categoryStyles.potion.backgroundColor}}>
              <div className={styles.nameAndPrice}>
                <p>Name</p>
                <p>$99.99</p>
              </div>
              <p>Quantity: 0</p> 
            </div>
          </li>

          <li className={styles.itemCard}>
            <div className={styles.image}>
            </div>
            <div className={styles.itemInfo} style={{background: categoryStyles.potion.backgroundColor}}>
              <div className={styles.nameAndPrice}>
                <p>Name</p>
                <p>$99.99</p>
              </div>
              <p>Quantity: 0</p> 
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

    {/*<p
              className={styles.categoryTag}
              style={{
                  backgroundColor: categoryStyles.potion.backgroundColor,
                  padding: categoryStyles.potion.padding,
              }}>Potion</p>*/}

export default ItemPage;
