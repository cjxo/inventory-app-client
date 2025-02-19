import { useState, useEffect, useRef } from "react";
import styles from "../styles/component.module.css";
import ButtonImage from "./ButtonImage";

const ScrollableItems = ({ items }) => {
  const [ithChild, setIthChild] = useState(0);
  const containerRef = useRef(null);
  
  const handleScroll = (scrollDir) => {
    const container = containerRef.current;
    const containerAABB = container.getBoundingClientRect();
    const cardCount = window.getComputedStyle(container).getPropertyValue("--slider-card-count");
    const borderWidthHalf = 0.5;
    const scrollLimit = (container.children.length - 1) - (cardCount - 1);
    
    if (scrollDir === "L") {
      const firstChild = container.children[0];
      if (container.children.length > cardCount) {
        if ((ithChild - 1) < 0) {
          setIthChild(scrollLimit);
          container.scrollLeft = (container.children.length - 1) * (firstChild.offsetWidth - borderWidthHalf);
        } else {
          const ithChildNode = container.children[ithChild - 1];
          setIthChild(ithChild - 1);
          container.scrollLeft += ithChildNode.getBoundingClientRect().left - containerAABB.left + borderWidthHalf;
        }
      }
    } else if (scrollDir === "R") {
      const ithChildNode = container.children[ithChild + 1];
      
      if (container.children.length > cardCount) {
        if (scrollLimit === ithChild) {
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
  
  useEffect(() => {
    const snap = () => {
      const container = containerRef.current;
      /*
      const containerAABB = container.getBoundingClientRect();
      const cardCount = window.getComputedStyle(container).getPropertyValue("--slider-card-count");
      const scrollLimit = (container.children.length - 1) - (cardCount - 1);
      const firstChild = container.children[0];
      const borderWidthHalf = 0.5;
      
      if (container.children.length > cardCount) {
        if ((ithChild - 1) < 0) {
          container.scrollLeft = (container.children.length - 1) * (firstChild.offsetWidth - borderWidthHalf);
        } else {
          const ithChildNode = container.children[ithChild - 1];
          container.scrollLeft += ithChildNode.getBoundingClientRect().left - containerAABB.left + borderWidthHalf;
        }
      } else {
      }*/
      container.scrollLeft = 0;
    };
    
    addEventListener("resize", snap);
    return () => removeEventListener("resize", snap);
  }, []);
  
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
          onClick={() => handleScroll("L")}
        />
        
        <div className={styles.sliderWrapper} ref={containerRef}>
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
          onClick={() => handleScroll("R")}
        />
      </div>
    </section>
  );
};

export default ScrollableItems;
