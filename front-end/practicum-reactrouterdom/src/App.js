import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Home, AboutHome, AboutApp, AboutAuthor, NotFound } from "./pages";

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<AboutHome></AboutHome>}>
          <Route path="about-app" element={<AboutApp></AboutApp>}></Route>
          <Route path="about-author" element={<AboutAuthor></AboutAuthor>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
