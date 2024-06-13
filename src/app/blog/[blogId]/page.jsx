import Image from "next/image";
import styles from "./singlepost.module.css";
import { getSinglePost, getSingleUser } from "@/libs/data";

export const generateMetadata = async ({ params }) => {
  const singlePost = await getSinglePost(params.blogId);
  return {
    title: singlePost.title,
    description: singlePost.desc,
  };
};

async function singleBlogPage({ params, searchParams }) {
  console.log(params);

  // const getSinglePost = async (postId) => {
  //   const responce = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${postId}`,
  //     {
  //       cache: "no-cache",
  //       // next: { revalidate: 3600 },
  //     }
  //   );
  //   if (!responce.ok) {
  //     throw new Error("ERROR");
  //   }
  //   return await responce.json();
  // };

  // const getSingleUser = async (userId) => {
  //   const responce = await fetch(
  //     `https://jsonplaceholder.typicode.com/users/${userId}`,
  //     {
  //       cache: "no-cache",
  //       // next: { revalidate: 3600 },
  //     }
  //   );
  //   if (!responce.ok) {
  //     throw new Error("ERROR");
  //   }
  //   return await responce.json();
  // };

  const singlePost = await getSinglePost(params.blogId);
  const singleUser = await getSingleUser(singlePost?.userId);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={`/noavatar.png`} alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{singlePost?.title}</h1>
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
            <span className={styles.detailValue}>{singleUser?.username}</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.24</span>
          </div>
        </div>
        <div className={styles.content}>{singlePost?.desc}</div>
      </div>
    </div>
  );
}

export default singleBlogPage;
