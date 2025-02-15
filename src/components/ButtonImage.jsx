import PropTypes from "prop-types";

const ButtonImage = ({ src, alt, width, height, ...rest }) => {
  return (
    <button styles={{ background: "transparent" }} {...rest}>
      <img src={src} alt={alt} width={width} height={height} />
    </button>
  );
};

ButtonImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default ButtonImage;
