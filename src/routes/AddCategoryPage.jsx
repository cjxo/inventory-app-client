import styles from "../styles/route.module.css";

const AddCategoryPage = () => {
  return (
    <div className={styles.addCategoryPage}>
      <div className="prologue">
        <h1 className="title">Add Category</h1>
      </div>
      
      <form className={styles.form0}>
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
