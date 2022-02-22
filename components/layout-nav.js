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
    <nav className={nav.navbar}>
      <div className={nav.center}>
        <div className={nav.title}>
          <Link href="/">
            <a className={nav.logo}>
              <h1 className={nav.title}>Varsana Swami</h1>
              <h3 className={nav.description}>
                Service to the Dhama and Stewardship of the Earth
              </h3>
            </a>
          </Link>
          <button className={nav.btn} onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? `${nav.links} ${nav.show}` : `${nav.links}`}>
          <Link
            href="/about"
            className={nav.link}
            activeClassName={nav.active}
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            href="/dhamseva"
            className={nav.link}
            activeClassName={nav.active}
            onClick={() => setShow(false)}
          >
            Dham-seva
          </Link>

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


// const Wrapper = styled.nav`
//   display: flex;
//   justify-content: center;
//   padding-bottom: 1rem;

//   .site-title {
//     margin-bottom: 0.25rem;

//     font-family: "Dancing Script", cursive;
//     font-size: 2.5rem;
//     font-weight: 700;

//     color: var(--clr-black);
//   }

//   .site-description {
//     margin-bottom: 0;

//     font-family: "Dancing Script", cursive;
//     font-size: 0.9rem;

//     color: var(--clr-black);
//   }

//   .nav-center {
//     width: 90vw;
//     max-width: var(--max-width);
//   }
//   .nav-title {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding-top: 0.5em;
//   }
//   .nav-title img {
//     width: 200px;
//     margin-left: -6px;
//     margin-bottom: -9px;
//   }
//   .nav-btn {
//     padding: 0.15rem 0.75rem;
//   }
//   .nav-btn svg {
//     font-size: 1.5rem;
//   }

//   .nav-icon {
//     margin-bottom: -3px;
//     margin-left: 4px;
//   }

//   .nav-links {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;

//     height: 0;

//     overflow: hidden;
//     transition: var(--transition);
//   }

//   .show-links {
//     height: 23.9375rem;
//     height: fit-content;
//   }

//   .nav-link {
//     display: block;
//     border-top: 1px solid var(--clr-grey-50);
//     padding: 0.5em 0;
//     font-weight: 700;

//     color: var(--clr-black);
//     font-size: 1.3rem;
//     text-transform: uppercase;
//     letter-spacing: 1px;
//     transition: var(--transition);
//     text-align: left;
//   }

//   .active {
//     color: var(--primary-500);
//   }

//   .donate-link {
//     font-family: Montserrat;
//     font-weight: 700;
//     letter-spacing: 1px;
//     text-shadow: 0 4px 4px rgb(0 0 0 / 25%);
//     color: var(--clr-black);
//   }

//   .dropdown {
//     position: relative;
//   }

//   button {
//     font-family: var(--bodyFont);
//     cursor: pointer;
//     -webkit-appearance: none;
//     appearance: none;
//     border: none;
//     letter-spacing: var(--letterSpacing);
//     padding: 0;
//     box-shadow: none;
//     transition: var(--transition);
//     text-transform: capitalize;
//   }

//   .dd-header {
//     display: flex;
//     align-items: center;
//   }

//   .dd-header h4 {
//     margin: 0;
//   }

//   .submenu .nav-link {
//     font-size: 0.9rem;
//     margin-bottom: 0.5em;
//   }

//   @media only screen and (min-width: 768px) {
//     .submenu {
//       display: block;
//       position: absolute;
//       transform: translateX(-16px);
//       border-radius: 0.5rem;
//       z-index: 1;
//       min-width: 17rem;
//       padding: 1em;
//       margin-right: -1em;
//       background-color: var(--clr-white);
//       box-shadow: var(--shadow-4);
//     }
//   }

//   @media screen and (min-width: 900px) {
//     .site-title {
//       margin-left: 5rem;
//       font-size: 2.4rem;
//     }

//     .site-description {
//       font-size: 1.25rem;
//     }

//     .nav-center {
//       display: flex;
//       align-items: center;
//     }

//     .nav-title {
//       height: auto;
//       margin: 1rem 0;
//       margin-left: 0.5em;
//     }

//     .nav-btn {
//       display: none;
//     }

//     .nav-links {
//       flex-direction: row;
//       align-items: center;
//       justify-content: space-between;

//       height: auto !important;
//       flex-basis: 55%;
//       margin-left: auto;
//       overflow: unset;
//     }

//     .nav-link {
//       /* margin-right: 1em; */
//       border-top: none;
//       padding: 0;

//       font-size: 1rem;
//       font-weight: 700;
//     }

//     .donate-link {
//       justify-content: flex-end;
//       align-items: center;
//       margin-right: 0;
//     }

//     button {
//       border-top: none;
//       padding: 0;
//       font-size: 1rem;
//       font-weight: 700;
//     }
//   }
// `;
