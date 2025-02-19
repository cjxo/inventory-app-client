import { useState } from "react";
import styles from "../styles/component.module.css";
import ButtonImage from "./ButtonImage";

const ScrollableItems = ({ items }) => {
  const [ithChild, setIthChild] = useState(0);
  const handleScroll = ({ target }) => {
    const parent = target.parentNode;
    if (parent.nextSibling) {
      const container = parent.nextSibling;
      const containerAABB = container.getBoundingClientRect();
      const firstChild = container.children[0];
      
      const firstChildWidth = firstChild.offsetWidth;
      const borderWidthHalf = 0.5;
      
      if (firstChild.getBoundingClientRect().right > containerAABB.left) {
        container.scrollLeft = (container.children.length - 1) * (firstChildWidth - borderWidthHalf);
      } else {
        container.scrollLeft += -firstChildWidth + borderWidthHalf;
      }
    } else {
      const container = parent.previousSibling;
      const containerAABB = container.getBoundingClientRect();
      const firstChild = container.children[0];
      const lastChild = container.children[container.children.length - 1];
      
      const firstChildWidth = firstChild.offsetWidth;
      const borderWidthHalf = 0.5;
      
      if (lastChild.getBoundingClientRect().x < (containerAABB.right - lastChild.offsetWidth * 0.5)) {
        container.scrollLeft = borderWidthHalf;
      } else {        
        container.scrollLeft += firstChildWidth + borderWidthHalf;
      }
    }
    
    // https://stackoverflow.com/questions/66226428/use-css-modules-variables-in-javascript
    //const styles = window.getComputedStyle(container).getPropertyValue("--slider-card-count");
    //const width = styles.getPropertyValue("flex-basis");
  };
  
  return (
    <section className={`${styles.scrollableItemsContainer} common-container`}>
      <div className="prologue">
        <h2 className="title">Displayed Items</h2>
      </div>
      
      <div className={styles.slider}>
        <ButtonImage
          src="./src/assets/svgrepo/left-svgrepo-com.svg"
          alt="scroll left"
          className={styles.scrollBtn}
          onClick={handleScroll}
        />
        
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderCard}>
            A
          </div>
          
          <div className={styles.sliderCard}>
            B
          </div>
          
          <div className={styles.sliderCard}>
            C
          </div>
          
          <div className={styles.sliderCard}>
            D
          </div>
          
          <div className={styles.sliderCard}>
            E
          </div>
          
          <div className={styles.sliderCard}>
            F
          </div>
        </div>
        
        <ButtonImage
          src="./src/assets/svgrepo/right-svgrepo-com.svg"
          alt="scroll right"
          className={styles.scrollBtn}
          onClick={handleScroll}
        />
      </div>
    </section>
  );
};

export default ScrollableItems;
