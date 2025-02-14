import { NavLink } from "react-router-dom";
import styles from "../styles/component.module.css";
import PropTypes from "prop-types";

const ActiveNavLink = ({ to, name }) => {
  return (
    <NavLink
      to={to}
      className={
        ({isActive}) => {
          return isActive ? styles.active : "";
        }
      }
    >
      {name}
    </NavLink>
  );
};

const SiteLinks = () => {
  return (
    <ul className={styles.siteLinks}>
      <li>
        <ActiveNavLink to="/" name="Home" />
      </li>
      <li>
        <ActiveNavLink to="/items" name="Items" />
      </li>
      <li>
        <ActiveNavLink to="/categories" name="Categories" />
      </li>
    </ul>
  );
};

ActiveNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SiteLinks;
