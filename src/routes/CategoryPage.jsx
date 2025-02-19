import { Link } from "react-router-dom";
import styles from "../styles/route.module.css";
import categoryStyles from "../components/CategoryStyles";
import PixelArtCanvas from "../components/PixelArtCanvas";
import ButtonImage from "../components/ButtonImage";

const CategoryPage = () => {
  return (
    <div className={styles.categoryPage}>
      <div className="prologue">
        <h1 className="title">Categories</h1>
        <Link to="add" className="common-link-style">Add Category</Link>
      </div>
      
      <ul className={styles.categoryList}>
        <li style={{backgroundColor: categoryStyles.food.backgroundColor}}>
          <p>Food</p>
          <ButtonImage
            src="./src/assets/svgrepo/trash-bin-trash-svgrepo-com.svg"
            alt="remove food category"
            className={styles.removeCategory}
          />
        </li>
        
        <li style={{backgroundColor: categoryStyles.potion.backgroundColor}}>
          <p>Potion</p>
          <ButtonImage
            src="./src/assets/svgrepo/trash-bin-trash-svgrepo-com.svg"
            alt="remove potion category"
            className={styles.removeCategory}
          />
        </li>
        
        <li style={{backgroundColor: categoryStyles.gems.backgroundColor}}>
          <p>Gems</p>
          <ButtonImage
            src="./src/assets/svgrepo/trash-bin-trash-svgrepo-com.svg"
            alt="remove gems category"
            className={styles.removeCategory}
          />
        </li>
      </ul>
    </div>
  );
};

export default CategoryPage;
