/** Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
/** React Router */
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import AddNewAuthor from "./screens/AddNewAuthor";
import AddNewPost from "./screens/AddNewPost";
import AuthorsPage from "./screens/AuthorsPage";
import EditAuthor from "./screens/EditAuthor";
import EditPost from "./screens/EditPost";
import Login from "./screens/Login";

import DashboardUser from "./screens/DashboardUser";
import DetailArticle from "./screens/DetailArticle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sosial" element={<Home />} />
        <Route path="/politik" element={<Home />} />
        <Route path="/agama" element={<Home />} />
        <Route path="/budaya" element={<Home />} />
        <Route path="/detail/:id" element={<DetailArticle />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-user" element={<DashboardUser />} />
        <Route path="/dashboard/authors/add-new-author" element={<AddNewAuthor />} />
        <Route path="/dashboard/authors/edit-author/:id" element={<EditAuthor />} />
        <Route path="/dashboard/add-new-post" element={<AddNewPost />} />
        <Route path="/dashboard-user/add-new-post" element={<AddNewPost />} />
        <Route path="/dashboard/edit-post/:id" element={<EditPost />} />
        <Route path="/dashboard-user/edit-post/:id" element={<EditPost />} />
        <Route path="/dashboard/authors" element={<AuthorsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<AddNewAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
