import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/App.css";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import { Navbar } from "./components";

// pages
import { Home, Student, StudentDetail, StudentHome, Lecturer } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navbar />
        <div className="my-2">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="students" element={<Student></Student>}>
              <Route path="" element={<StudentHome />}></Route>
              <Route path="detail">
                <Route path=":id" element={<StudentDetail />} />
              </Route>
            </Route>
            <Route path="lecturers" element={<Lecturer></Lecturer>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
