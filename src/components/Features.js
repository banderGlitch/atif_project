import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../static/styles/ComponentCss/FeatureStyle.scss';
import ArrowIcon from '../static/images/svg/arrowIcon';

const features = [
  {
    title: (
      <>
        Affordable Pricing <br /> No Hidden Fees
      </>
    ),
    description: (
      <>
        Skip traditional valuations costing<br /> $10,000+. Get a professional valuation <br /> report starting at $109 — 90% cheaper <br /> than industry standards.
      </>
    ),
  },
  {
    title: <>24-Hour Valuation Report</>,
    description: (
      <>
        Submit details via our user-friendly <br /> valuation dashboard and receive <br /> insights within a day.
      </>
    ),
  },
  {
    title: <>Expert-Curated Insights</>,
    description: (
      <>
        By combining AI and human <br /> expertise, we deliver customized <br /> valuation reports for fundraising, <br /> M&A, or strategic decisions.
      </>
    ),
  },
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card">
    <div className="icon-container">
      <Icon />
    </div>
    <h5 className="feature-title">{title}</h5>
    <p className="feature-desc">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="wrap-page">
        <p className="section-heading">How It Works</p>
        <h2 className="main-heading-blue">
          Fast & Transparent Online <br />
          Business Valuation Tool
        </h2>

        <p className="section-description">
          From data input to precise valuation results, Clybourne’s platform streamlines <br />
          the process for startups and established businesses alike.
        </p>

        <Row className="gx-4 gy-4">
          {features.map((item, idx) => (
            <Col md={4} key={idx}>
              <FeatureCard icon={ArrowIcon} title={item.title} description={item.description} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FeaturesSection;
