import categoryStyles from "./CategoryStyles";
import PixelArtCanvas from "./PixelArtCanvas";
import styles from "../styles/component.module.css";

const ItemListGrid = () => {
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
      id: 6,
      name: "Poison Potion",
      price: "$5.99",
      quantity: 6,
      type: "potion",
      src: "./src/assets/textures/poison-potion.png",
    },
    {
      id: 7,
      name: "Diamond",
      price: "$1699.99",
      quantity: 4,
      type: "gems",
      src: "./src/assets/textures/diamond.png",
    },
    {
      id: 8,
      name: "Ruby",
      price: "$999.99",
      quantity: 4,
      type: "gems",
      src: "./src/assets/textures/ruby.png",
    },
  ];

  //https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
  const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  //const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  
  let scaleX = 8;
  let scaleY = 8;
  if (viewportWidth <= 768) {
    scaleX = 6;
    scaleY = 6;
  }

  return (
    <ul className={styles.itemGrid}>
      {items.map(item => (
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
export default ItemListGrid;
