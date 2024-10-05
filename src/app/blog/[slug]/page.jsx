import Image from "next/image";
import React from "react";
import styles from "./Post.module.css";
import { getPost, getUser } from "@/lib/data";

export const generateMetadata=async ({params}) => {
  const post = await getPost(params.slug);
  
  return {
     title:post.title,
     description:post.desc
  }
}

const SinglePostPage = async () => {
  // { params }
  // const {slug}= params

  // const getPost2=async () => {
  //   try {
  //     const post = await fetch(`http://localhost:3000/api/posts/${slug}`)
  //     return post.json()
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }
  // console.log(params.slug);



  const post = await getPost();
  const user = await getUser(post.userId);
  // console.log(post.createdAt);

  return (
    <div className={styles.container}>
        {post.img && (
      <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            // src="https://images.pexels.com/photos/14675462/pexels-photo-14675462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src={post.img}
            fill
          />
      </div>
        )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          
          <Image
            className={styles.avatar}
            width={50}
            height={50}
            alt="avatar"
            // src="https://images.pexels.com/photos/14675462/pexels-photo-14675462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src={user.img?user.img:"/noavatar.png"}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>{user.username}</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.content}>
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum vel,
          dolorem blanditiis iure accusamus a ducimus illum distinctio odit
          animi, consequuntur illo eos asperiores nisi magni vero, ipsa ex
          adipisci? */}
          {post.desc}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
