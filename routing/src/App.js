// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import AboutApp from "./Components/AboutApp/Index";
import AboutAuthor from "./Components/AboutAuthor";
import "./App.css";
import { useState } from "react";

function App() {
  const [Toggle, setToggle] = useState(false);

  const handleBtn = () => {
    if (Toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <div className={Toggle ? "Sidebar active" : "Sidebar"}>
            <div>
              <button
                className="btn"
                onClick={() => {
                  handleBtn();
                }}
              >
                Sidebar
              </button>
            </div>
            <div style={Toggle ? { display: "block" } : { display: "none" }}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/AboutApp">AboutApp</Link>
                </li>
                <li>
                  <Link to="/AboutAuthor">AboutAuthor</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="Content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutApp" element={<AboutApp />} />
              <Route path="/AboutAuthor" element={<AboutAuthor />} />
              {/* <Route path='*' element={<Notfound />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
