import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h6 className="text-primary fw-semibold">Accurate Business Valuation Services</h6>
            <h1 className="fw-bold mb-3">Unlock Your <br />True Company Value</h1>
            <p className="text-muted mb-4">
              At Clybourne, we simplify business valuation—delivering fast, affordable, and accurate company valuations to empower growth with clarity.
            </p>
            <div className="d-flex gap-3 mb-3">
              <Button variant="success">Let’s Talk!</Button>
              <Button variant="primary">Buy Now</Button>
            </div>
            <a href="#" className="text-decoration-none fw-medium">▶ Watch Demo</a>
          </Col>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Business Growth"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
