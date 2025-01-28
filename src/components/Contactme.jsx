import React from "react";
import { Link } from "react-router-dom";
import conavatar from '../assets/dhush2.png';

import backad from '../assets/tree.jpg';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactPage = () => {
 
   const controls = useAnimation();
    const [ref, inView] = useInView();
  
    React.useEffect(() => {
      if (inView) {
      controls.start({
        x: 0, 
        opacity: 1,
        transition: { duration: 2 } 
      });
      }
    }, [controls, inView]);

  return (
    <section id="contact" ref={ref}>
      <div className="flex flex-col shadow-md m-2 rounded-2xl items-center bg-gradient-to-b md:bg-gradient-to-r from-[#5ecdf3a9] to-blue-50 bg-blue-100 justify-center p-6">
        <div className="bg-white w-full">
          <div className="flex flex-col md:flex-row items-center bg-gradient-to-b md:bg-gradient-to-r from-[#5ecdf3a9] to-blue-50/">
            {/* Left Section: Avatar Image */}
            <div className="w-full md:w-3/6 flex justify-center bg-gray-200 p-2 ml-2 mr-2 rounded-2xl relative">
              <div
                className="absolute inset-0 bg-cover bg-center m-1 opacity-80 rounded-2xl"
                style={{ backgroundImage: `url(${backad})` }}
              ></div>
              <motion.img
                src={conavatar}
                height={300}
                alt="Contact Avatar"
                className="relative rounded-full w-72 h-72 md:w-[60vh] md:h-[60vh] object-cover"
                animate={controls}  // Apply animation controls here
                initial={{ x: -300, opacity: 0 }}  // Set initial position off-screen
              />
            </div>

            {/* Right Section: Contact Details */}
            <div className="sm:w-1/2 w-5/6 p-6 text-left">
              <h1 className="text-3xl md:text-5xl text-blue-600 font-bold mb-7">Contact Me</h1>
              <p className="text-xl mb-6 text-blue-900">
                Do you speak Tamil? It's ok if you don't; I speak English too.
              </p><br />
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/dhushyandan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
                >
                  <i className="fab fa-linkedin text-4xl sm385:text-3xl"></i>
                  <span><b> Connect with me on LinkedIn</b></span>
                </a>

                <a
                  href="https://www.instagram.com/d_h_u_s_h_yu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-pink-500 hover:text-pink-600"
                >
                  <i className="fab fa-instagram text-4xl sm385:text-3xl"></i>
                  <span> <b>Follow me on Instagram</b></span>
                </a>

                <a
                  href="mailto:smartdhushyu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 text-2xl"
                >
                  <i className="far fa-envelope text-4xl sm385:text-3xl hover:text-blue-500"></i>
                  <span  className="sm385:hidden"><b> dhushyandan302002@ gmail.com</b></span>
                  <span className="hidden sm385:inline"> <b>dhushyandan302002@gmail.com</b></span>
                </a>

                <a
                  href="https://github.com/dhushyandan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-800 hover:text-gray-900"
                >
                  <i className="fab fa-github text-4xl sm385:text-3xl"></i>
                  <span> Check out my GitHub</span>
                </a>
                <a className="flex items-center space-x-2 text-gray-800 hover:text-gray-900">
                  <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                  <svg className="h-8 sm385:h-6  fill-current text-green-700 pr-2 pl-1 sm385:pr-2 sm385:pl-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              <span className='font-bold text-lg sm:text-lg md:text-xl'>Tamil Nadu - 631 502, INDIA.</span>
            </p></a>
              </div>
                      

              <div className="mt-8">
                <Link
                  to="/Contact"
                  className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
