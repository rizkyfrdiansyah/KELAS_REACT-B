import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import CardWisata from "../../components/CardWisata";
import Footer from "../../components/Footer";

// TawkTo
import TawkTo from "tawkto-react";

const Wisata = () => {
  useEffect(() => {
    var tawk = new TawkTo("62850c19b0d10b6f3e72dfbe", "1g3brehf6");

    tawk.onStatusChange((status) => {
      // console.log(status)
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mt-5 pt-5">
        <section className="wisata-alam">
          <CardWisata />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Wisata;
