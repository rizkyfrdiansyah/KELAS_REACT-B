import React, { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [loginStatus, setLoginStatus] = useState(props.isLogin);

  const loginButton = () => {
    setLoginStatus(true);
  };

  const logoutButton = () => {
    localStorage.clear();
    props.loginHandler(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            First React
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items">
                  Items
                </Link>
              </li>
              <li className="nav-item">
                {loginStatus ? (
                  <a onClick={logoutButton} className="nav-link">
                    Logout
                  </a>
                ) : (
                  <a onClick={loginButton} className="nav-link">
                    Login
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
