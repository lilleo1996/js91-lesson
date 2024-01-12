import { useState, useContext } from "react";

import "./style.css";
import ThemeContext from "../../contexts/ThemeContext";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const themeContext = useContext(ThemeContext);

  const handleChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleChangePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(name, password);
    // validate data
    // format data
    // call API
    setName("");
    setPassword("");
  };

  return (
    <form
      className={`login-form ${
        themeContext.theme === "light" ? "light" : "dark"
      }`}
      onSubmit={handleSubmitForm}
    >
      <div className="name-input">
        <label>Name:</label>
        <input type="text" value={name} onChange={handleChangeName}></input>
      </div>
      <div className="password-input">
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={handleChangePassword}
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
