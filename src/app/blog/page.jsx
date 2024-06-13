import PostCard from "@/components/postcard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/libs/data";

// const getPost = async () => {
//   const responce = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     // cache: "no-cache",
//     next: { revalidate: 3600 },
//   });
//   if (!responce.ok) {
//     throw new Error("ERROR");
//   }
//   return await responce.json();
// };

export const metadata = {
  title: "Blog page",
  description: "Next.js starter app desc blog page",
};

async function Blogpage() {
  const post = await getPosts();
  return (
    <div className={styles.container}>
      {post.map((item) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={item} />
        </div>
      ))}
    </div>
  );
}

export default Blogpage;
