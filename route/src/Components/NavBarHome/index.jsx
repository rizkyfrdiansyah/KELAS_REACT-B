import { Link } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

const NavBarHome = ({ widthNav, setWidthNav }) => {
  const openNav = () => {
    setWidthNav(300);
  };

  const closeNav = () => {
    setWidthNav(0);
  };

  return (
    <>
      <div className={styles.nav} style={{ width: widthNav + "px" }}>
        <div className={styles.btn_close} onClick={closeNav}>
          &times;
        </div>
        <Link to="/">
          <span className={styles.nav_link}>HOME</span>
        </Link>
        <Link to="/about">
          <span className={styles.nav_link}>ABOUT</span>
        </Link>
      </div>
      <span className={styles.btn_hamburger} onClick={openNav}>
        &#9776;
      </span>
    </>
  );
};

export default NavBarHome;
