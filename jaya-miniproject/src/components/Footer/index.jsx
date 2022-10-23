import React from "react";
import { Link } from "react-router-dom";
import LogoNavbar from "../../assets/images/logo.png";

const Footer = () => {
  const handleOpenFb = () => {
    window.open("https://web.facebook.com/amad.alawwabien/");
  };

  const handleOpenTwitter = () => {
    window.open("https://twitter.com/kuecokelattt");
  };

  const handleOpenIg = () => {
    window.open("https://www.instagram.com/muhamadjayaa");
  };

  const handleOpenWa = () => {
    window.open("https://wa.me/087876151046?text=Hi%27,%20like%20to%20chat%20with%20you");
  };

  const handleOpenEmail = () => {
    window.open("mailto:jayamuhamad99@gmail.com");
  };

  return (
    <footer className="footer footer-section">
      <section className="section-2 pb-4">
        <div className="container">
          <div className="row pt-5">
            <div className="col-12 col-lg-6">
              <div className="footer-item">
                <div className="footer-logo">
                  <img src={LogoNavbar} alt="footer logo" />
                </div>
                <div className="footer-desc pt-4">Bantentourism adalah website penyedia rekomendasi destinasi wisata Provinsi Banten yang dikelola oleh Muhamad Jaya.</div>
                <div className="footer-social-box pt-4">
                  <span className="fs-5 fw-bold pe-4">FOLLOW ME</span>
                  <i className="bi bi-facebook fs-4 pe-3 bi-icon" onClick={handleOpenFb}></i>
                  <i className="bi bi-twitter fs-4 pe-3 bi-icon" onClick={handleOpenTwitter}></i>
                  <i className="bi bi-instagram fs-4 pe-3 bi-icon" onClick={handleOpenIg}></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 pt-4">
              <p className="fw-bold ps-4">
                Kategori Wisata <br />
              </p>
              <p className="wave-underline ps-4">〰︎〰︎〰︎〰︎〰︎</p>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Link to="/kategori/wisata-alam">Wisata Alam</Link>
                </li>
                <li>
                  <Link to="/kategori/wisata-pantai">Wisata Pantai</Link>
                </li>
                <li>
                  <Link to="/kategori/wisata-kuliner">Wisata Kuliner</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-3 pt-4">
              <p className="fw-bold ps-4">
                Contact With Me <br />
              </p>
              <p className="wave-underline ps-4">〰︎〰︎〰︎〰︎〰︎</p>
              <ul style={{ listStyleType: "none" }}>
                <li className="list-contact" onClick={handleOpenWa}>
                  +62 878-7615-1046
                </li>
                <li className="list-contact" onClick={handleOpenEmail}>
                  jayamuhamad99@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-12 col-lg-12">
              <hr />
              <p className="text-center footer-text pt-4">
                © Copyright 2022. Made with <i className="bi bi-heart-fill text-danger"></i> by Muhamad Jaya
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
