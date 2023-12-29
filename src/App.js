import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import NameCard from "./components/NameCard";
import LoginForm from "./components/LoginForm";
import TotalAge from "./components/TotalAge";

function App() {
  const [users, setUsers] = useState([
    { name: "Alice", age: 19, gender: "female" },
    { name: "John", age: 20, gender: "male" },
    { name: "Cris", age: 21, gender: "male" },
  ]);

  const increaseAge = (name) => {
    console.log(name);
    const newUsers = [...users];
    newUsers.forEach((user, index) => {
      if (user.name === name) {
        users[index].age += 1;
      }
    });

    setUsers(newUsers);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NameCard user={users[0]} increaseAge={increaseAge} />
        <NameCard user={users[1]} increaseAge={increaseAge} />
        <NameCard user={users[2]} increaseAge={increaseAge} />
        <TotalAge users={users} />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
