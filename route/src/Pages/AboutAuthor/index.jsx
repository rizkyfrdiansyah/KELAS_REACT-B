/** Styles */
import styles from "./style.module.css";

/** Components */
import NavBarAbout from "../../Components/NavBarAbout";
import ContentAbout from "../../Components/ContentAbout";

const AboutAuthor = () => {
  const content = {
    title: "About the Author",
    paragraph: "This app was developed by someone, a self-taught web developer and technical writer.",
  };

  return (
    <div className={styles.container_about_app}>
      <NavBarAbout />
      <ContentAbout content={content} />
    </div>
  );
};

export default AboutAuthor;
