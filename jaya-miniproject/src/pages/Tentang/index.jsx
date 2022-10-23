import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

import ImageTentang from "../../assets/images/about.png";

// TawkTo
import TawkTo from "tawkto-react";

const Tentang = () => {
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
      <div className="container mt-3 pt-3 mb-5 pb-5">
        <section className="section-1">
          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="section1-left">
                <h5 className="title-selamat-datang">TENTANG KAMI</h5>
                <h2 className="sub-title-selamat-datang">
                  Membantu kamu <br /> menemukan tempat wisata <br /> terbaik untuk berlibur
                </h2>
                <p className="deskripsi-selamat-datang">
                  Berlibur kini sudah bukan lagi jadi kebutuhan tersier ataupun sekunder, namun sudah menjadi kebutuhan primer bagi siapapun. Liburan tidak hanya menjadi sekadar bepergian saja, kini setiap orang ingin melakukan perjalanan
                  lebih lama, lebih jauh, dan lebih sering. Maka dari itu kami menyediakan berbagai destinasi wisata pilihan yang dapat kamu kunjungi setiap saat demi mewujudkan hari-hari terbaik disaat berlibur.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-5 pt-5">
              <div className="section1-right pt-5">
                <img src={ImageTentang} className="img-thumbnail border-0 section1-image" alt="Traveler Images" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Tentang;
