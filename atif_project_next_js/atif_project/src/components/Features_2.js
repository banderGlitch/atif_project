import React from 'react';
import '../static/styles/ComponentCss/Feature_2Styles.scss';
import ArrowIcon from '../static/images/svg/arrowIcon';

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

const Features_2 = () => {
  return (
    <section className="approach-section">
      <div className="wrap-page">
        <p className="approach-label">Our Valuation Approach</p>
        <hr
          style={{
            width: '242px',
            background: '#FFFFFF',
            mixBlendMode: 'normal',
            opacity: '0.5',
            margin: '0 auto',
            position: 'relative',
            bottom: '10px',
          }}
        />
        <h2 className="approach-title">Valuing More Than Numbers:</h2>
        <h2 className="approach-highlighted">Data-Driven & Humanized Methodology</h2>
        <p className="approach-subtext">
          Our Approach is simple: making valuations accessible, accurate, and impactful for everyone.
        </p>

        <div className="approach-cards-wrapper">
          {approaches.map((item, idx) => (
            <ApproachCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features_2;

const ApproachCard = ({ title, isHighlight, buttonText }) => {
  return (
    <div className={`approach-card ${isHighlight ? 'highlight' : ''}`}>
      <div className="card-body-wrapper">
        <div className="icon-container">
          <ArrowIcon />
        </div>

        <p className="approach-text">{title}</p>
        {isHighlight && <button className="know-more-btn">{buttonText}</button>}
      </div>
    </div>
  );
};
