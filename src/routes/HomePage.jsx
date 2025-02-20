import { Link } from "react-router-dom";

import ScrollableItems from "../components/ScrollableItems";
import styles from "../styles/route.module.css";
import useItems from "../hooks/useItems";

const HomePage = () => {
  const { items } = useItems();
  
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
