import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../static/styles/ComponentCss/HeroStyle.css';
import PlayIcon from '../static/images/svg/PlayIcon';
import HeroImage from '../static/images/icons/heroicons/HeroImg_1.png';
import SocialBar from './SocialBar';
import LayoutContainer from './LayoutContainer';
const Hero = () => {
    return (
        <section className="py-5">
            <LayoutContainer>
                <Row className="justify-content-center">
                    {/* Left Column: SocialBar */}
                    <Col xs="auto" className="d-none d-lg-flex justify-content-center">
                        <SocialBar />
                    </Col>

                    {/* Right Column: Hero Content */}
                    <Col xs={12} lg={10}>
                        <Row className="align-items-center">
                            <Col md={7}>
                                <p
                                    style={{
                                        fontFamily: "'Teko', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '35px',
                                        lineHeight: '35px',
                                        color: '#19998D',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    Accurate Business Valuation Services
                                </p>
                                <h1
                                    style={{
                                        fontFamily: "'Teko', sans-serif",
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
                                        fontSize: '18px',
                                        lineHeight: '28px',
                                        letterSpacing: '0.18px',
                                        color: '#1E1E1E',
                                        marginTop: '1rem',
                                    }}
                                >
                                    At Clybourne, we simplify business valuation—delivering <br/> fast, affordable, and accurate company valuations to <br/> empower growth with clarity.
                                </p>
                                <div className="d-flex gap-3 mb-4">
                                    <button className="cta-button cta-talk">Let’s Talk!</button>
                                    <button className="cta-button cta-buy">Buy Now</button>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="play-icon-wrapper">
                                        <PlayIcon />
                                    </div>
                                    <p className="fw-medium" style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '18px',
                                        lineHeight: '28px',
                                        letterSpacing: '0.18px',
                                        color: '#1E1E1E',
                                        marginTop: '1rem',
                                    }}>Watch Demo</p>
                                </div>
                            </Col>
                            <Col md={5} className="d-none d-md-block">
                                <img
                                    src={HeroImage}
                                    alt="Illustration"
                                    className="img-fluid"
                                    style={{ borderRadius: 12 }}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </LayoutContainer>
        </section>
    );
};

export default Hero;
