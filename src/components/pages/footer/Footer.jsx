import styles from "./Footer.module.css";
import commonStyles from "../../../styles/CommonStyles.module.css";
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p className={commonStyles["common-p"]}>
        © Untitled. All rights reserved. Design:{" "}
        <a href="https://html5up.net" className={commonStyles.a}>
          HTML5 UP{" "}
        </a>
        Demo Images:{" "}
        <a
          href="http://ineedchemicalx.deviantart.com/"
          className={commonStyles.a}
        >
          Felicia Simion
        </a>{" "}
        +
        <a href="http://unsplash.com" className={commonStyles.a}>
          Unsplash
        </a>
      </p>
    </div>
  );
}
