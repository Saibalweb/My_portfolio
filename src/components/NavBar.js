import React, { useRef, useState } from "react";
import styles from "./NavBar.module.css";
import icons from "../assets/icons";
import { navItems, socialMedia } from "../assets/constant";

const NavBar = () => {
  const menu = useRef();
  const menuToggleHandler = () => {
    if (menu.current.classList.contains(`${styles.navItemContainerShow}`)) {
      menu.current.classList.remove(`${styles.navItemContainerShow}`);
    } else {
      menu.current.classList.add(`${styles.navItemContainerShow}`);
    }
  };
  const navMenuClickHandler = ()=>{
    menu.current.classList.remove(`${styles.navItemContainerShow}`);
  }
  const NavMenuItem = () => {
    return (
      <div className={`${styles.navItemContainer}`} ref={menu}>
        <ul className={[styles.navList]}>
          {navItems.map((navItem) => {
            return (
              <li key={navItem.name}>
                <a href={`${navItem.link}`} className={styles.navLink} onClick={navMenuClickHandler}>
                  {navItem.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoContainer}>
        {/* <div className={styles.logo}>Logo</div> */}
        <h2 className={styles.navHeading}>Saibal Kole</h2>
      </div>
      <NavMenuItem />
      <div className={styles.socialContainer}>
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
                  {/* {item.name} */}
                </a>
              </li>
            );
          })}
        </ul>
        <img
          src={icons.menu}
          alt="Menu Icon"
          onClick={menuToggleHandler}
          className={styles.menu}
        />
      </div>
    </nav>
  );
};

export default NavBar;
