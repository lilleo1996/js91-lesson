import { useState } from "react";

import "./App.css";
import ThemeContext from "./contexts/ThemeContext";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <Header />
        <LoginForm />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
