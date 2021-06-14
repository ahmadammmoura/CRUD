import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap/";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand >Digimons website</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/favorite">my digimons</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
