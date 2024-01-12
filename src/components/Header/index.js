import { NavLink } from "react-router-dom";

import "./style.css";

const Header = () => {
  const handleNavLinkClass = (params) => {
    return `link ${params.isActive ? "link-active" : ""}`;
  };
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink className={handleNavLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={handleNavLinkClass} to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink className={handleNavLinkClass} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className={handleNavLinkClass} to="/profile">
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
