import React from 'react';
import MenuItems from "./layout-nav-menu";
import styles from './layout-nav.module.css';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? `${styles.dropdownSubmenu}` : "";
  
  return (
    <ul className={`${styles.dropdown} ${dropdownClass} ${dropdown ? `${styles.show}` : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;