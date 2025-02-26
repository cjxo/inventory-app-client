import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/route.module.css";
import useCategory from "../hooks/useCategory";
import Loader from "../components/Loader";

const AddCategoryPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  const { addCategory } = useCategory();
  
  const handleAddCategory = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get("category-name");
    const categoryColour = fd.get("category-colour");
    setIsLoading(true);
    addCategory(name, categoryColour)
      .then(result => {
        setIsLoading(false);
        if (result.ok) {
          navigate("/categories");
        } else {
          setError(result.message);
        }
      });
  };
  
  return (
    <div className={styles.addCategoryPage}>
      <div className="prologue">
        <h1 className="title">Add Category</h1>
      </div>
      
      {error && <p className={styles.formError}>{error}</p>}
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
        
        <button disabled={isLoading} className={`common-link-style ${styles.submit}`}>
          {isLoading ? <Loader className={styles.loader} /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddCategoryPage;
