/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";

const NotFound = () => {
  localStorage.removeItem("token");

  return (
    <>
      <Header />
      <h2 className={styles.not_found}>Error 404 Page Not Found</h2>
    </>
  );
};

export default NotFound;
