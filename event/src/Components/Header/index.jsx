import React from "react";

/** Styles */
import styles from "./style.module.css";

class Header extends React.Component {
  render() {
    return <h1 className={styles.header}>ToDoS</h1>;
  }
}

export default Header;
