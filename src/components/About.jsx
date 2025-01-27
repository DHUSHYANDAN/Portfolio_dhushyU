import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import profilePic from '../assets/dhush2.png';
import backab from '../assets/backab.jpeg';
import dhush from "../assets/dhush.png";

function ProfileCard() {
  useEffect(() => {
    const sectionElement = document.getElementById("custom-animated-section");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sectionElement.classList.add("animate-section");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-sans antialiased leading-normal tracking-wider border bg-cover bg-center" style={{ backgroundImage: `url(${backab})` }}>
      <div className="w-5/6 flex items-center lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        {/* Main Col */}
        <div></div>
        <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* Image for mobile view */}
            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center mobile-profile-pic-container" style={{ backgroundImage: `url(${profilePic})` }}></div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">About Me</h1>

            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              <span className='text-xl'>I am a Junior Web developer</span>
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              <span className='font-bold'>Tamil Nadu - 631 502, INDIA.</span>
            </p>
            <p className="pt-8 text-lg lg:text-xl xl:text-xl text-left" id="one">
              I'm Dhushyandan! I am an MCA student with a passion for software development, born and raised in India.
              I am deeply curious about Fullstack development, and I love to learn new things. My approach to life is
              "Be Good, Be Smart," and I believe in giving my best. I enjoy playing games, learning new things, and I
              find inspiration in achieving people. I'm always up for upgrading my knowledge. We navigate the intricate
              tapestry of life together. I look forward to connecting, learning, and sharing experiences with you!
              <br /><br />
              I am passionate about Technology, and my dedication to staying at the forefront of industry trends
              positions me as a forward-thinking professional.
            </p><br />

            <div className="">
              <Link
                to="/download"
                className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                Download Resume
              </Link>
            </div>

            <div className="pt-12 pb-8"></div>
          </div>
        </div>

        {/* Img Col */}
        <div className="w-full lg:w-1/4 ml-8 opacity-75" id="custom-animated-section">
          {/* Big profile image for side bar (desktop) */}
          <img src={dhush} className="p-6 hidden lg:block ml-8 bg-white rounded animate-profile" alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
