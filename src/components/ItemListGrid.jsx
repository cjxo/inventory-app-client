import PropTypes from "prop-types";

import categoryStyles from "./CategoryStyles";
import PixelArtCanvas from "./PixelArtCanvas";
import styles from "../styles/component.module.css";

const ItemListGrid = ({ items, nameSortOrder, priceSortOrder, categories }) => {
  //https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
  const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
 //const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  
  let scaleX = 8;
  let scaleY = 8;
  if (viewportWidth <= 768) {
    scaleX = 6;
    scaleY = 6;
  }

  const itemsToRender = items.filter(item => {
    if (!categories.potion && !categories.food && !categories.gems) return true;
    if (categories.potion && (item.type === "potion")) return true;
    if (categories.food && (item.type === "food")) return true;
    if (categories.gems && (item.type === "gems")) return true;

    return false;
  }).sort((a, b) => {
    if (nameSortOrder === "asc") {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
    } else if (nameSortOrder === "desc") {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
    }

    return 0;
  }).sort((a, b) => {
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

  return (
    <ul className={styles.itemGrid}>
      {itemsToRender.map(item => (
        <li key={item.id} className={styles.itemCard}>
          <div className={styles.image}>
            <PixelArtCanvas
              src={item.src}
              alt={item.name}
              scaleX={scaleX}
              scaleY={scaleY}
            />
          </div>
          <div className={styles.itemInfo} style={{background: categoryStyles[item.type].backgroundColor}}>
              <p>{item.name}</p>
            <div className={styles.quantityAndPrice}>
              <p className={styles.quantity}>x{item.quantity}</p> 
              <p>{item.price}</p>
            </div>
          </div>
        </li>
      ))}
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
      type: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  nameSortOrder: PropTypes.oneOf(["asc", "desc", "none"]).isRequired,
  priceSortOrder: PropTypes.oneOf(["asc", "desc", "none"]).isRequired,
  categories: PropTypes.shape({
    food: PropTypes.bool.isRequired,
    potion: PropTypes.bool.isRequired,
    gems: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ItemListGrid;
