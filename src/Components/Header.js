import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../Assets/images/KashúWhite.png";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="50"
            className="d-inline-block align-top"
            alt="kashu logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#hero">Inicio</Nav.Link>
            <Nav.Link href="#features">¿Cómo funciona?</Nav.Link>
            <Nav.Link href="#about">Nosotros</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
