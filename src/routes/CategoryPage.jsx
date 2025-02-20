import { Link } from "react-router-dom";
import styles from "../styles/route.module.css";
import ButtonImage from "../components/ButtonImage";
import useCategory from "../hooks/useCategory";

const CategoryPage = () => {
  const { categories, removeCategoryGivenID } = useCategory();
  return (
    <div className={styles.categoryPage}>
      <div className="prologue">
        <h1 className="title">Categories</h1>
        <Link to="add" className="common-link-style">Add Category</Link>
      </div>
      
      <ul className={styles.categoryList}>
        {categories.map(category => (
          <li key={category.id} style={{backgroundColor: category.background_colour}}>
            <p>{category.name}</p>
            {(category.id !== 1) && <ButtonImage
              src="./src/assets/svgrepo/trash-bin-trash-svgrepo-com.svg"
              alt={`remove ${category.name} category`}
              className={styles.removeCategory}
              onClick={() => removeCategoryGivenID(category.id)}
            />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;