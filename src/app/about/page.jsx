import React from "react";
import Image from "next/image";
import Styles from "./about.module.css";

export const metadata = {
  title: "About page",
  description: "About page",
};

const AboutPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        <h2 className={Styles.subTitle}>About Agency</h2>
        <h1 className={Styles.title}>
          We create digital ideas that are bigger, bolder, braver, better.
        </h1>
        <p className={Styles.desc}>
          We create digital ideas that are bigger, bolder, braver, better. We
          believe in good ideas, flexibility, and precision. We&apos;re world&apos;s best
          consulting & finance provider. Wide range of web and software
          development services.
        </p>
        <div className={Styles.boxes}>
          <div className={Styles.box}>
            <h1>10 K</h1>
            <p>Years of experience</p>
          </div>
          <div className={Styles.box}>
            <h1>10 K</h1>
            <p>Years of experience</p>
          </div>
          <div className={Styles.box}>
            <h1>10 K</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={Styles.imgContainer}>
        <Image src="/about.png" alt="about image" fill className={Styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
