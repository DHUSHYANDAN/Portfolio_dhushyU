import React, { useEffect } from 'react';
import profilePic from '../assets/dhushyandan.png';

const AboutMe = () => {
  useEffect(() => {
    const imageElement = document.getElementById("animated-image");

    // Options for the Intersection Observer
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    // Callback function for the Intersection Observer
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-image");
          observer.unobserve(entry.target);
        }
      });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Observe the target element
    observer.observe(imageElement);

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures that the effect runs once after initial render

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title text-3xl">About Me</h2>
        <div className="row about-wrapper">
          <div className="about-wrapper__image" id="animated-image">
            <img
              className="img-fluid w-1/2 transform translate-x-full opacity-0 transition-transform duration-1000"
              src={profilePic}
              alt="Profile Image"
              width="450"
              height="350"
            />
          </div>
          <div className="about-wrapper__info">
            <p className="about-wrapper__info-text" id="one">
              I'm Dhushyandan! I am an MCA student with a passion for software development. Born and raised in India.
              I am deeply curious about Fullstack development, and I love to learn new things. My approach to life is to be
              good, be smart, and I believe in myself to give my best.
              I enjoy playing games, learning new things, and I find inspiration in achieving people's success. I'm always up for
              upgrading my knowledge.
              We navigate the intricate tapestry of life together. I look forward to connecting, learning, and sharing
              experiences with you!
              <br /><br />
              I am passionate about technology, and my dedication to staying at the forefront of industry trends positions
              me as a forward-thinking professional.
            </p>
            <span className="about-wrapper__cta">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.naukri.com/mnjuser/homepage"
                className="cta-btn cta-btn--resume animate-bounce"
              >
                View Profile
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
