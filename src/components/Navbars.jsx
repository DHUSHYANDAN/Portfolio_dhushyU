import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Navbars = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase the loading indicator
    const timer = setTimeout(() => {
      setLoading(false);
    }, 50); // Adjust the delay time as needed

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-30 flex items-center justify-center text-2xl font-semibold text-white bg-gray-500 bg-opacity-50">
          Loading.....
        </div>
      )}
      {/* Navbar */}
      <nav id="lapview" className="z-10 sticky top-0 flex justify-between border rounded-r-lg border-gray-300 transition duration-500 ease-in-out hover:border-sky-500 p-4 bg-gray-800 text-white p-3">
        <img
          className=""
          src={logo}
          alt="Profile Image"
          width="80"
          height="0"
        />
        <div className="px-4 py-6 flex justify-end w-full">
          {/* Nav Links */}
          <ul className="hidden sm:flex px-4 space-x-12">
            <li>
              <Link to="/" className="text-white hover:bg-gray-400 font-bold hover:text-black px-3 py-3 rounded-md">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black text-white hover:bg-gray-400 px-3 py-3 rounded-md font-bold">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-black text-white hover:bg-gray-400 px-3 py-3 rounded-md font-bold">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contactme" className="hover:text-black text-white hover:bg-gray-400 px-3 py-3 rounded-md font-bold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Header Icons */}
        <a className="navbar-burger self-center mr-12" href="/navigation">
          <svg xmlns="http://www.w3.org/2000/svg" id="nav" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4  12h16M4 18h16" />
          </svg>
        </a>
      </nav>

    </>
  );
};

export default Navbars;
