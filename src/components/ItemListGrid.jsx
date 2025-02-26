import { useState } from "react";
import PropTypes from "prop-types";

import PixelArtCanvas from "./PixelArtCanvas";
import styles from "../styles/component.module.css";
import useCategory from "../hooks/useCategory";
import useItems from "../hooks/useItems";
import ButtonImage from "./ButtonImage";

// so far, from what I understand about testing, pull out functions from
// components to be "testable" as a unit
const filterItemsByCategory = (items, categories) => {
  return items.filter(item => {
    if (Object.values(categories).every(value => !value)) return true;
    return Object.keys(categories).some(category => categories[category] && (item.type_name === category));
  });
};

const sortByName = (items, nameSortOrder) => {
  return items.sort((a, b) => {
    if (nameSortOrder === "asc") {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
    } else if (nameSortOrder === "desc") {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
    }
    
    return 0;
  });
};

const sortByPrice = (items, priceSortOrder) => {
  return items.sort((a, b) => {
    const aa = parseFloat(a.price.substring(1));
    const bb = parseFloat(b.price.substring(1));
    if (priceSortOrder === "asc") {
      if (aa < bb) return -1;
      if (aa > bb) return 1;
    } else if (priceSortOrder === "desc") {
      if (aa > bb) return -1;
      if (aa < bb) return 1;
    }

    return 0;
  });
};

const ItemListGrid = ({ items, nameSortOrder, priceSortOrder, categories }) => {
  const c = useCategory();
  const [deletingID, setDeletingID] = useState(null);
  const { removeItemGivenID } = useItems();
  //https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
  const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
 //const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  
  const handleRemoveItem = async (id) => {
    setDeletingID(id);
    await removeItemGivenID(id);
    setDeletingID(null);
  };
  
  let scaleX = 8;
  let scaleY = 8;
  if (viewportWidth <= 768) {
    scaleX = 6;
    scaleY = 6;
  }
  
  const itemsToRender = sortByPrice(sortByName(filterItemsByCategory(items, categories), nameSortOrder), priceSortOrder);

  return (
    <ul className={styles.itemGrid}>
      {itemsToRender.map(item => {
        const category = c.categories.find(cat => cat.id === item.type);
        return <li key={item.id} className={styles.itemCard}>
          <div className={styles.image}>
            <PixelArtCanvas
              src={item.src}
              alt={item.name}
              scaleX={scaleX}
              scaleY={scaleY}
            />
          </div>
          <div className={`${styles.itemInfo}`} style={{background: category?.background_colour}}>
            <div className={styles.left} style={{color: category?.textColour}}>
              <p>{item.name}</p>
              <p className={styles.quantity}>x{item.quantity}</p> 
              <p>{item.price}</p>
            </div>
            
            <div className={styles.right}>
              <ButtonImage
                src="./src/assets/svgrepo/trash-bin-trash-svgrepo-com.svg"
                alt={`remove ${item.name}`}
                className={styles.removeItem}
                disabled={deletingID === item.id}
                onClick={() => handleRemoveItem(item.id)}
              />
            </div>
          </div>
        </li>
      })}
    </ul>
  );
}

ItemListGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      type: PropTypes.number.isRequired,
      type_name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  nameSortOrder: PropTypes.oneOf(["asc", "desc", "none"]).isRequired,
  priceSortOrder: PropTypes.oneOf(["asc", "desc", "none"]).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ItemListGrid;
export { filterItemsByCategory, sortByName, sortByPrice };