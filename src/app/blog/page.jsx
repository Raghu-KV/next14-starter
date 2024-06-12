import PostCard from "@/components/postcard/PostCard";
import styles from "./blog.module.css";

function Blogpage() {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>

      <div className={styles.post}>
        <PostCard />
      </div>

      <div className={styles.post}>
        <PostCard />
      </div>

      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
}

export default Blogpage;
