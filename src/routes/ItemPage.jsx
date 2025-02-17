import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/route.module.css";
import ButtonImage from "../components/ButtonImage";
import NarrowSortDropdown from "../components/NarrowSortDropdown";
import SortOptionsWide from "../components/SortOptionsWide";
import ItemListGrid from "../components/ItemListGrid";

const ItemPage = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  
  const [filters, setFilters] = useState({
    nameSortOrder: "none",
    priceSortOrder: "none",
    categories: {
      potion: false,
      food: false,
      gems: false,
    },
  });

  const handleFiltersChange = (filtersData) => {
    console.log(filtersData);
    setFilters(filtersData);
  };

  const items = [
    {
      id: 1,
      name: "Blueberry",
      price: "$2.99",
      quantity: 14,
      type: "food",
      src: "./src/assets/textures/blueberry.png",
    },
    {
      id: 2,
      name: "Tomato",
      price: "$1.99",
      quantity: 10,
      type: "food",
      src: "./src/assets/textures/tomato.png",
    },
    {
      id: 3,
      name: "Ramen",
      price: "$10.99",
      quantity: 3,
      type: "food",
      src: "./src/assets/textures/ramen.png",
    },
    {
      id: 4,
      name: "Health Potion",
      price: "$5.99",
      quantity: 6,
      type: "potion",
      src: "./src/assets/textures/health-potion.png",
    },
    {
      id: 5,
      name: "Speed Potion",
      price: "$5.99",
      quantity: 6,
      type: "potion",
      src: "./src/assets/textures/speed-potion.png",
    },
    {
      id: 6,
      name: "Luck Potion",
      price: "$5.99",
      quantity: 6,
      type: "potion",
      src: "./src/assets/textures/luck-potion.png",
    },
    {
      id: 7,
      name: "Poison Potion",
      price: "$5.99",
      quantity: 6,
      type: "potion",
      src: "./src/assets/textures/poison-potion.png",
    },
    {
      id: 8,
      name: "Diamond",
      price: "$1699.99",
      quantity: 4,
      type: "gems",
      src: "./src/assets/textures/diamond.png",
    },
    {
      id: 9,
      name: "Ruby",
      price: "$999.99",
      quantity: 4,
      type: "gems",
      src: "./src/assets/textures/ruby.png",
    },
  ];
  
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
            src="./src/assets/svgrepo/filter-svgrepo-com.svg"
            alt="filter"
            width={32}
            height={32}
            className={styles.sortBtn}
            onClick={() => setOpenDropDown(!openDropDown)}
          /> 

          <SortOptionsWide onFiltersChanged={handleFiltersChange} defaultFilters={filters} />
        </div>

        {openDropDown && <NarrowSortDropdown onFiltersChanged={handleFiltersChange} defaultFilters={filters} />}

        <ItemListGrid
          items={items}
          nameSortOrder={filters.nameSortOrder}
          priceSortOrder={filters.priceSortOrder}
          categories={filters.categories}
        />
      </div>
    </div>
  );
};

export default ItemPage;