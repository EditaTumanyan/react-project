import React, {useCallback} from "react";
import styles from "./Intro.module.css";
import { FaBars } from "react-icons/fa";
import commonStyles from "../../styles/CommonStyles.module.css";
import Button from "../button/Button";
export default function Intro({ toggleAside, openAside }) {
  const handleClick = useCallback(() => {
    toggleAside();
  }, [toggleAside]);

  return (
    <div
      className={`${styles.introContainer} ${
        openAside ? styles.shiftRight : ""
      }`}
    >
      <FaBars className={styles.bars} onClick={toggleAside} />
      <img
        className={styles.banner}
        src="https://html5up.net/uploads/demos/prologue/images/banner.jpg"
        alt="image"
      />

      <div className={styles.overlay}>
        <div className={styles.textOverlay}>
          <h2>
            Hi! I'm Prologue, a{" "}
            <a className={commonStyles.a} href="https://html5up.net/license">
              free
            </a>{" "}
            responsive
            <br />
            site template designed{" "}
            <a className={commonStyles.a} href="https://html5up.net">
              HTML5 UP
            </a>
          </h2>
          <p>
            Ligula scelerisque justo sem accumsan diam quis <br />
            vitae natoque dictum sollicitudin elementum.
          </p>

          <Button onClick={handleClick}>Magna Aliquam</Button>
        </div>
      </div>
    </div>
  );
}
