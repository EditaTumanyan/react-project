import React from "react";
import styles from "./About.module.css";
import commonStyles from "../../styles/CommonStyles.module.css";

export default function About({ openAside }) {
  return (
    <div
      className={`${commonStyles.aboutContainer} ${
        openAside ? styles.shiftRight : ""
      }`}
    >
      <h1 className={commonStyles["common-h1"]}>About Me</h1>
      <img
        className={styles.image}
        src="https://html5up.net/uploads/demos/prologue/images/pic08.jpg"
        alt="img"
      />
      <p className={commonStyles["common-p"]}>
        Tincidunt eu elit diam magnis pretium accumsan etiam id urna. Ridiculus
        ultricies curae quis et rhoncus velit. Lobortis elementum aliquet nec
        vitae laoreet eget cubilia quam non etiam odio tincidunt montes.
        Elementum sem parturient nulla quam placerat viverra mauris non cum elit
        tempus ullamcorper dolor. Libero rutrum ut lacinia donec curae mus vel
        quisque sociis nec ornare iaculis.
      </p>
    </div>
  );
}
