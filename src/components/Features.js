import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../static/styles/ComponentCss/FeatureStyle.css';
import ArrowIcon from '../static/images/svg/arrowIcon';
import LayoutContainer from './LayoutContainer';

const features = [
    {
        title: (
            <>
              Affordable Pricing <br /> No Hidden Fees
            </>
          ),
        description:
            <>
            Skip traditional valuations costing<br/> $10,000+. Get a professional valuation <br/> report starting at $109 — 90% cheaper <br/> than industry standards.
            </>
    },
    {
        title: (
            <>
              24-Hour Valuation Report
            </>
          ),
        description:
            <>
            Submit details via our user-friendly <br/> valuation dashboard and receive  <br/> insights within a day.
            </>
    },
    {
        title: (
            <>
              Expert-Curated Insights
            </>
          ),
        description:
            <>
            By combining AI and human <br/> expertise, we deliver customized <br/> valuation reports for fundraising, <br/> M&A, or strategic decisions.
            </>
    },
];

const FeaturesSection = () => {
    return (
        <section style={{ backgroundColor: '#F9F9F9', padding: '80px 0' }}>
            <LayoutContainer>
                <Row className="justify-content-center">
                    <Col xs={12} lg={10}>
                        <p className="text-decoration-underline text-dark mb-1" style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '18px',
                            lineHeight: '28px',
                            letterSpacing: '0.18px',
                            color: '#1E1E1E',
                            marginTop: '1rem',
                        }}>
                            How It Works
                        </p>
                        <h2
                            className="text-main-heading mb-3"
                            style={{
                                fontFamily: 'Teko, sans-serif',
                                fontSize: '36px',
                                color: '#233977',
                                lineHeight: '42px',
                                fontWeight: '600px',
                            }}
                        >
                            Fast & Transparent Online <br />
                            Business Valuation Tool
                        </h2>
                        <p
                            className="text-body"
                            style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '18px',
                            lineHeight: '28px',
                            letterSpacing: '0.18px',
                            color: '#1E1E1E',
                            marginTop: '1rem',
                            }}
                        >
                            From data input to precise valuation results, Clybourne’s platform streamlines <br/> the process
                            for startups and established businesses alike.
                        </p>

                        <Row className="gx-4 gy-4">
                            {features.map((item, idx) => (
                                <Col md={4} key={idx}>
                                    <FeatureCard icon={ArrowIcon} title={item.title} description={item.description} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </LayoutContainer>
        </section>
    );
};

export default FeaturesSection;




const FeatureCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="feature-card">
            <div className="icon-container">
                <Icon />
            </div>
            <h5 className="feature-title">{title}</h5>
            <p className="feature-desc">{description}</p>
        </div>
    );
};

