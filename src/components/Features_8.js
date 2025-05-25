import React from 'react';
import '../static/styles/ComponentCss/Feature_8Style.scss';

const toolkitItems = [
  {
    title: 'Vivamus Eget Lorem a Dui',
    date: 'September 10, 2020',
    linkText: 'Download Brochure',
  },
  {
    title: 'Vivamus Eget Lorem a Dui',
    date: 'September 10, 2020',
    linkText: 'Download Case Study',
  },
  {
    title: 'Vivamus Eget Lorem a Dui',
    date: 'September 10, 2020',
    linkText: 'Download Whitepaper',
  },
];

const KnowledgeToolkitSection = () => {
  return (
    <section className="toolkit-section">
      <div className="wrap-page">
        <p className="toolkit-label">The Knowledge Hub</p>
        <h2 className="toolkit-heading">
          <span className="text-highlight">Your Valuation Toolkit:</span>
          <br />
          Knowledge Made Simple
        </h2>
        <p className="toolkit-subtext">
          Discover how we’ve helped businesses simplify valuation, make better decisions, and unlock growth opportunities.
        </p>

        <div className="toolkit-grid">
          {toolkitItems.map((item, index) => (
            <div className="toolkit-card" key={index}>
              <div className="card-content">
                <p className="toolkit-title">{item.title}</p>
                <p className="toolkit-date">{item.date}</p>
                <p className="toolkit-link">{item.linkText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeToolkitSection;
