import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import styles from "./layout-nav.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar bg="light" expand="lg">
        <Container className={styles.navArea}>
          <Navbar.Brand>
            <Link href="/">
              <a className={styles.logo}>
                <h1 className={styles.title}>Varsana Swami</h1>
                <h3 className={styles.description}>
                  Service to the Dhama and Stewardship of the Earth
                </h3>
              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link href="/about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/dhamseva">Dham-seva</Link>
              </Nav.Link>
              <NavDropdown title="Writings" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link href="/earth-culture">Earth Culture</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/festivals">Festivals</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/going-deeper">Going Deeper</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/gaura-katha">Gaura Katha</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/nature-meditations">Nature Meditations</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/personalities">Personalities</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/srila">Srila Prabhupada Katha</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/sadhu-sanga">Sadhu-Sanga</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/sri-dhama">Sri Dhama</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/vyasa-puja">
                    Vyasa Puja Offerings to Srila Prabhupada
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/various">Various</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Media" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://drive.google.com/drive/folders/1e3u9_MyIkhYj5KlnQPNxH-NffdUKJMuc">
                  Audio
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/media/video">Video</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://drive.google.com/drive/folders/1ABHgs1Sesk4ZHUFDhCTRqYhAYzE7HhRr?usp=sharing">
                  Photos
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link href="/books">Books</Link>
              </Nav.Link>
              <Nav.Link href="https://www.paypal.com/donate/?hosted_button_id=NQTGB6KQUGFJC">
                Donate
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
