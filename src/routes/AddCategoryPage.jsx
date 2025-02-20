import { useNavigate } from "react-router-dom";
import styles from "../styles/route.module.css";
import useCategory from "../hooks/useCategory";

const AddCategoryPage = () => {
  const navigate = useNavigate();
  const { addCategory } = useCategory();
  
  const handleAddCategory = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get("category-name");
    const categoryColour = fd.get("category-colour");
    addCategory(name, categoryColour)
      .then(() => navigate("/categories"));
  };
  
  return (
    <div className={styles.addCategoryPage}>
      <div className="prologue">
        <h1 className="title">Add Category</h1>
      </div>
      
      <form className={styles.form0} onSubmit={handleAddCategory}>
        <div className={styles.labelInputPair}>
          <label htmlFor="category-name">Name</label>
          <input type="text" id="category-name" name="category-name" required />
        </div>
        
        <div className={styles.labelInputPair}>
          <label htmlFor="category-colour">Color</label>
          <div className={styles.colourSelectWrap}>
            <input type="color" id="category-colour" name="category-colour" required />
          </div>
        </div>
        
        <button className={`common-link-style ${styles.submit}`}>Submit</button>
      </form>
    </div>
  );
};

export default AddCategoryPage;
