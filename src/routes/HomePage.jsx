import { Link } from "react-router-dom";

import ScrollableItems from "../components/ScrollableItems";
import styles from "../styles/route.module.css";

const HomePage = () => {
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
      id: 8,
      name: "Diamond",
      price: "$1699.99",
      quantity: 4,
      type: "gems",
      src: "./src/assets/textures/diamond.png",
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
      id: 4,
      name: "Health Potion",
      price: "$5.99",
      quantity: 6,
      type: "potion",
      src: "./src/assets/textures/health-potion.png",
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
      id: 9,
      name: "Ruby",
      price: "$999.99",
      quantity: 4,
      type: "gems",
      src: "./src/assets/textures/ruby.png",
    },
    {
      id: 7,
      name: "Poison Potion",
      price: "$5.99",
      quantity: 6,
      type: "potion",
      src: "./src/assets/textures/poison-potion.png",
    },
  ];
  
  return (
    <div className={styles.homePage}>
      <div className={styles.homePageIntro}>
        <h1 className="title">Welcome to <em>LootBox</em>, an inventory management app for video game items</h1>
        <p>Easily organize, track, and manage your virtual loot with ease.</p>
      </div>
  
      <div className={styles.linkButtons}>
        <Link className="common-link-style" to="/items">See Items</Link>
        <Link className="common-link-style" to="/categories">See Categories</Link>
      </div>

      <ScrollableItems items={items} />
    </div>
  );
};

export default HomePage;
