
import React from 'react';
import { Link } from 'react-router-dom';

const Template = () => {
  return (
    <div id="hero">
      <section className="container">
        <h1 className="hero-title animate-slide-left">
          Hi, my name is <span className="text-color-main name">Dhushyandan</span>
          <br />
          I'm the Web Developer.
        </h1>
        <p className="hero-cta">
          {/* Assuming you are using React Router */}
          <Link to="/Contact" className="cta-btn cta-btn--hero animate-slide-left">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 bg-red"></span>
            Get in touch
          </Link>
        </p>
      </section>
      <a href="#about" className="scroll-down-link" aria-label="scroll-down">
        <div className="scroll-down"></div>
      </a>
    </div>
  );
}

export default Template;
 