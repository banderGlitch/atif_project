import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const features = [
  {
    title: 'Affordable Pricing, No Hidden Fees',
    text: 'Skip traditional valuations costing $10,000+. Get a professional valuation report starting at $199 — 90% cheaper than industry standards.',
  },
  {
    title: '24-Hour Valuation Report',
    text: 'Submit details via our user-friendly valuation dashboard and receive insights within a day.',
  },
  {
    title: 'Expert-Curated Insights',
    text: 'By combining AI and human expertise, we deliver customized valuation reports for fundraising, M&A, or strategic decisions.',
  },
];

const Features = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-muted text-uppercase">How It Works</h6>
          <h2 className="fw-bold">Fast & Transparent Online Business Valuation Tool</h2>
          <p className="text-muted">
            From data input to precise valuation results, Clybourne’s platform streamlines the process for startups and established businesses alike.
          </p>
        </div>
        <Row>
          {features.map((feature, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <div className="mb-3">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="icon"
                      width={32}
                      height={32}
                    />
                  </div>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
