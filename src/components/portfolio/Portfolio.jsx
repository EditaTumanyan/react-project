import React from "react";
import styles from "./Portfolio.module.css";
import commonStyles from "../../styles/CommonStyles.module.css";

export default function Portfolio({ openAside }) {

  const images = [
    {
      id: 1,
      image: "https://html5up.net/uploads/demos/prologue/images/pic02.jpg",
      title: "Ipsum Feugiat",
    },
    {
      id: 2,
      image: "https://html5up.net/uploads/demos/prologue/images/pic04.jpg",
      title: "Magna Nullam",
    },
    {
      id: 3,
      image: "https://html5up.net/uploads/demos/prologue/images/pic03.jpg",
      title: "Rhoncus Semper",
    },

    {
      id: 4,
      image: "https://html5up.net/uploads/demos/prologue/images/pic05.jpg",
      title: "Natoque Vitae",
    },
    {
      id: 5,
      image: "https://html5up.net/uploads/demos/prologue/images/pic07.jpg",
      title: "Orci Convallis",
    },
    {
      id: 6,
      image: "https://html5up.net/uploads/demos/prologue/images/pic06.jpg",
      title: "Dolor Penatibus",
    },
  ];
  
  return (
    <div
      className={`${commonStyles.portfolioContainer} ${
        openAside ? styles.shiftRight : ""
      }`}
    >
      <h1 className={commonStyles["common-h1"]}> Portfolio</h1>
      <p className={commonStyles["common-p"]}>
        Vitae natoque dictum etiam semper magnis enim feugiat convallis
        convallis egestas rhoncus ridiculus in quis risus amet curabitur tempor
        orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget.
        Nunc nibh morbi quis fusce hendrerit lacus ridiculus.
      </p>

      <div className={styles.imageContainer}>
        {images.map((image) => (
          <div key={image.id} className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={image.image}
              title={image.title}
              alt={`Image ${image.id}`}
            />
            <p className={styles.title}>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
