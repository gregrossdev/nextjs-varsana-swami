import React, { useState } from "react";
import Link from "next/link";
import MenuItems from "./layout-nav-menu";
import styles from "./layout-nav.module.css";
import { FiAlignJustify } from "react-icons/fi";
import { menuItems } from "./layout-nav-menu-items";

export default function Navbar-copy() {
  const [show, setShow] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.navArea}>
        <Link href="/">
          <a className={styles.logo}>
            <h1 className={styles.title}>Varsana Swami</h1>
            <h3 className={styles.description}>
              Service to the Dhama and Stewardship of the Earth
            </h3>
          </a>
        </Link>
        <button className={styles.btn} onClick={() => setShow(!show)}>
          <FiAlignJustify />
        </button>

        <div
          className={
            show ? `${styles.menus} ${styles.show}` : `${styles.menus}`
          }
        >
          <nav>
            <ul className={styles.menus}>
              {menuItems.map((items, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems
                    items={items}
                    key={index}
                    depthLevel={depthLevel}
                  />
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
