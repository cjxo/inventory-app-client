import { useState, useRef } from "react";

import styles from "../styles/route.module.css";
import FileUploader from "../components/FileUploader";
import useCategory from "../hooks/useCategory";

const AddItemPage = () => {  
  const { categories } = useCategory();
  
  return (
    <div className={styles.addItemPage}>
      <div className="prologue">
        <h1 className="title">Add Item</h1>
      </div>
      <form className={styles.form0}>
        <div className={styles.labelInputPair}>
          <label htmlFor="item-name">Name</label>
          <input type="text" id="item-name" name="item-name" required />
        </div>
        
        <div className={styles.labelInputPair}>
          <p>Category</p>
          <div className={styles.radios}>
            {categories.map(category => (
              <div key={category.id} className={styles.radioRadioPair}>
                <input
                  id={`item-${category.name}`}
                  value={category.name}
                  name="item-category"
                  type="radio"
                  defaultChecked={category.id === 1} />
                <label
                  htmlFor={`item-${category.name}`}
                  style={{backgroundColor: category.background_colour}}
                  className="category-label"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.labelInputPair}>
          <label htmlFor="item-price">Price &#40;&#36;&#41;</label>
          <input type="number" id="item-price" name="item-price" required />
        </div>
        
        <div className={styles.labelInputPair}>
          <label htmlFor="item-quantity">Quantity</label>
          <input type="number" id="item-quantity" name="item-quantity" min="0" max="9999" required />
        </div>
        
        <FileUploader />
        
        <button className={`common-link-style ${styles.submit}`}>Submit</button>
      </form>
    </div>
  );
};

export default AddItemPage;