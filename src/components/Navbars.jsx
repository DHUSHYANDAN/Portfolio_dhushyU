import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Navbars = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase the loading indicator
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay time as needed

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 
  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-30 flex items-center justify-center text-2xl font-semibold text-white bg-gray-500 bg-opacity-50">
          Loading.....
        </div>
      )}
      {/* Navbar for desktop */}
      <nav id="lapview" className="hidden sm:flex z-10 sticky top-0 justify-between border-4 rounded-r-lg  transition duration-500 bg-black ease-in-out  p-2 text-white h-36">
        <Link to="/">
          <img
            className="bg-purple-900 rounded-lg p-1 mt-2 ml-2 "
            src={logo}
            alt="Profile Image"
            width="120"
            height=""
          />
        </Link>
        <div className="px-4 py-8 ">
          <ul id='myDIV' className="flex px-4 space-x-24">
            <li>
              <NavLink to="/" className="sh btn text-white shadow hover:bg-purple-100 hover:text-purple-800 font-bold  rounded-md px-2 py-1" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="sh btn text-white shadow hover:bg-purple-100 hover:text-purple-800 font-bold  rounded-md px-2 py-1" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="sh btn text-white shadow hover:bg-purple-100 hover:text-purple-800 font-bold rounded-md px-2 py-1" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactme" className="sh btn text-white shadow hover:bg-purple-100 hover:text-purple-800 font-bold   rounded-md px-2 py-1" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Navbar for mobile */}
      <nav className="sm:hidden z-10 sticky top-0 flex justify-between items-center bg-black border-4 rounded-r-lg  transition duration-500 bg-black ease-in-out h-36 p-4">
        <Link to="/">
          <img
            className="bg-purple-900 rounded-lg p-1"
            src={logo}
            alt="Profile Image"
            width="120"
          />
        </Link>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
        
        <svg xmlns="http://www.w3.org/2000/svg" id="nav" className="h-10 w-10 hover:text-gray-200 flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4  12h16M4 18h16" />
  </svg>
        </button>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div onClick={toggleSidebar} className="sm:hidden fixed inset-0 flex items-center text-white bg-gray-900 bg-opacity-50 z-20   ">
          <div onClick={(e) => e.stopPropagation()} className="h-full  flex flex-col items w-96 text-white  border-4 rounded-r-lg hover:border-gray-600 transition duration-500  ease-in-out sho bg-gray-100  p-2  mt-5 ml-2 mb-2">
            <div className="bg-sky-800 rounded-r-lg  flex justify-between p-3">
            <img
              className="flex "
              src={logo}
              alt="Profile Image"
              width="80"
              height="0"
            />
              <button onClick={toggleSidebar} className="text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414L11.414 11l2.293 2.293a1 1 0 01-1.414 1.414L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 11 6.293 8.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <ul id='myDIV' className="md:flex p-4  h-full ">
            <li>
              <NavLink to="/" className="btn flex hover:text-white mar hover:border-blue-600 text-indigo-700 hover:bg-blue-600 bor  p-1  rounded-md font-bold  justify-center mt-6 " activeClassName="active">
                <div className="flex">
                  <svg
                    className="flex m-1   pr-6 pl-3"
                    width="40"
                    height="22"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <rect x="10" y="12" width="4" height="4" />
                  </svg>
                  <span className="m-1 mr-6 ">Home</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="btn flex hover:text-white mar  text-indigo-700 hover:bg-blue-600 bor hover:border-blue-600  p-2  rounded-md font-bold  justify-center mt-6"
                activeClassName="active"
              >
                <div className="flex">
                  <svg
                    className="flex m-1   pr-6 pl-3    "
                    width="40"
                    height="22"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="m-1 mr-6 ">About </span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="btn flex hover:text-white mar  text-indigo-700 hover:bg-blue-600 bor hover:border-blue-600 p-2  rounded-md font-bold  justify-center mt-6"
                activeClassName="active"
              >
                <div className="flex">
                  <svg
                    className="flex m-1   pr- pl-3  "
                    width="40"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                  <span className="m-1 mr-6 ">  Projects</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactme"
                className="btn flex hover:text-white mar  text-indigo-700 hover:bg-blue-600 bor hover:border-blue-600 p-1  rounded-md font-bold  justify-center mt-6"
                activeClassName="active"
              >
                <div className="flex">
                  <svg
                    className="flex m-1   pr- pl-3"
                    width="40"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="m-1 mr-6 ">Contact</span>
                </div>
              </NavLink>
            </li>
          </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbars;
