import { useState } from "react";
import styles from "../styles/component.module.css";
import ButtonImage from "./ButtonImage";

const ScrollableItems = ({ items }) => {
  const [ithChild, setIthChild] = useState(0);
  
  const handleScroll = ({ target }) => {
    let parent;
    if (target.tagName === "IMG") {
      parent = target.parentNode;
    } else {
      parent = target;
    }
    
    if (parent.nextSibling) {
      const container = parent.nextSibling;
      const containerAABB = container.getBoundingClientRect();
      const firstChild = container.children[0];
      const borderWidthHalf = 0.5;
      const cardCount = window.getComputedStyle(container).getPropertyValue("--slider-card-count");
      
      if (container.children.length > cardCount) {
        if ((ithChild - 1) < 0) {
          setIthChild((container.children.length - 1) - (cardCount - 1));
          container.scrollLeft = (container.children.length - 1) * (firstChild.offsetWidth - borderWidthHalf);
        } else {
          const ithChildNode = container.children[ithChild - 1];
          setIthChild(ithChild - 1);
          container.scrollLeft += ithChildNode.getBoundingClientRect().left - containerAABB.left + borderWidthHalf;
        }
      }
    } else {
      const container = parent.previousSibling;
      const containerAABB = container.getBoundingClientRect();
      const ithChildNode = container.children[ithChild + 1];
      const lastChild = container.children[container.children.length - 1];
      const borderWidthHalf = 0.5;
      const cardCount = window.getComputedStyle(container).getPropertyValue("--slider-card-count");
      
      if (container.children.length > cardCount) {
        if (((container.children.length - 1) - (cardCount - 1)) === ithChild) {
          container.scrollLeft = borderWidthHalf;
          setIthChild(0);
        } else {
          setIthChild(ithChild + 1);
          container.scrollLeft += ithChildNode.getBoundingClientRect().left - containerAABB.left + borderWidthHalf;
        }
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
