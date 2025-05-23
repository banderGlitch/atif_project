import LayoutContainer from "./LayoutContainer";
import React from 'react'
import './Styles/Feature_2Styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import ArrowIcon from '../assets/svg/arrowIcon'


const approaches = [
    {
      title: (
        <>
          Custom <br /> Valuation <br /> Models
        </>
      ),
      isHighlight: false,
    },
    {
      title: (
        <>
          Trusted <br /> Data <br /> Sources
        </>
      ),
      isHighlight: false,
    },
    {
      title: (
        <>
          Most valuation <br />
          platforms use only the <br />
          DCF (Discounted Cash Flow) <br />
          approach
        </>
      ),
      isHighlight: true,
      buttonText: 'Know More',
    },
    {
      title: (
        <>
          Investor- <br /> Ready Reports
        </>
      ),
      isHighlight: false,
    },
  ];





export default function Features_2() {
    return (
        <section className="approach-section">
            <LayoutContainer>
                <p className="approach-label">
                    Our Valuation Approach
                </p>
                <hr style={{width: "242px", background: "#FFFFFF", mixBlendMode: "normal", opacity: "0.5", margin: "0 auto", position: "relative", bottom: "10px"}}></hr>
                <h2 className="approach-title">
                    Valuing More Than Numbers:
                </h2>
                <h2 className="approach-highlighted">
                    Data-Driven & Humanized Methodology
                </h2>
                <p className="approach-subtext">
                    Our Approach is simple: making valuations accessible, accurate, and impactful for everyone.
                </p>

                <Row className="justify-content-center gy-4 gx-4 mt-5">
                    {approaches.map((item, idx) => (
                        <Col key={idx}
                        xs="auto"
                            sm={10}
                            md="auto"
                            className="d-flex justify-content-center"
                        >
                            <ApproachCard {...item} />
                        </Col>
                    ))}
                </Row>
            </LayoutContainer>
        </section>
    )
}



const ApproachCard = ({ title, isHighlight, buttonText }) => {
    return (
      <div className={`approach-card ${isHighlight ? 'highlight' : ''}`}>
        <div className="icon-container">
          <ArrowIcon />
        </div>
  
        <div className="card-body-wrapper">
          <p className="approach-text">{title}</p>
          {isHighlight && (
            <button className="know-more-btn">{buttonText}</button>
          )}
        </div>
      </div>
    );
  };

