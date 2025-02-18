import { useState, useRef } from "react";

import styles from "../styles/route.module.css";
import categoryStyles from "../components/CategoryStyles";
//import PixelArtCanvas from "../components/PixelArtCanvas";
import FileUploader from "../components/FileUploader";

const AddItemPage = () => {  
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
            <div className={styles.radioRadioPair}>
              <input id="item-food" value="food" name="item-category" type="radio" defaultChecked />
              <label htmlFor="item-food" style={categoryStyles.food}>Food</label>
            </div>
            
            <div className={styles.radioRadioPair}>
              <input id="item-potion" value="potion" name="item-category" type="radio" />
              <label htmlFor="item-potion" style={categoryStyles.potion}>Potion</label>
            </div>
            
            <div className={styles.radioRadioPair}>
              <input id="item-gems" value="gems" name="item-category" type="radio" />
              <label htmlFor="item-gems" style={categoryStyles.gems}>Gems</label>
            </div>
          </div>
        </div>
        
        <div className={styles.labelInputPair}>
          <label htmlFor="item-price">Price &#40;&#36;&#41;</label>
          <input type="number" id="item-price" name="item-price" required />
        </div>
        
        <div className={styles.labelInputPair}>
          <label htmlFor="item-quantity">Quantity</label>
          <input type="number" id="item-quantity" name="item-quantity" required />
        </div>
        
        <FileUploader />
        
        <button className={`common-link-style ${styles.submit}`}>Submit</button>
      </form>
    </div>
  );
};

export default AddItemPage;