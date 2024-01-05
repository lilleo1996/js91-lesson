import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import logo from "./logo.svg";
import "./App.css";
import NameCard from "./components/NameCard";
import TodoList from "./components/TodoList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([
    { id: uuidv4(), name: "Alice", age: 19, gender: "female" },
    { id: uuidv4(), name: "John", age: 20, gender: "male" },
    { id: uuidv4(), name: "Cris", age: 21, gender: "male" },
  ]);

  const renderNameCard = () => {
    return users.map((user) => (
      <NameCard user={user} increaseAge={increaseAge} />
    ));
  };

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
        {/* {renderNameCard()}
        <TotalAge users={users} /> */}
        {isLoggedIn && <h4>Account is Hieu</h4>}
        <button
          style={{ backgroundColor: isLoggedIn ? "yellow" : "red" }}
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
