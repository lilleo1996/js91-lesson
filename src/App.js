import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Profile
          imageUrl="https://i.imgur.com/MK3eW3Am.jpg"
          name="Katherine Johnson"
        />
      </header>
    </div>
  );
}

export default App;
