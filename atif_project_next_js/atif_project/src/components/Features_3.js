import React from 'react';
import '../static/styles/ComponentCss/Feature_3Styles.scss';

function PricingSection() {
  return (
    <section className="pricing-section">
      <div className="wrap-page">
        {/* LEFT SIDE */}
        <div className="left-content">
          <p className="pricing-label">Pricing</p>
          <hr className="hr-line" />
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
            Do you need a special offer?{" "}
            <a href="#" className="text-highlight">
              Write to us
            </a>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-content">
          {/* Highlighted Card */}
          <div className="pricing-card highlight">
            <p className="card-title">
              Clybourne’s <br />
              Online Valuation <br />
              Tool
            </p>
            <hr className="hr-line" />
            <div>
              <p className="card-sub">Starting at</p>
              <p className="card-price">$109</p>
            </div>
            <button className="get-started-btn">Get Started</button>
          </div>

          {/* Subdued Card */}
          <div className="pricing-card_subdued">
            <p className="card-title">
              Traditional <br />
              Valuation <br />
              Cost
            </p>
            <hr className="hr-line" />
            <p className="card-price">$10,000+</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
