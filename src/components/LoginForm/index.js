import { useState } from "react";

import "./style.css";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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
    <form className="login-form" onSubmit={handleSubmitForm}>
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
