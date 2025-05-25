import '../static/styles/ComponentCss/Feature_4Styles.scss';
import ArrowIcon from '../static/images/svg/arrowIcon';

const featureData = [
  {
    title: <>Fastest <br /> Turnaround</>,
    description: <>24-hour reports vs. days <br /> elsewhere</>
  },
  {
    title: <>Human + <br /> AI Expertise</>,
    description: <>Combining business <br /> intelligence with human <br /> expertise for deeper insights</>
  },
  {
    title: 'Global & Secure',
    description: <>GDPR-compliant data <br /> protection</>
  },
  {
    title: 'Unmatched Affordability',
    description: <>Premium reports at <br /> 1/10th the cost</>
  },
];

function Features_4() {
  return (
    <section className="why-section">
      <div className="wrap-page">
        {/* Left Column */}
        <div className="left-content">
          <p className="why-label">Why Clybourne</p>
          <h2 className="why-heading">
            The Trusted Valuation Platform for 100+ Countries
          </h2>
          <p className="why-subtext">
            With advanced algorithms, expert insights, and a user-friendly platform,
            we ensure valuations you can trust.
          </p>
        </div>

        {/* Right Column */}
        <div className="feature-column-layout">
          <div className="feature-row_1">
            <div className="feature-box animate-fade">
              <div className="feature-icon"><ArrowIcon /></div>
              <h5 className="feature-title">{featureData[0].title}</h5>
              <p className="feature-desc">{featureData[0].description}</p>
            </div>

            <div className="feature-box animate-fade column-right">
              <div className="feature-icon"><ArrowIcon /></div>
              <h5 className="feature-title">{featureData[1].title}</h5>
              <p className="feature-desc">{featureData[1].description}</p>
            </div>
          </div>

          <div className="feature-row_2">
            <div className="feature-box animate-fade">
              <div className="feature-icon"><ArrowIcon /></div>
              <h5 className="feature-title">{featureData[2].title}</h5>
              <p className="feature-desc">{featureData[2].description}</p>
            </div>

            <div className="feature-box animate-fade">
              <div className="feature-icon"><ArrowIcon /></div>
              <h5 className="feature-title">{featureData[3].title}</h5>
              <p className="feature-desc">{featureData[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features_4;
