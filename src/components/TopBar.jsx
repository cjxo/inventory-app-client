import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <nav>
      <h1><Link to="/">LootBox</Link></h1>
      <ul>
        <li>
          <Link to="/items">Items</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
