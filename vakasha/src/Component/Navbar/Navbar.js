import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark w-100 fixed-top" id="set-fixed">
          <div className="container">
            <div className="col-md-8 col-lg-4">
              <a className="navbar-brand" href="/">
                <strong>VAKASHA</strong>
              </a>
            </div>
            <div className="col-md-8 col-lg-4 d-flex">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      <strong id="size-teks">HOME</strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/Find">
                      <strong id="size-teks">FIND</strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <strong id="size-teks">BLOG</strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/About">
                      <strong id="size-teks">ABOUT US</strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <strong id="size-teks">LOG IN</strong>
                    </a>
                  </li>
                  <li className="nav-item btn-signup pe-0">
                    <a href="#">
                      <button className="btn" id="btn-signup" type="submit">
                        <strong id="size-teks">SIGN UP</strong>
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
