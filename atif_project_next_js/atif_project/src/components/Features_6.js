import React from 'react';
import '../static/styles/ComponentCss/Feature_6Styles.scss';
import ArrowIcon from '../static/images/svg/arrowIcon';

const blogPosts = [
  {
    title: 'How to make a website look more attractive with illustrations',
    summary: 'Runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
    date: '23 September 2025',
    image: true,
  },
  {
    title: '8 Rules of Thumb in UI Design',
    summary: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    date: '23 September 2025',
    image: true,
  },
  {
    title: 'How to build strong portfolio and get a Job in UI/UX',
    summary: 'Foster collaborative thinking to further the overall value proposition.',
    date: '23 September 2025',
    image: true,
  },
];

function KnowledgeHubSection() {
  return (
    <section className="knowledge-section">
      <div className="wrap-page">
        <p className="knowledge-label">The Knowledge Hub</p>
        <h2 className="knowledge-heading">
          Business Valuation Guides & <br /> Growth Strategies
        </h2>
        <p className="knowledge-subtext">
          Explore the latest trends, tips, and expert advice on business valuation, growth strategies, and more.
        </p>

        <div className="blog-grid">
          {blogPosts.map((post, idx) => (
            <div className={`blog-card ${idx === 0 ? 'large' : ''}`} key={idx}>
              <div className="blog-thumbnail" />
              <div className="blog-content">
                <h5 className="blog-title">{post.title}</h5>
                <p className="blog-summary">{post.summary}</p>
                <p className="blog-date">{post.date}</p>
                <button className="blog-link">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KnowledgeHubSection;
