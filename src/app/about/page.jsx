import styles from "./about.module.css";
import Image from "next/image";

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>About</h1>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          blanditiis rem magni porro natus minus, ex
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>contact</button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image src="/about.png" fill />
      </div>
    </div>
  );
}

export default AboutPage;
