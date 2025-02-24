import PropTypes from "prop-types";
const Loader = ({ className }) => {
  return (
    <div className={`loader0 ${className}`}></div>
  );
};

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;