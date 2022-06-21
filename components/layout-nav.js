import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import styles from "./layout-nav.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>
              <a className={styles.logo}>
                <h1 className={styles.title}>Varsana Swami</h1>
                <h3 className={styles.description}>
                  Service to the Dhama and Stewardship of the Earth
                </h3>
              </a>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.menus}`}>
              <Link href="/about" passHref>
                <Nav.Link eventKey="1" className={styles.menuItems}>
                  About
                </Nav.Link>
              </Link>
              <Link href="/dhamseva" passHref>
                <Nav.Link eventKey="1" className={styles.menuItems}>
                  Dham-seva
                </Nav.Link>
              </Link>
              <NavDropdown
                title="Writings"
                id="basic-nav-dropdown"
                className={styles.menuItems}
              >
                <NavDropdown.Item eventKey="2">
                  <Link href="/earth-culture/sacramental-nature-of-agriculture-and-plow">
                    Earth Culture
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                  <Link href="/festivals/rope-meditation">Festivals</Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                  <Link href="/going-deeper/relationship-with-self-and-lord-s-measuring-stick">
                    Going Deeper
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                  <Link href="/gaura-katha/lord-caitanya-s-taking-sanyas-and-mother-saci">
                    Gaura Katha
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                  <Link href="/nature-meditations/light-of-the-bhagavat-transcendental-lessons-from-the-natural-world">
                    Nature Meditations
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                  <Link href="/personalities/the-story-of-bhakti-devi">
                    Personalities
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                  <Link href="/srila/i-will-never-die-i-will-live-forever-in-my-books.">
                    Srila Prabhupada Katha
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                  <Link href="/sadhu-sanga/acaryas-their-grace-their-samadhis-and-our-hope">
                    Sadhu-Sanga
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                  <Link href="/sri-dhama/survey-on-govardhan-hill-in-new-vrindaban">
                    Sri Dhama
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                  <Link
                    className="white-space"
                    href="/vyasa-puja/vyasa-puja-offering-2021"
                  >
                    Vyasa Puja Offerings
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                  <Link href="/various/japa-sankirtan-and-arcana">Various</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Media"
                id="basic-nav-dropdown"
                className={styles.menuItems}
              >
                <NavDropdown.Item
                  href="https://drive.google.com/drive/folders/1eaTfCEOev0sM1D00Ba_wACKWrxn5p_LG?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Audio
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                  <Link href="/media/video">Video</Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://drive.google.com/drive/folders/1ABHgs1Sesk4ZHUFDhCTRqYhAYzE7HhRr?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photos
                </NavDropdown.Item>
              </NavDropdown>
              <Link href="/books" passHref>
                <Nav.Link eventKey="1" className={styles.menuItems}>
                  Books
                </Nav.Link>
              </Link>
              <span className={styles.span}>
                <a
                  className={`${styles.menuItems} ${styles.donate}`}
                  href="https://www.paypal.com/donate/?hosted_button_id=NQTGB6KQUGFJC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate
                </a>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
