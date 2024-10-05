import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  // console.log(post.createdAt);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image
              // src="https://images.pexels.com/photos/14675462/pexels-photo-14675462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              src={post.img}
              fill
              alt={post.title}
              className={styles.img}
            />
          </div>
        )}
        <span className={styles.date}>
          {post.createdAt.toString().slice(4, 16)}
        </span>
      </div>
      <div className={styles.buttom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, quae
          quod! Magnam harum itaque deserunt esse provident, error obcaecati
          laudantium. Modi ad in tenetur maiores quo ab obcaecati recusandae
          nam. */}
          {post.desc}
        </p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
