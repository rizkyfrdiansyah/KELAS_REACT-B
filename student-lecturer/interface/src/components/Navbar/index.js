import React from "react";

import { Link } from "react-router-dom";

// react-icons material design
import { MdHome, MdPerson } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <MdHome className="me-2" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/students">
                  <MdPerson className="me-2" />
                  Students
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lecturers">
                  Lecturers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
