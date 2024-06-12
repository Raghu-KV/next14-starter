import Image from "next/image";
import styles from "./singlepost.module.css";

function singleBlogPage({ params, searchParams }) {
  console.log(params, searchParams, "TEST_NAV");

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={`/noavatar.png`} alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>TITLE</h1>
        <div className={styles.detail}>
          <Image
            src={`/noavatar.png`}
            alt=""
            height={50}
            width={50}
            className={styles.avatar}
          />

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Tom Hiddlson</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.24</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          corrupti esse pariatur dolores nulla assumenda nostrum similique
          eligendi. Cumque voluptas quas asperiores ad placeat temporibus totam
          itaque ut, iste vitae!
        </div>
      </div>
    </div>
  );
}

export default singleBlogPage;
