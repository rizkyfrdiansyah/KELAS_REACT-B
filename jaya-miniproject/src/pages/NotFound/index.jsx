import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ImageNotFound from "../../assets/images/not-found.gif";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <img src={ImageNotFound} className="img-not-found mt-5" alt="Traveler Images" />
            <h1 className="text-center title-notfound">This page is outside of the Universe</h1>
            <p className="text-center mb-4 subtitle-notfound">
              The page you are trying to access doesn't exist or has been moved. <br />
              Try going back to our homepage.
            </p>
            <p className="text-center">
              <Link to="/" className="btn-notfound">
                Kembali
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
