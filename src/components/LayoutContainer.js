import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LayoutContainer = ({ children, className = '', ...props }) => {
  return (
    <Container fluid className={className} {...props}>
      <Row className="justify-content-center">
        <Col xs={12} lg={15}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutContainer;