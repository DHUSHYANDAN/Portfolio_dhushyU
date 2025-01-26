import React from "react";
import { Link } from "react-router-dom";
import conavatar from '../assets/dhush2.png';
import Nakuri from '../assets/favicon.ico';
import backad from '../assets/tree.jpg';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white w-full shadow-md rounded-2xl">
        <div className="flex flex-col md:flex-row items-center">
        {/* Left Section: Avatar Image */}
          <div className="w-full md:w-3/6 flex justify-center bg-gray-200 p-2 ml-2 rounded-2xl relative">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 rounded-2xl"
              style={{ backgroundImage: `url(${backad})` }}
            ></div>
            <img
              src={conavatar}
              height={300}
              alt="Contact Avatar"
              className="relative rounded-full w-72 h-72 md:w-[60vh] md:h-[60vh] object-cover "
            />
          </div>

          {/* Right Section: Contact Details */}
          <div className=" sm:w-1/2 w-5/6 p-6 text-left ">
            <h1 className="text-3xl md:text-5xl font-bold mb-7">Contact Me</h1>
            <p className="text-xl mb-6 ">
              Do you speak Tamil? It's ok if you don't; I speak English too.
            </p><br />

            <div className="space-y-4  ">

              <a
                href="https://www.linkedin.com/in/dhushyandan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-600"
              >
                <i className="fab fa-linkedin text-2xl"></i>
                <span>Connect with me on LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/d_h_u_s_h_yu/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-pink-500 hover:text-pink-700"
              >
                <i className="fab fa-instagram text-2xl"></i>
                <span>Follow me on Instagram</span>
              </a>

              

              <a
                href="https://www.naukri.com/mnjuser/profile?id=&altresid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-700"
              >
                <img src={Nakuri} alt="Naukri Icon" className="h-7" />
                <span>View my Naukri Profile</span>
              </a>

              <a
                href="https://github.com/dhushyandan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-800 hover:text-gray-900"
              >
                <i className="fab fa-github text-2xl"></i>
                <span>Check out my GitHub</span>
              </a>
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
  );
};

export default ContactPage;
