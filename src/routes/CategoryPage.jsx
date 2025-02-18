import { Link } from "react-router-dom";
import styles from "../styles/route.module.css";
import categoryStyles from "../components/CategoryStyles";
import PixelArtCanvas from "../components/PixelArtCanvas";

const CategoryPage = () => {
  return (
    <div className={styles.categoryPage}>
      <div className="prologue">
        <h1 className="title">Categories</h1>
        <Link to="add" className="common-link-style">Add Category</Link>
      </div>
      
      <ul className={styles.categoryList}>
        <li style={{backgroundColor: categoryStyles.food.backgroundColor}}>
          <p>food</p>
          <button>
            <PixelArtCanvas
              src="./src/assets/textures/trash.png"
              alt="trash icon"
              scaleX={2}
              scaleY={2}
            />
          </button>
        </li>
        
        <li style={{backgroundColor: categoryStyles.potion.backgroundColor}}>
          <p>potion</p>
          <button>
            <PixelArtCanvas
              src="./src/assets/textures/trash.png"
              alt="trash icon"
              scaleX={2}
              scaleY={2}
            />
          </button>
        </li>
        
        <li style={{backgroundColor: categoryStyles.gems.backgroundColor}}>
          <p>gems</p>
          <button>
            <PixelArtCanvas
              src="./src/assets/textures/trash.png"
              alt="trash icon"
              scaleX={2}
              scaleY={2}
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CategoryPage;
