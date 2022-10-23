import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <input type="checkbox" id="sidebar-toggle" />
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="brand">
            <span className="brand-title">Explore Banten</span>
          </h3>
          <label htmlFor="sidebar-toggle" className="ti-menu-alt"></label>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <NavLink to="/kelola-wisata" className={({ isActive }) => (isActive ? "side-link active" : "side-link")}>
                <i className="fa-solid fa-map-location-dot"></i>

                <span>Kelola Wisata</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/kelola-berita" className={({ isActive }) => (isActive ? "side-link active" : "side-link")}>
                <i className="fa-regular fa-newspaper"></i>
                <span>Kelola Berita</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/kelola-ulasan" className={({ isActive }) => (isActive ? "side-link active" : "side-link")}>
                <i className="fa-solid fa-comment-dots"></i>
                <span>Kelola Ulasan</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/kelola-admin" className={({ isActive }) => (isActive ? "side-link active" : "side-link")}>
                <i className="fa-solid fa-user-pen"></i>
                <span>Kelola Admin</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
