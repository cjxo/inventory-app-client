import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/route.module.css";
import ButtonImage from "../components/ButtonImage";
import NarrowSortDropdown from "../components/NarrowSortDropdown";
import SortOptionsWide from "../components/SortOptionsWide";
import ItemListGrid from "../components/ItemListGrid";
import Loader from "../components/Loader";
import useItems from "../hooks/useItems"; 

const ItemPage = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const { isLoading, items } = useItems();
  
  const [filters, setFilters] = useState({
    nameSortOrder: "none",
    priceSortOrder: "none",
    categories: {},
  });

  const handleFiltersChange = (filtersData) => {
    console.log(filtersData);
    setFilters(filtersData);
  };
  
  return (
    <div className={styles.itemPage}>
      <div className="prologue">
        <h1 className="title">Items</h1>
        <Link to="add" className="common-link-style">Add Item</Link>
      </div>
      <div className={styles.mainDisplay}>
        <div className={styles.sortBar}>
          <p className={styles.resultsP}>0 results</p>
          <p className={styles.filterP}>Filter</p>
          
          <ButtonImage
            src="./svgrepo/filter-svgrepo-com.svg"
            alt="filter"
            width={32}
            height={32}
            className={styles.sortBtn}
            onClick={() => setOpenDropDown(!openDropDown)}
          /> 

          <SortOptionsWide onFiltersChanged={handleFiltersChange} defaultFilters={filters} />
        </div>

        {openDropDown && <NarrowSortDropdown onFiltersChanged={handleFiltersChange} defaultFilters={filters} />}
  
        {isLoading ? (
          <Loader className={styles.loader} />
        ) : (
          <ItemListGrid
            items={items}
            nameSortOrder={filters.nameSortOrder}
            priceSortOrder={filters.priceSortOrder}
            categories={filters.categories}
          />
        )}
      </div>
    </div>
  );
};

export default ItemPage;
