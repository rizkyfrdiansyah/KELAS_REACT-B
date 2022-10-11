import { Link } from "react-router-dom";

/** Styles */
import styles from "./style.module.css";

const NavBarAbout = () => {
  return (
    <>
      <div className={styles.nav}>
        <Link to="/">
          <span className={styles.nav_link}>Home</span>
        </Link>
        <Link to="/about/about-app">
          <span className={styles.nav_link}>About App</span>
        </Link>
        <Link to="/about/about-author">
          <span className={styles.nav_link}>About Author</span>
        </Link>
      </div>
    </>
  );
};

export default NavBarAbout;
