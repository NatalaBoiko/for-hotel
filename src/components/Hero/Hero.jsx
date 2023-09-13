import React from "react";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>MAGIC STAR</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aut vero
        iure magni fugiat voluptas quibusdam eligendi. Debitis perspiciatis
        harum nesciunt, ratione nostrum ad qui doloribus voluptas est
        perferendis impedit inventore rerum tempora repellendus tempore
        consequuntur deleniti tenetur assumenda non praesentium doloremque
        reiciendis ab fugiat! Perferendis neque sit quidem soluta!
      </p>
    </section>
  );
};

export default Hero;
