import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import SubMenu from "./layout-nav-menu-sub";
import styles from "./layout-nav.module.css";


const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <li className={styles.menuItems} ref={ref}>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown(!dropdown)}
          >
            {items.title}
            {dropdown ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </button>
          <SubMenu
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link href={items.href}>
          <a>{items.title}</a>
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
