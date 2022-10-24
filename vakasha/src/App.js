// import logo from './logo.svg';
import "./App.css";
import Homepage from "./Pages/HomePage";
import Find from "./Pages/Find";
import About from "./Pages/About";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import DetailsCity from "./Pages/Details_City/DetailsCity";
import DetailsPlaces from "./Pages/Details_Places/DetailsPlaces";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Find" element={<Find />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/DetailsCity/:id/:kota" element={<DetailsCity />} />
          <Route path="/DetailsPlaces/:id/:kategori" element={<DetailsPlaces />} />
        </Routes>
      </BrowserRouter>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
