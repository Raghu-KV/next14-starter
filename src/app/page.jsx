import styles from "./home.module.css";
import Image from "next/image";
// import { useEffect } from "react";
// import dynamic from "next/dynamic";

// const test = dynamic(() => import("@/app/"), { ssr: false });
const Home = () => {
  // throw new Error("ERRORRRR")
  // const [client, setClient] = useState(false);

  // useEffect(() => {
  //   setClient(true);
  // }, []);

  const a = Math.random();
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Creative through agency</h1>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          blanditiis rem magni porro natus minus, ex
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}> Learn more</button>
          <button className={styles.button}>contact</button>
        </div>

        <div className={styles.brandImageContainer}>
          <Image src={"/brands.png"} fill />
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image src="/hero.gif" fill />
      </div>
    </div>
  );
};

export default Home;
