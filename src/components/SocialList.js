import React from "react";
import styles from  "./SocialList.module.css";
import icons from "../assets/icons";
import { socialMedia } from "../assets/constant";
const SocialList = () => {
  return (
    <ul className={styles.socialList}>
      {socialMedia.map((item) => {
        return (
          <li key={item.name}>
            <a href={item.link} className={styles.socialLink}>
              <img
                src={item.icon}
                alt={item.name}
                className={styles.socialLogo}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialList;
