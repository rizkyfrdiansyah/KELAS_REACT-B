import React from "react";
import "./WelcomePage.css";

function Header() {
  const getStarted = () => {
    document.getElementById("populercity").scrollTo({ top: 1440, behavior: "smooth" });
  };

  return (
    <>
      <div className="Header" id="populercity">
        <div className="row me-0">
          <div className="col-auto mx-auto flex-column justify-content-center aligns-items-center" id="margin-teks">
            <div data-aos="fade-up" data-aos-duration="2000">
              <h1 className="text-white text-center mb-3 shadow">
                <strong className="size-teks">FIND BEAUTIFUL PLACES</strong>
              </h1>
              <h1 className="text-white text-center mb-3 shadow">
                <strong className="size-teks">FOR YOUR TRIP</strong>
              </h1>
              <div className="d-flex justify-content-center">
                <button className="btn mt-2" id="btn-discover" type="submit" onClick={getStarted}>
                  Discover More <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
