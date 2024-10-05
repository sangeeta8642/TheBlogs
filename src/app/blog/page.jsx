import React from "react";
import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";


export const metadata = {
  title: "Blog Page",
  description: "Blog Page",
};

const BlogPage = async () => {

// const getPosts=async () => {
//   const posts = await fetch('http://localhost:3000/api/posts')
  
//   if(!posts.ok){
//     throw new Error("something went wrong");
//   }

//   return posts.json()
// }

  const posts = await getPosts();
  // console.log(posts);
  
  return (
    <div className={styles.container}>
      {posts.map((post,i) => (
        <div className={styles.post}  key={i} >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
