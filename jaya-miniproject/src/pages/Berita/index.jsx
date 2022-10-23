import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import CardBerita from "../../components/CardBerita";
import Footer from "../../components/Footer";

// TawkTo
import TawkTo from "tawkto-react";

const Berita = () => {
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
        <section className="berita-wisata">
          <div className="row">
            <div className="row-md-12">{/* <h5>Cari Berita</h5> */}</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <CardBerita />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Berita;
