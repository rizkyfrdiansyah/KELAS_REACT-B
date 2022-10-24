import React from "react";
import styles from "./Footer.css";

function Footer() {
  return (
    <>
      <div className="mt-5">
        <footer className="text-center text-lg-start text-white" id="bg-color-footer">
          <section className="container pt-4">
            <div className="text-center text-md-start">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mb-4 mt-4">
                  <h4 className="text-uppercase fw-bold">VAKASHA</h4>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" id="garis-footer" />
                  <p>Vakasha, is one of the largest travel guide platforms in Indonesia, Tourists around the world use the Vakasha site to find beautiful tourist spots throughout Indonesia.</p>
                </div>

                <div className="col-md-3 col-lg-3 col-xl-3 mb-4 mt-4">
                  <h4 className="text-uppercase fw-bold">QUICK LINKS</h4>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" id="garis-footer" />
                  <p>
                    <a href="/" className="nav-link text-white ms-0">
                      HOME
                    </a>
                  </p>
                  <p>
                    <a href="/Find" className="nav-link text-white ms-0">
                      FIND
                    </a>
                  </p>
                  <p>
                    <a href="/About" className="nav-link text-white ">
                      ABOUT US
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-3 col-xl-3 mb-4 mt-4">
                  <h4 className="text-uppercase fw-bold">CONTACT US</h4>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" id="garis-footer" />
                  <p>
                    <i className="bi bi-house-door-fill mr-3" />
                    &emsp;Menara Standard Chartered
                    <br /> &emsp;&emsp;Setiabudi, JKT, 12930, ID
                  </p>
                  <p>
                    <i className="bi bi-envelope mr-3" /> &emsp;info@Vakasha.com
                  </p>
                  <p>
                    <i className="bi bi-telephone-fill mr-3" /> &emsp;(021) 7301018
                  </p>
                </div>

                <div className="col-md-3 col-lg-3 col-xl-3 mb-4 mt-4">
                  <h4 className="text-uppercase fw-bold">FOLLOW US</h4>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" id="garis-footer" />
                  <p>Follow Us on Social Media</p>
                  <a href="#" className="text-white me-4">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="text-white me-4">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-white me-4">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="text-white me-4">
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a href="#" className="text-white me-4">
                    <i className="bi bi-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-3" id="bg-color-copyright">
            © 2022 Vakasha All rights reserverd
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
