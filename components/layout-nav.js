import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import styles from "./layout-nav.module.css";

export default function Header() {


  return (
    <header className={styles.header}>
      <Navbar bg="light" expand="lg">
        <Container className={styles.navArea}>
          <Navbar.Brand href="/"><a className={styles.logo}>
            <h1 className={styles.title}>Varsana Swami</h1>
            <h3 className={styles.description}>
              Service to the Dhama and Stewardship of the Earth
            </h3>
          </a></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/dhamseva">Dham-seva</Nav.Link>
              <NavDropdown title="Writings" id="basic-nav-dropdown">
                <NavDropdown.Item href="/earth-culture">
                Earth Culture
                </NavDropdown.Item>
                <NavDropdown.Item href="/festivals">
                Festivals
                </NavDropdown.Item>
                <NavDropdown.Item href="/going-deeper">
                Going Deeper
                </NavDropdown.Item>
                <NavDropdown.Item href="/gaura-katha">
                Gaura Katha
                </NavDropdown.Item>
                <NavDropdown.Item href="/nature-meditations">
                Nature Meditations
                </NavDropdown.Item>
                <NavDropdown.Item href="/personalities">
                Personalities
                </NavDropdown.Item>
                <NavDropdown.Item href="/srila">
                Srila Prabhupada Katha
                </NavDropdown.Item>
                <NavDropdown.Item href="/sadhu-sanga">
                Sadhu-Sanga
                </NavDropdown.Item>
                <NavDropdown.Item href="/sri-dhama">
                Sri Dhama
                </NavDropdown.Item>
                <NavDropdown.Item href="/vyasa-puja">
                Vyasa Puja Offerings to Srila Prabhupada
                </NavDropdown.Item>
                <NavDropdown.Item href="/various">
                Various
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Media" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://drive.google.com/drive/folders/1e3u9_MyIkhYj5KlnQPNxH-NffdUKJMuc">
                Audio
                </NavDropdown.Item>
                <NavDropdown.Item href="/media/video">
                Video
                </NavDropdown.Item>
                <NavDropdown.Item href="https://drive.google.com/drive/folders/1ABHgs1Sesk4ZHUFDhCTRqYhAYzE7HhRr?usp=sharing">
                Photos
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/books">Books</Nav.Link>
              <Nav.Link href="https://www.paypal.com/donate/?hosted_button_id=NQTGB6KQUGFJC">Donate</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
