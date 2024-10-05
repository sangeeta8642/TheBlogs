import React from "react";
import styles from "./adminPosts.module.css";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  // const deletePostById = async (id) => {
  //   "use server"
  //   return deletePost.bind(null, id);
  // };

  return (
    <div className={styles.container}>
      <h1>POSTS</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noavatar.png"}
              alt={post.title}
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="text" hidden name="id" value={post._id} readOnly />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
