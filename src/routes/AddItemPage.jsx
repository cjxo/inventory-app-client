import styles from "../styles/route.module.css";

const AddItemPage = () => {
  return (
    <div className={styles.addItemPage}>
      <div className="prologue">
        <h1 className="title">Add Item</h1>
      </div>
      <form>
        <input type="text" id="item-name" name="item-name" required />
        <input type="text" id="item-category" name="item-category" required />
        <input type="text" id="item-price" name="item-price" required />
        <input type="text" id="item-quantity" name="item-quantity" required />
        <input type="file" id="item-image" name="item-image" accept="image/png" />
        
        <button className="common-link-style">Submit</button>
      </form>
    </div>
  );
};

export default AddItemPage;