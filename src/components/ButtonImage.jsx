import PropTypes from "prop-types";
import styles from "../styles/component.module.css";

const ButtonImage = ({ src, alt, width, height, className, ...rest }) => {
  return (
    <button
      styles={{ background: "transparent" }}
      className={`${styles.buttonImage} ${className}`}
      {...rest}
    >
      <img src={src} alt={alt} width={width} height={height} />
    </button>
  );
};

ButtonImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default ButtonImage;
