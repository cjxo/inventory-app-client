import { Link } from "react-router-dom";
import styles from "../styles/route.module.css";

const CategoryPage = () => {
  return (
    <div className={styles.categoryPage}>
      <div className="prologue">
        <h1 className="title">Categories</h1>
        <Link to="add" className="common-link-style">Add Category</Link>
      </div>
    </div>
  );
};

export default CategoryPage;
