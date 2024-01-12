import { useContext } from "react";

import ThemeContext from "../../contexts/ThemeContext";
import "./style.css";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const selectClassName = `header__select ${
    theme === "light" ? "header__select--light" : "header__select--dark"
  }`;

  return (
    <div className="header">
      <select
        className={selectClassName}
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default Header;
