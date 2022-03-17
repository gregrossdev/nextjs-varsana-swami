import React, { useState } from "react";
import Link from "next/link";

import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import onClickOutside from "react-onclickoutside";
import { writings, media } from "./layout-links";

// styles 
import nav from './layout-nav.module.css'

const Navbar = () => {
 

  return (
    <nav className={nav.navbar}>
      <div className={nav.center}> 
        <div className={show ? `${nav.links} ${nav.show}` : `${nav.links}`}>
          

          {writings.map((link) => {
            const title = link.title;
            const info = link.info;
            return (
              <div className={nav.dropdown} key={link.title}>
                <header className={nav.header}>
                  <h4 className={nav.link}>{title}</h4>
                  <button className={nav.btn} onClick={() => setDrop1(true)}>
                    {drop1 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                  </button>
                </header>
                {drop1 && (
                  <div className={nav.submenu}>
                    {info.map((i) => {
                      const r = i.route;
                      return (
                        <Link
                          href={r}
                          key={i.name}
                          className={nav.link}
                          activeClassName={nav.active}
                          onClick={close}
                        >
                          {i.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {media.map((link) => {
            const title = link.title;
            const info = link.info;
            return (
              <div className={nav.dropdown} key={link.title}>
                <header className={nav.header}>
                  <h4 className={nav.link}>{title}</h4>
                  <button className={nav.btn} onClick={() => setDrop2(true)}>
                    {drop2 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                  </button>
                </header>
                {drop2 && (
                  <div className={nav.submenu}>
                    {info.map((i) => {
                      const r = i.route;
                      return (
                        <Link
                          href={r}
                          key={i.name}
                          className={nav.link}
                          activeClassName={nav.active}
                          onClick={close}
                        >
                          {i.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            href="/books"
            className={nav.link}
            activeClassName={nav.active}
            onClick={() => setShow(false)}
          >
            Books
          </Link>

          <div className={nav.link}>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=NQTGB6KQUGFJC"
              target="_blank"
              className={nav.donate}
              onClick={() => setShow(false)}
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => Navbar.handleClickOutside,
};

export default onClickOutside(Navbar, clickOutsideConfig);

