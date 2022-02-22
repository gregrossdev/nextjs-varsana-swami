import React, { useState } from "react";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import onClickOutside from "react-onclickoutside";
import { writings, media } from "./layout-links";

// styles 
import nav from './layout-nav.module.css'

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);

  Navbar.handleClickOutside = () => {
    setShow(false);
    setDrop1(false);
    setDrop2(false);
  };

  const close = () => {
    setShow(false);
    setDrop1(false);
    setDrop2(false);
  };

  return (
    <nav className='nav'>
      <div className="nav-center">
        <div className="nav-title">
          <Link href="/">
            <a className={nav.logo}>
              <h1 className="site-title">Varsana Swami</h1>
              <h3 className="site-description">
                Service to the Dhama and Stewardship of the Earth
              </h3>
            </a>
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            href="/about"
            className="nav-link"
            // activeClassName={nav.active}
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            href="/dhamseva"
            className="nav-link"
            // activeClassName={nav.active}
            onClick={() => setShow(false)}
          >
            Dham-seva
          </Link>

          {writings.map((link) => {
            const title = link.title;
            const info = link.info;
            return (
              <div className="dropdown" key={link.title}>
                <header className="dd-header">
                  <h4 className="nav-link">{title}</h4>
                  <button className="btn" onClick={() => setDrop1(true)}>
                    {drop1 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                  </button>
                </header>
                {drop1 && (
                  <div className="submenu">
                    {info.map((i) => {
                      const r = i.route;
                      return (
                        <Link
                          href={r}
                          key={i.name}
                          className="nav-link"
                          // activeClassName={nav.active}
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
              <div className="dropdown" key={link.title}>
                <header className="dd-header">
                  <h4 className="nav-link">{title}</h4>
                  <button className="btn" onClick={() => setDrop2(true)}>
                    {drop2 ? <AiFillCaretUp /> : <AiFillCaretDown />}
                  </button>
                </header>
                {drop2 && (
                  <div className="submenu">
                    {info.map((i) => {
                      const r = i.route;
                      return (
                        <Link
                          href={r}
                          key={i.name}
                          className="nav-link"
                          // activeClassName={nav.active}
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
            className="nav-link"
            // activeClassName={nav.active}
            onClick={() => setShow(false)}
          >
            Books
          </Link>

          <div className="nav-link">
            <a
              href=""
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

