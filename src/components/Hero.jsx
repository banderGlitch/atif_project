import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles/HeroStyle.css';
import PlayIcon from '../assets/svg/PlayIcon';
import HeroImage from '../assets/icons/heroicons/HeroImg_1.png';
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
                                <p className="hero-subtitle">
                                    Accurate Business Valuation Services
                                </p>

                                <h1 className="hero-title">
                                    Unlock Your <br /> True Company Value
                                </h1>

                                <p className="hero-description">
                                    At Clybourne, we simplify business valuation—delivering <br /> fast, affordable, and accurate company valuations to <br /> empower growth with clarity.
                                </p>
                                <div className="d-flex gap-3 mb-4">
                                    <button className="cta-button cta-talk">Let’s Talk!</button>
                                    <button className="cta-button cta-buy">Buy Now</button>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="play-icon-wrapper">
                                        <PlayIcon />
                                    </div>
                                    <p className="hero-watch">Watch Demo</p>
                                </div>
                            </Col>
                            <Col md={5} className="d-none d-md-block">
                                <img
                                    src={HeroImage}
                                    alt="Illustration"
                                    className="img-fluid"
                                    style={{ borderRadius: 'var(--radius-xl)' }}
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
