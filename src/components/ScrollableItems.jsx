import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "../styles/component.module.css";
import ButtonImage from "./ButtonImage";
import PixelArtCanvas from "./PixelArtCanvas";

const ScrollableItems = ({ items }) => {
  const [ithChild, setIthChild] = useState(0);
  const containerRef = useRef(null);
  
  const handleScroll = (scrollDir) => {
    const container = containerRef.current;
    const containerAABB = container.getBoundingClientRect();
    const cardCount = window.getComputedStyle(container).getPropertyValue("--slider-card-count");
    //const cardGap = parseInt(window.getComputedStyle(container).getPropertyValue("--slider-card-gap"));
    const borderWidthHalf = 0.5;
    const scrollLimit = (container.children.length - 1) - (cardCount - 1);
    
    if (container.children.length > cardCount) {
      if (scrollDir === "L") {
        const firstChild = container.children[0];
        if ((ithChild - 1) < 0) {
          const toScrollTo = container.children[container.children.length - cardCount];
          setIthChild(scrollLimit);
          container.scrollLeft = toScrollTo.getBoundingClientRect().left - containerAABB.left + borderWidthHalf;
        } else {
          const ithChildNode = container.children[ithChild - 1];
          setIthChild(ithChild - 1);
          container.scrollLeft += ithChildNode.getBoundingClientRect().left - containerAABB.left + borderWidthHalf;
        }
      } else if (scrollDir === "R") {
        const ithChildNode = container.children[ithChild + 1];
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
    const key = setInterval(() => {
      handleScroll("R");
    }, 5000);
    
    const snap = () => {
      handleScroll("L");
      //handleScroll("R");
    };
    
    addEventListener("resize", snap);
    return () => {
      removeEventListener("resize", snap);
      clearInterval(key);
    }
  }, [ithChild]);
  
  return (
    <section className={`${styles.scrollableItemsContainer} common-container`}>
      <div className="prologue">
        <h2 className="title">Displayed Items</h2>
      </div>
      
      <div className={styles.slider}>
        <ButtonImage
          src="./svgrepo/left-svgrepo-com.svg"
          alt="scroll left"
          className={styles.scrollBtn}
          onClick={() => handleScroll("L")}
        />
        
        <div className={styles.sliderWrapper} ref={containerRef}>
          {items.map(item => (
            <div key={item.id} className={styles.sliderCard}>
              <PixelArtCanvas
                src={item.src}
                alt={item.name}
                scaleX={8}
                scaleY={8}
              />
            </div>
          ))}
        </div>
        
        <ButtonImage
          src="./svgrepo/right-svgrepo-com.svg"
          alt="scroll right"
          className={styles.scrollBtn}
          onClick={() => handleScroll("R")}
        />
      </div>
    </section>
  );
};

ScrollableItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ScrollableItems;
