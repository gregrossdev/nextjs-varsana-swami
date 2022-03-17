import React from "react";
import MenuItems from "./layout-nav-menu";
import styles from './layout-nav.module.css';
import { menuItems } from "./layout-nav-menu-items";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navArea}>
        <nav>
          <ul className={styles.menus}>
            {menuItems.map((items, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={items} key={index} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
