/** Styles */
import styles from "./style.module.css";

const Header = ({ title }) => {
  return <h1 className={styles.header}>{title}</h1>;
};

export default Header;
