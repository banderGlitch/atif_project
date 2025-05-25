import '../static/styles/ComponentCss/Feature_7Styles.scss';
import User1 from '../static/images/coroselImage/user1.png';
import User2 from '../static/images/coroselImage/user1.png';
import User3 from '../static/images/coroselImage/user1.png';

const testimonials = [
  {
    quote: "Who can receive the hypnosis and shame of a yogi if he has the fraternal afterlife of the sun.",
    name: "Larry Page",
    position: "Founder at Google",
    image: User1,
  },
  {
    quote: "Who can receive the hypnosis and shame of a yogi if he has the fraternal afterlife of the sun.",
    name: "Larry Page",
    position: "Founder at Google",
    image: User2,
  },
  {
    quote: "Who can receive the hypnosis and shame of a yogi if he has the fraternal afterlife of the sun.",
    name: "Larry Page",
    position: "Founder at Google",
    image: User3,
  },
];

function ClientTestimonials() {
  return (
    <section className="testimonial-section">
      <div className="wrap-page">
        <p className="testimonial-label">The Knowledge Hub</p>
        <h2 className="testimonial-heading">
          Discover What Our Satisfied Clients <br />
          Have to Say
        </h2>
        <p className="testimonial-subtext">
          Discover how we’ve helped businesses simplify valuation, make better decisions, and unlock growth opportunities.
        </p>

        <div className="testimonial-cards">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-icon">❝</div>
              <img src={item.image} alt={item.name} className="avatar" />
              <p className="quote">{item.quote}</p>
              <p className="author-name">{item.name}</p>
              <p className="author-position">{item.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientTestimonials;
