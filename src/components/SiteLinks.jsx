import { NavLink } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

import useItems from "../hooks/useItems";
import useCategory from "../hooks/useCategory";
import api from "../lib/api";
import styles from "../styles/component.module.css";

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
  const [isReseting, setIsReseting] = useState(false);
  
  const items = useItems();
  const categories = useCategory();
  const handleResetState = async () => {
    setIsReseting(true);
    await api.reset();
    await categories.refetch();
    await items.refetch();
    setIsReseting(false);
  };

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
      <li>
        <button onClick={handleResetState} disabled={isReseting} className={styles.resetStateBtn}>Reset State</button>
      </li>
    </ul>
  );
};

ActiveNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SiteLinks;
