import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-brand">
        <a href="#home" className="footer-logo-link" aria-label="Back to home">
          <img
            className="footer-logo"
            src="/images/logo2.png"
            alt="Dr. Maya Reynolds, PsyD — Clinical Psychologist"
          />
        </a>

        <p className="footer-intro">
          You don’t have to carry everything alone. <br />
Find a space to slow down, feel supported, <br /> and make sense of what you’ve been carrying
        </p>
      </div>

      <div className="footer-columns">
        <nav className="footer-column" aria-label="Footer navigation">
          <h2>NAVIGATE</h2>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#specialties">Specialties</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-column">
          <h2>YOUR THERAPIST</h2>
          <a href="#about">Dr. Maya Reynolds, PsyD</a>
          <p>Licensed Clinical Psychologist</p>
        </div>

        <div className="footer-column footer-contact">
          <h2>CONTACT</h2>
          <address>
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
          </address>
          <p>In-person therapy in Santa Monica</p>
          <p>Secure telehealth throughout California</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;