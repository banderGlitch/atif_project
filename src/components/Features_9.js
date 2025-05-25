import React from 'react';
import '../static/styles/ComponentCss/Feature_9Styles.scss';

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <p className="contact-label">Contact Us</p>
        <h2 className="contact-heading">Need Help?</h2>
        <h3 className="contact-subheading">Let’s Simplify Your Valuation Journey</h3>
        <p className="contact-desc">
          Reach out to our team for questions, support, or to get started—we’re here to help.
        </p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <input type="text" placeholder="Website" className="form-input" />
          </div>
          <textarea placeholder="Message" className="form-textarea"></textarea>
          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;