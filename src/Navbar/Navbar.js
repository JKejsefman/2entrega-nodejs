import {Navbar, Container, Nav} from "react-bootstrap"

export default function Header ({category1,category2,category3}) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Menu Principal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">{category1}</Nav.Link>
              <Nav.Link href="#link">{category2}</Nav.Link>
              <Nav.Link href="#link">{category3}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

