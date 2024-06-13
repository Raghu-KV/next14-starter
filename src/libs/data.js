// TEMP DATA

import { Post, User } from "./model";
import { connectToDb } from "./utils";
import { unstable_noStore as noStroe } from "next/cache";
// const users = [
//   { id: 1, name: "Jimmy" },
//   { id: 2, name: "Troy" },
// ];

// const postsv = [
//   { id: 1, title: "Post 1", body: ".......", userId: 1 },
//   { id: 2, title: "Post 2", body: ".......", userId: 2 },
//   { id: 3, title: "Post 3", body: ".......", userId: 1 },
//   { id: 4, title: "Post 4", body: ".......", userId: 2 },
// ];

export const getPosts = async () => {
  noStroe();
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePost = async (postId) => {
  noStroe();
  try {
    connectToDb();
    const post = await Post.findOne({ slug: postId });
    return post;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleUser = async (userId) => {
  noStroe();
  try {
    connectToDb();
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.log(error);
  }
};
