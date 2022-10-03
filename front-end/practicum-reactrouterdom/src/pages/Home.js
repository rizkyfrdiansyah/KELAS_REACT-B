import React from "react";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-md-9">
        <h1>Todo Apps</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa placerat duis ultricies. Mauris a diam maecenas sed enim.</p>
      </div>
    </div>
  );
};

export default Home;
