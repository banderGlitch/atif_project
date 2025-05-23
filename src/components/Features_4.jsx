import './Styles/Feature_4Styles.css';
import LayoutContainer from './LayoutContainer';
import { Container, Row, Col } from 'react-bootstrap';
import ArrowIcon from '../assets/svg/arrowIcon'

export default function Features_4() {

    const featureData = [
        {
            title:
                <>
                    Fastest <br /> Turnaround
                </>,
            description:
                <>
                    24-hour reports vs. days <br /> elsewhere
                </>
        },
        {
            title:
                <>
                    Human +  <br /> AI Expertise
                </>,
            description:
                <>
                    Combining business <br /> intelligence with human <br /> expertise for deeper insights
                </>
        },
        {
            title: 'Global & Secure',
            description:
                <>
                    GDPR-compliant data <br /> protection
                </>

        },
        {
            title: 'Unmatched Affordability',
            description:
                <>
                    Premium reports at <br /> 1/10th the cost
                </>
        },
    ];


    return (
        <>
        <hr style={{width: "1740px", background: "#FFFFFF", mixBlendMode: "normal", opacity: "0.5", margin: "0 auto", position: "relative", bottom: "10px"}}></hr>
        <section className="why-section">
      <Container className="why-container">
        <Row className="align-items-center gx-5">
          <Col md={6} className="mb-4 mb-md-0">
            <p className="why-label text-decoration-underline">Why Clybourne</p>
            <h2 className="why-heading">The Trusted Valuation Platform for 100+ Countries</h2>
            <p className="why-subtext">
              With advanced algorithms, expert insights, and a user-friendly platform,
              we ensure valuations you can trust.
            </p>
          </Col>

          <Col md={6}>
            <div className="feature-column-layout">
              <div className="feature-column column-left">
                <div className="feature-box animate-fade">
                  <div className="feature-icon">
                    <ArrowIcon />
                  </div>
                  <h5 className="feature-title">{featureData[0].title}</h5>
                  <p className="feature-desc">{featureData[0].description}</p>
                </div>
                <div className="feature-box animate-fade">
                  <div className="feature-icon">
                    <ArrowIcon />
                  </div>
                  <h5 className="feature-title">{featureData[2].title}</h5>
                  <p className="feature-desc">{featureData[2].description}</p>
                </div>
              </div>
              <div className="feature-column column-right">
                <div className="feature-box animate-fade">
                  <div className="feature-icon">
                    <ArrowIcon />
                  </div>
                  <h5 className="feature-title">{featureData[1].title}</h5>
                  <p className="feature-desc">{featureData[1].description}</p>
                </div>
                <div className="feature-box animate-fade">
                  <div className="feature-icon">
                    <ArrowIcon />
                  </div>
                  <h5 className="feature-title">{featureData[3].title}</h5>
                  <p className="feature-desc">{featureData[3].description}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
        </>
    )
}   
