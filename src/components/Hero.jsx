import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Styles/HeroStyle.css';
import PlayIcon from '../assets/svg/PlayIcon';
const Hero = () => {
    return (
        <section className="bg-light py-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={7} lg={7} xl={7}>
                        <p
                            style={{
                                fontFamily: "'Teko', sans-serif",
                                fontWeight: 400,
                                fontSize: '35px',
                                lineHeight: '35px',
                                color: '#19998D', // Use your exact Figma hex if different
                                marginBottom: '0.5rem',
                            }}
                        >
                            Accurate Business Valuation Services
                        </p>
                        <h1
                            style={{
                                fontFamily: "'Teko', sans-serif",
                                fontWeight: 300, // 👈 use lighter,
                                fontSize: '71px',
                                lineHeight: '73.1px',
                                color: '#233977',
                                marginBottom: '0.5rem',
                            }}
                        >
                            Unlock Your <br /> True Company Value
                        </h1>
                        <p
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                letterSpacing: '0.18px',
                                color: '#1E1E1E',
                                marginTop: '1rem',
                            }}
                        >
                            At Clybourne, we simplify business valuation—delivering fast, affordable, and accurate company valuations to empower growth with clarity.
                        </p>
                        <div className="d-flex gap-3 mb-4">
                            <button className="cta-button cta-talk">Let’s Talk!</button>
                            <button className="cta-button cta-buy">Buy Now</button>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="play-icon-wrapper">
                                <PlayIcon />
                            </div>
                            <a href="#" className="fw-medium" style={{ color: '#233977' }}>Watch Demo</a>
                        </div>
                    </Col>
                    <Col md={5} lg={5} xl={5} className="d-none d-md-block">
                        <img
                            src="https://via.placeholder.com/500x350"
                            alt="Illustration"
                            className="img-fluid"
                            style={{ borderRadius: 12 }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
