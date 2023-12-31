import React from "react";
import styles from "./TelEmail.module.scss";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

const TelEmail = ({ className }) => {
  return (
    <ul className={styles.contactsWrapper + " " + `${className}`}>
      <li className={styles.contact}>
        <AiFillMail />
        <a href="tel:+380966058605"> +38 (096) 605 86 05</a>
      </li>
      <li className={styles.contact}>
        <AiFillPhone />
        <a href="mailto:inbox.webevery@gmail.com">inbox.webevery@gmail.com</a>
      </li>
    </ul>
  );
};

export default TelEmail;
