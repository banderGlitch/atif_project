import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm py-3">
       <Container>
        <Navbar.Brand href="#"><strong>Clybourne</strong></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link href="#">Product</Nav.Link>
            <Nav.Link href="#">Methodology</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Resources</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Button variant="outline-primary" size="sm">Login/Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
