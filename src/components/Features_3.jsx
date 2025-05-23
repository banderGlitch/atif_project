import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LayoutContainer from './LayoutContainer';
import './Styles/Feature_3Styles.css';

export default function PricingSection() {
  return (
    <section className="pricing-section">
    <LayoutContainer>
      <Row className="align-items-center">
        {/* LEFT COLUMN */}
        <Col md={6}>
          <p className="pricing-label">Pricing</p>
          <h2 className="pricing-heading">
            Affordable <br />
            Business Valuation <br />
            Plans for Every Stage
          </h2>
          <p className="pricing-subtext">
            Whether you're a startup or an established business, we offer plans
            designed to scale with your growth.
          </p>
          <p className="pricing-link">
            Do you need a special offer?{' '}
            <a href="#" className="text-highlight">Write to us</a>
          </p>
        </Col>

        {/* RIGHT COLUMN */}
        <Col md={6} className="d-flex justify-content-center flex-wrap align-items-stretch">
          <div className="pricing-card highlight d-flex flex-column justify-content-between p">
            <p className="card-title">Clybourne’s <br/> Online Valuation <br/> Tool</p>
            <hr className="hr-line"></hr>
            <div>
              <p className="card-sub">Starting at</p>
              <p style={{color: "#FFFFFF"}} className="card-price">$109</p>
            </div>
            <button className="get-started-btn">Get Started</button>
          </div>

          <div className="pricing-card_subdued">
            <p className="card-title">Traditional <br/> Valuation <br/> Cost</p>
            <hr className="hr-line"></hr>
            <p style={{color: "#212121"}} className="card-price">$10,000+</p>
          </div>
        </Col>
      </Row>
    </LayoutContainer>
  </section>
  );
}


