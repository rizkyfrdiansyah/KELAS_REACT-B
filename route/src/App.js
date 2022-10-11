import { Routes, Route } from "react-router-dom";

/** Styles */
import "./App.css";

/** Components */
import Home from "./Pages/Home";
import AboutApp from "./Pages/AboutApp";
import AboutAuthor from "./Pages/AboutAuthor";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutApp />} />
      <Route path="/about/about-app" element={<AboutApp />} />
      <Route path="/about/about-author" element={<AboutAuthor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
