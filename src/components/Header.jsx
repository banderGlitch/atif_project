import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Logo from '../assets/icons/headersicons/HeaderLogoComp.png';
import './Styles/HeaderStyle.css';
export default function Header() {
    return (
        <header className="custom-header">
            <Navbar expand="lg" className="w-100" bg="white">
                <Container fluid className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="#"><img src={Logo} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto align-items-center gap-3">
                            <Nav.Link href="#" className="nav-link-custom">Product</Nav.Link>
                            <Nav.Link href="#" className="nav-link-custom">Methodology</Nav.Link>
                            <Nav.Link href="#" className="nav-link-custom">Pricing</Nav.Link>
                            <Nav.Link href="#" className="nav-link-custom">About Us</Nav.Link>
                            <Nav.Link href="#" className="nav-link-custom">Resources</Nav.Link>
                            <Nav.Link href="#" className="nav-link-custom">Contact</Nav.Link>
                            <Button variant="outline-primary" className="login-button-custom">
                                Login/Sign Up
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
