import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Template = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setShowWelcome(true);
  }, []);

  return (
    <div id="hero">
      <section className="container">
        <h1 className="hero-title animate-slide-left">
          <center>
            <span className={showWelcome ? 'typewriter' : ''}>Welcome To My Website</span> <br /> I&apos;m <span className="text-color-main name pr-6">Dhushyandan</span>
            a Web <span className="text-color-main name">Developer.</span>
          </center>
        </h1>
        <p className="hero-cta">
          {/* Assuming you are using React Router */}
          <Link to="/Contact" className="cta-btn cta-btn--hero animate-slide-left">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 bg-red"></span>
            Get in touch
          </Link>
        </p>
        <br /><br /><br /><br /><br /><br /><br />
        <a href="#footer" className="scroll-down-link" aria-label="scroll-down">
          <div className="scroll-down"></div>
        </a>
      </section>
    </div>
  );
}

export default Template;
