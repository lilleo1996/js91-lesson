import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import AboutMe from "./pages/AboutMe";
import Courses from "./pages/Courses";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="" element={<AboutMe />} />
          <Route path="courses" element={<Courses />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
