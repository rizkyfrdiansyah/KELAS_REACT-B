import img from "../../assets/img/notfound.png";

/** Styles */
import styles from "./style.module.css";

const NotFound = () => {
  return (
    <>
      <img className={styles.not_found_img} src={img} alt="Not Found" />
    </>
  );
};

export default NotFound;
