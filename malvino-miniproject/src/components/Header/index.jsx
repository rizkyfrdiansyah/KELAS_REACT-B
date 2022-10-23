import { Link, useNavigate } from "react-router-dom";

/** Sweet Alert */
import Swal from "sweetalert2";

/** Images */
import logo from "../../assets/img/logo.png";

/** Styles */
import styles from "./style.module.css";

const Header = () => {
  const dataUser = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Apakah anda yakin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          navigate("/login");
        }, 500);

        localStorage.removeItem("token");
      }
    });
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to="/">
          <img src={logo} alt="LOGO" />
          <span>MComp 2022</span>
        </Link>
      </h1>

      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/dashboard" className={dataUser === null ? styles.hidden : null}>
          Dashboard
        </Link>
        <Link to="/about">About</Link>
        {dataUser === null ? (
          <Link to="/login">Login</Link>
        ) : (
          <a href="#" onClick={handleLogout}>
            Logout
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
