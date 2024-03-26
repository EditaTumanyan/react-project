import styles from "./Contact.module.css";
import commonStyles from "../../styles/CommonStyles.module.css";
import Button from "../button/Button";

export default function Contact({ openAside }) {
  return (
    <div
      className={`${commonStyles.aboutContainer} ${
        openAside ? styles.shiftRight : ""
      }`}
    >
      <h1 className={commonStyles["common-h1"]}>Contact</h1>
      <p className={commonStyles["common-p"]}>
        Elementum sem parturient nulla quam placerat viverra mauris non cum elit
        tempus ullamcorper dolor. Libero rutrum ut lacinia donec curae mus.
        Eleifend id porttitor ac ultricies lobortis sem nunc orci ridiculus
        faucibus a consectetur. Porttitor curae mauris urna mi dolor.
      </p>

      <div className={styles.contactForm}>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea placeholder="Message"></textarea>
        <div className={styles.buttonContainer}>
          <Button>Send Message</Button>
        </div>
      </div>
    </div>
  );
}
