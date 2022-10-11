/** Styles */
import styles from "./style.module.css";

const ContentAbout = ({ content }) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{content.title}</h2>
      <p>{content.paragraph}</p>
    </div>
  );
};

export default ContentAbout;
