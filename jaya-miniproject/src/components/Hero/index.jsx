import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (location.pathname.substring(10, location.pathname.length) === "wisata-alam") {
      setCurrentPath("Wisata Alam");
    }

    if (location.pathname.substring(10, location.pathname.length) === "wisata-pantai") {
      setCurrentPath("Wisata Pantai");
    }

    if (location.pathname.substring(10, location.pathname.length) === "wisata-kuliner") {
      setCurrentPath("Wisata Kuliner");
    }

    if (location.pathname.substring(1, location.pathname.length) === "berita") {
      setCurrentPath("Berita");
    }

    if (location.pathname.substring(1, location.pathname.length) === "tentang") {
      setCurrentPath("Tentang");
    }

    if (location.pathname.substring(1, location.pathname.length) === "login") {
      setCurrentPath("Login");
    }

    // console.log(
    //   "ini hero",
    //   location.pathname.substring(10, location.pathname.length)
    // );
  }, [location]);

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center text-white font-weight-bold pt-5 pb-5">
          <h1 className="display-4">{currentPath}</h1>
          <p className="lead">Beranda → {currentPath}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
