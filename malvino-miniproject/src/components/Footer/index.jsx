/** Images */
import logo from "../../assets/img/logo.png";
import linkedin_logo from "../../assets/img/linkedin.png";
import instagram_logo from "../../assets/img/instagram.png";
import discord_logo from "../../assets/img/discord.png";

/** Styles */
import styles from "./style.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Logo" />

      <h3>MComp 2022</h3>

      <div className={styles.footer_bottom}>
        <div className={styles.contact_logo_container}>
          <a href="https://www.linkedin.com/in/malvino-austin-tanura/" target="_blank" rel="noreferrer">
            <img src={linkedin_logo} alt="Linkedin Logo" />
          </a>
          <a href="https://www.instagram.com/malvino.tan/" target="_blank" rel="noreferrer">
            <img src={instagram_logo} alt="Instagram Logo" />
          </a>
          <a href="https://discord.com/" target="_blank" rel="noreferrer">
            <img src={discord_logo} alt="Discord Logo" />
          </a>
        </div>

        <p className={styles.copyright}>Copyright 2022. All Right Reserved. MComp 2022</p>

        <p>WA: 087715435879</p>
      </div>
    </footer>
  );
};

export default Footer;
