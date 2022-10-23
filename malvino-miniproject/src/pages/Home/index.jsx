import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/** Images */
import alterra_logo from "../../assets/img/alterra.png";
import mikroskil_logo from "../../assets/img/mikroskil.png";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";

const Home = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();

  const timeline = useSelector((state) => state.timeline.timeline);

  return (
    <>
      <Header />
      <div className={styles.home_container}>
        <h1>
          MCOMP 2022
          <br />
          GUITAR DUO COMPETITION
        </h1>

        <div className={styles.button_container}>
          <form method="get" action="http://speedtest.ftp.otenet.gr/files/test100k.db">
            <button type="submit">Guidebook</button>
            <Link to="/dashboard">
              <button type="button" className={styles.btn_daftar}>
                Daftar
              </button>
            </Link>
          </form>
        </div>

        <p>
          <b>Peserta:</b>
          <br />
          Mahasiswa S1 di seluruh Indonesia
        </p>

        <p>
          <b>Biaya Pendaftaran:</b>
          <br />
          Rp 50.000
        </p>

        <div className={styles.content_container}>
          <h2>About MComp 2022</h2>
          <p>MComp 2022 merupakan kompetisi gitar duo untuk mahasiswa S1 yang diselenggarakan oleh Malvino Austin Tanura berskala nasional.</p>
          <Link to="/about">
            <button type="button" className={styles.btn_daftar}>
              See More &gt;
            </button>
          </Link>
        </div>

        <div className={styles.content_container}>
          <h2>Timeline</h2>
          {timeline.map((item, itemIdx) => (
            <p key={itemIdx}>
              <b>{item.title}</b>
              <br />
              {item.date}
            </p>
          ))}

          {token !== null ? (
            token.role === "admin" ? (
              <button type="button" onClick={() => navigate("/edit-timeline")}>
                Edit Timeline
              </button>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </div>

        <div className={styles.media_partner}>
          <h2>Media Partner</h2>
          <img src={alterra_logo} alt="Alterra Logo" />
          <img src={mikroskil_logo} alt="Mikroskil Logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
