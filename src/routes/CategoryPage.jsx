import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/route.module.css";
import ButtonImage from "../components/ButtonImage";
import useCategory from "../hooks/useCategory";
import useItems from "../hooks/useItems";
import Loader from "../components/Loader";

const CategoryPage = () => {
  const [deletingID, setDeletingID] = useState(null);
  const { isLoading, categories, removeCategoryGivenID, findByName } = useCategory();
  const { changeItemCategoryFromCategoryIDToNewCategory } = useItems();
  
  const uncategorized = findByName("uncategorized");
  
  const handleRemoveCategory = async (id) => {
    setDeletingID(id);
    await removeCategoryGivenID(id);
    changeItemCategoryFromCategoryIDToNewCategory(id, uncategorized);
    setDeletingID(null);
  };
  
  return (
    <div className={styles.categoryPage}>
      <div className="prologue">
        <h1 className="title">Categories</h1>
        <Link to="add" className="common-link-style">Add Category</Link>
      </div>
      
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.categoryList}>
          {categories.map(category => {
            // oh great, i just wasted time doing this! Solution is at https://en.wikipedia.org/wiki/Relative_luminance!
            /*
            const hsv = hexRGBToHSV(category.background_colour);
            hsv.hue = (hsv.hue + 180) % 360;
            hsv.saturation = 0;
            hsv.value = ;
            const colour = HSVToHexRGB(hsv);*/
            
            return <li key={category.id} style={{backgroundColor: category.background_colour}}>
              <p style={{ color: category.textColour }}>{category.name}</p>
              {(category.name !== "uncategorized") && <ButtonImage
                src="./svgrepo/trash-bin-trash-svgrepo-com.svg"
                alt={`remove ${category.name} category`}
                className={styles.removeCategory}
                disabled={deletingID === category.id}
                onClick={() => handleRemoveCategory(category.id)}
              />}
            </li>
          })}
        </ul>
      )}
    </div>
  );
};

export default CategoryPage;
