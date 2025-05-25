import '../static/styles/ComponentCss/Feature_5Styles.scss';

function Features_5() {
  return (
    <section className="about-us-section">
      <div className="full-width-wrapper">
        <div className="wrap-page">
          {/* Left Side Content */}
          <div className="about-left">
            <p className="about-label">About Us</p>
            <h3 className="about-subheading">Our Story:</h3>
            <h2 className="about-heading">Redefining Business Valuation</h2>
            <p className="about-desc">
              At Clybourne, we’re on a mission to make <br />
              accurate valuations simple, insightful, and <br />
              accessible to businesses worldwide.
            </p>
          </div>

          <div className="about-right-wrapper">
          <div className="about-right">
            <div className="stat-box blue-box">
              <p className="stat-value">350</p>
              <p className="stat-label">Companies Valued</p>
            </div>
            <div className="stat-box white-box">
              <p className="stat-value">$100m</p>
              <p className="stat-label">Funding Secured</p>
            </div>
            <div className="stat-box white-box">
              <p className="stat-value">325</p>
              <p className="stat-label">Project Done</p>
            </div>
          </div>
        </div>

          {/* Right Side Content */}
          {/* <div className="about-right">
            <div className="stat-box blue-box">
              <p className="stat-value">350</p>
              <p className="stat-label">Companies Valued</p>
            </div>
            <div className="stat-box white-box">
              <p className="stat-value">$100m</p>
              <p className="stat-label">Funding Secured</p>
            </div>
            <div className="stat-box white-box">
              <p className="stat-value">325</p>
              <p className="stat-label">Project Done</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Features_5;
