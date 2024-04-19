import React, { useEffect } from 'react';
import profilePic from '../assets/dhushyandan.webp';

const About = () => {
  useEffect(() => {
    const imageElement = document.getElementById("animated-image");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          imageElement.classList.add("animate-image");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(imageElement);

    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <section id="about" className='bg-sky-400'>
      <div className="container">
        <h2 className="section-title text-3xl">About Me</h2>
        <div className="row about-wrapper">
          <div className="" id="animated-image">
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
              I'm Dhushyandan! I am an MCA student with a passion for software development, born and raised in India.
              I am deeply curious about Fullstack development, and I love to learn new things. My approach to life is
              "Be Good, Be Smart," and I believe in giving my best. I enjoy playing games, learning new things, and I
              find inspiration in achieving people. I'm always up for upgrading my knowledge. We navigate the intricate
              tapestry of life together. I look forward to connecting, learning, and sharing experiences with you!

              <br /><br />
              I am passionate about Technology, and my dedication to staying at the forefront of industry trends
              positions me as a forward-thinking professional.
            </p>
            {/* Removed unused code */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
