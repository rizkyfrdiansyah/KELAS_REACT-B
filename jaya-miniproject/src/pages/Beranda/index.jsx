import React, { useEffect } from "react";

// React Redux
import { useSelector } from "react-redux";

// React Router Dom
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LoadingSvg from "../../components/LoadingSvg/LoadingSvg";
import YoutubeEmbed from "../../components/YoutubeEmbed";

// Images
import Image1 from "../../assets/images/slide1.jpg";
import Image2 from "../../assets/images/slide2.jpg";
import Image3 from "../../assets/images/slide3.jpg";
import ImageTraveler from "../../assets/images/traveler.gif";
import ImageNews from "../../assets/images/news.gif";
import ImageMarket from "../../assets/images/market-food.jpg";

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Custom Hooks
import useSubscriptionWisata from "../../hooks/useSubscriptionWisata";
import useSubscriptionBerita from "../../hooks/useSubscriptionBerita";

// TawkTo
import TawkTo from "tawkto-react";

const Beranda = () => {
  const navigate = useNavigate();

  // Global State
  const contents = useSelector((state) => state.contents.contents);

  // Subscription
  const { dataWisata, loadingWisata } = useSubscriptionWisata();

  const { dataBerita, loadingBerita } = useSubscriptionBerita();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    var tawk = new TawkTo("62850c19b0d10b6f3e72dfbe", "1g3brehf6");

    tawk.onStatusChange((status) => {
      // console.log(status)
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* End of Navbar */}

      {/* Hero Section */}
      <div className="hero-section">
        <section className="carousel-section">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item customCarousel active">
                    <img src={Image1} className="d-block w-100 image-carousel-hero" alt="slide-1" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="main-title-carousel">Enjoy in Banten !</h5>
                      <p className="description-title-carousel">Jelajahi beragam destinasi wisata terbaik hanya untuk kamu.</p>
                    </div>
                  </div>
                  <div className="carousel-item customCarousel">
                    <img src={Image2} className="d-block w-100 image-carousel-hero" alt="slide-2" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="main-title-carousel">Enjoy in Banten !</h5>
                      <p className="description-title-carousel">Jelajahi beragam destinasi wisata terbaik hanya untuk kamu.</p>
                    </div>
                  </div>
                  <div className="carousel-item customCarousel">
                    <img src={Image3} className="d-block w-100 image-carousel-hero" alt="slide-3" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="main-title-carousel">Enjoy in Banten !</h5>
                      <p className="description-title-carousel">Jelajahi beragam destinasi wisata terbaik hanya untuk kamu.</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End od Hero Section */}

      {/* Section 1 */}
      <div className="container mt-3 pt-3 mb-5 pb-5">
        <section className="section-1">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="section1-left">
                <h5 className="title-selamat-datang">
                  {/* SELAMAT DATANG DI WONDERFUL BANTEN  */}
                  {contents[0].title}
                </h5>
                <h2 className="sub-title-selamat-datang">
                  {/* Keindahan alam yang diakui Dunia dapat kamu lihat di Provinsi
                  Banten */}
                  {contents[0].subtitle}
                </h2>
                <p className="deskripsi-selamat-datang">
                  {/* Keindahan alam yang dimiliki Provinsi Banten menjadikannya
                  sebagai wilayah yang masuk rekomendasi untuk dikunjungi saat
                  liburan. Memiliki Pantai, Gunung, Tempat Bersejarah dan Wahana
                  Atraksi yang ada di Provinsi Banten yang siap kalian kunjungi
                  kapan saja. */}
                  {contents[0].description}
                </p>
                <button
                  type="button"
                  className="btn btn-primary button-eksplore mt-2"
                  onClick={() => {
                    navigate(`/kategori/${"wisata-alam"}`);
                  }}
                >
                  Eksplor Sekarang →
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="section1-right pt-5">
                <img src={ImageTraveler} className="img-thumbnail border-0 section1-image" alt="Traveler Images" />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End of Section 1 */}

      {/* Section 2 */}
      <div className="section-rekomendasi-wisata mt-5 pt-5 mb-5 pb-5">
        <section className="section-2 pt-3 pb-5">
          <div className="row pt-5">
            <div className="col-12 col-lg-12">
              <div className="rekomendasi-wisata-container container">
                <h5 className="text-center title-rekomendasi-wisata">
                  {/* REKOMENDASI WISATA */}
                  {contents[1].title}
                </h5>
                <h2 className="text-center sub-titile-rekomendasi-wisata">
                  {/* Destinasi Wisata Yang Wajib Anda Kunjungi */}
                  {contents[1].subtitle}
                </h2>
                <p className="text-center deskripsi-rekomendasi-wisata">
                  {/* Membantu kamu untuk menemukan tempat wisata terbaik yang
                  sesuai dengan <br /> keinginan sebelum memulai petualangan mu
                  di Banten. */}
                  {contents[1].description}
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-5 pb-5">
            <div className="col-12 col-lg-12">
              <div className="slider-wisata container">
                {/* Kolase Wisata */}
                {loadingWisata ? (
                  <LoadingSvg />
                ) : (
                  <>
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <div
                          className="card text-white card-img-new-wisata-left"
                          onClick={() => {
                            navigate(`/wisata-${dataWisata?.wisata[0].kategori.toLowerCase()}/detail-wisata/${dataWisata?.wisata[0].id}`);
                          }}
                        >
                          <img src={dataWisata?.wisata[0].gambar} className="card-img img-new-wisata" alt="gbr gbr" />

                          <div className="card-img-overlay d-flex flex-column">
                            <div className="text-img-overlay mt-auto">
                              <h5 className="card-title card-title-beranda">{dataWisata?.wisata[0].nama_wisata}</h5>
                              <p className="card-text card-text-beranda">{dataWisata?.wisata[0].deskripsi.substr(0, 50)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-12">
                            <div
                              className="card text-white card-img-new-wisata"
                              onClick={() => {
                                navigate(`/wisata-${dataWisata?.wisata[1].kategori.toLowerCase()}/detailwisata/${dataWisata?.wisata[1].id}`);
                              }}
                            >
                              <img src={dataWisata?.wisata[1].gambar} className="card-img img-new-wisata" alt="gbr gbr" />
                              <div className="card-img-overlay d-flex flex-column">
                                <div className="text-img-overlay mt-auto">
                                  <h5 className="card-title card-title-beranda">{dataWisata?.wisata[1].nama_wisata}</h5>
                                  <p className="card-text card-text-beranda">{dataWisata?.wisata[1].deskripsi.substr(0, 50)}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-md-12">
                            <div
                              className="card text-white card-img-new-wisata"
                              onClick={() => {
                                navigate(`/wisata-${dataWisata?.wisata[2].kategori.toLowerCase()}/detail-wisata/${dataWisata?.wisata[2].id}`);
                              }}
                            >
                              <img src={dataWisata?.wisata[2].gambar} className="card-img img-new-wisata" alt="gbr gbr" />
                              <div className="card-img-overlay d-flex flex-column">
                                <div className="text-img-overlay mt-auto">
                                  <h5 className="card-title card-title-beranda">{dataWisata?.wisata[2].nama_wisata}</h5>
                                  <p className="card-text card-text-beranda">{dataWisata?.wisata[2].deskripsi.substr(0, 50)}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* End of Kolase Wisata */}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End of Section 2 */}

      {/* Section 3 */}
      <div className="container mt-5 pt-3 mb-5 pb-5">
        <section className="section-3">
          <div className="row">
            <div className="col-12 col-lg-6 pt-4">
              <div className="section3-left">
                <img src={ImageNews} className="img-thumbnail border-0 section3-image" alt="Traveler Images" />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="section3-right">
                <h5 className="title-selamat-datang">
                  {/* BERITA WISATA */}
                  {contents[2].title}
                </h5>
                <h1 className="sub-title-selamat-datang">
                  {/* Berita Menarik Terkini Seputar Destinasi Wisata Banten */}
                  {contents[2].subtitle}
                </h1>
                <p className="text-justify deskripsi-selamat-datang">
                  {/* Dapatkan berita terkini seputar destinasi wisata yang ada di
                  Banten untuk kamu yang menarik untuk dibaca. */}
                  {contents[2].description}
                </p>
                <button
                  type="button"
                  className="btn btn-primary button-eksplore"
                  onClick={() => {
                    navigate("/berita");
                  }}
                >
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End of Section 3 */}

      {/* Section 4 */}
      <div className="section-rekomendasi-berita pt-5">
        <section className="section-2 pt-5 pb-5">
          <div className="banner-higlight-berita mt-5 container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <YoutubeEmbed embedId="EHDwBGGLzO4" />
              </div>

              <div className="col-md-5">
                <div className="banner-highlight-berita-right ps-1 pt-5">
                  <h1 className="title-artikel-berita fw-bold pt-5">
                    {/* ARTIKEL BERITA */}
                    {contents[3].title}
                  </h1>
                  <h3 className="sub-title-artikel-berita">
                    {/* MENARIK DAN INFORMATIF */}
                    {contents[3].subtitle}
                  </h3>
                  <p className="deskripsi-selamat-datang fs-6">
                    {/* Menyajikan berita terhangat yang menarik dan informatif
                    sebagai bacaan yang mermanfaat untuk mengisi waktu kosong
                    liburanmu. */}
                    {contents[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-berita container pb-4">
            <div className="row pt-5 justify-content-center">
              <div className="col-12 col-lg-12">
                {/* Coba */}

                {loadingBerita ? (
                  <LoadingSvg />
                ) : (
                  <>
                    <Carousel responsive={responsive}>
                      {dataBerita?.berita.map((value, valueIdx) => (
                        <div
                          key={valueIdx}
                          className="content-slider-berita"
                          onClick={() => {
                            navigate(`/berita/detail-berita/${value.id}`);
                          }}
                        >
                          <div className="card text-white card-img-new-berita" key={valueIdx}>
                            <img src={value.gambar} className="card-img img-new-berita" alt="gbr gbr" />
                            <div className="card-img-overlay d-flex flex-column">
                              <div className="text-img-overlay mt-auto">
                                <h5 className="card-title card-title-berita">{value.judul}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Carousel>
                  </>
                )}

                {/* End of Coba */}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End of Section 4 */}

      {/* Section 5 */}
      <div className="container mt-5 pt-3">
        <section className="section-3">
          <div className="row">
            <div className="col-12 col-lg-6 pt-5">
              <div className="section3-left">
                <img src={ImageMarket} className="img-thumbnail border-0 section3-image" alt="Traveler Images" />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="section3-right">
                <h5 className="title-selamat-datang">
                  {/* WISATA KULINER FAVORIT */}
                  {contents[4].title}
                </h5>
                <h1 className="sub-title-selamat-datang">
                  {/* Kelezatan kuliner khas Banten yang dapat memanjakan lidahmu */}
                  {contents[4].subtitle}
                </h1>
                <p className="text-justify deskripsi-selamat-datang">
                  {/* Kunjungi destinasi wisata kuliner terbaik untuk menghilangkan
                  lapar dan haus agar mengembalikan energimu disaat berlibur. */}
                  {contents[4].description}
                </p>
                <button type="button" className="btn btn-primary button-eksplore">
                  <Link to={`/kategori/${"wisata-kuliner"}`} style={{ textDecoration: "none", color: "white" }}>
                    Selengkapnya
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* End of Section 5 */}

      {/* Footer */}
      <Footer />
      {/* End of Footer */}
    </>
  );
};

export default Beranda;
