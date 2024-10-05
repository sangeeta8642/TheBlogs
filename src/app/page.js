import Image from 'next/image'
import Styles from './Home.module.css'
import React from 'react'

const Home = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        <h1 className={Styles.title}>
          Creative Thought Agency
        </h1>
        <p className={Styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever
        </p>
        <div className={Styles.buttons}>
          <button className={Styles.button}>Learn More</button>
          <button className={Styles.button}>Contact</button>
        </div>
        <div className={Styles.brands}>
          <Image src='/brands.png' alt='' fill className={Styles.brandImg} />
        </div>
      </div>
      <div className={Styles.imgContainer}>
        <Image src='/hero.gif' className={Styles.heroImg} alt='' fill />
      </div>
    </div>
  )
}

export default Home
