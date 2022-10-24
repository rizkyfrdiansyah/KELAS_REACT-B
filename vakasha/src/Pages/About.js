import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import foto_profil from "../Assets/foto-profil.jpg";

function About() {
  return (
    <>
      <Navbar />
      <div data-aos="fade-up" data-aos-duration="2000">
        <div className="d-flex justify-content-center">
          <div className="mt-5 mb-5">
            <img className="rounded-circle mt-5" src={foto_profil} style={{ height: "200px" }} alt="img" />
          </div>
        </div>

        <div className="container text-center">
          <h1 className="mb-3" style={{ color: "#142A49" }}>
            <strong>About Us</strong>
          </h1>
          <div className="d-flex justify-content-center">
            <p style={{ width: "70%" }}>
              Vakasha, one of the largest travel guide platforms in Indonesia, Tourists around the world use the Vakasha site to find beautiful tourist spots throughout Indonesia. Our goal is to help tourists find beautiful tourist
              attractions in Indonesia by providing information about these tourist attractions and providing recommendations for top destinations based on reviews that have been given by other tourists.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
