import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/route.module.css";
import ButtonImage from "../components/ButtonImage";
import useCategory from "../hooks/useCategory";
import Loader from "../components/Loader";
import { hexRGBToHSV,HSVToHexRGB } from "../lib/utils";

const CategoryPage = () => {
  const { isLoading, categories, removeCategoryGivenID } = useCategory();
  
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
            // https://en.wikipedia.org/wiki/Relative_luminance
            const r = parseInt(category.background_colour.slice(1, 3), 16) / 255;
            const g = parseInt(category.background_colour.slice(3, 5), 16) / 255;
            const b = parseInt(category.background_colour.slice(5, 7), 16) / 255;
            const luminance = 0.2126 * r*r + 0.7152 * g*g + 0.0722 * b*b;

            // oh great, i just wasted time doing this! Solution is at https://en.wikipedia.org/wiki/Relative_luminance!
            /*
            const hsv = hexRGBToHSV(category.background_colour);
            hsv.hue = (hsv.hue + 180) % 360;
            hsv.saturation = 0;
            hsv.value = ;
            const colour = HSVToHexRGB(hsv);*/
                        
            return <li key={category.id} style={{backgroundColor: category.background_colour}}>
              <p style={{ color: luminance > 0.5 ? "#000000" : "#FFFFFF" }}>{category.name}</p>
              {(category.id !== 1) && <ButtonImage
                src="./src/assets/svgrepo/trash-bin-trash-svgrepo-com.svg"
                alt={`remove ${category.name} category`}
                className={styles.removeCategory}
                onClick={() => removeCategoryGivenID(category.id)}
              />}
            </li>
          })}
        </ul>
      )}
    </div>
  );
};

export default CategoryPage;