import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
const Mobileview = () => {

    const smoothCloseAndRedirect = () => {
        // Smoothly close the current page from the left side
        document.body.style.transition = 'transform 0.3s ease';
        document.body.style.transform = 'translateX(-100%)';
    
        // Redirect to the page with id "lapview" after a slight delay
        setTimeout(function() {
          window.location.href = '';
        }, 500); // 500 milliseconds, same as the transition duration
      };
  return (
    <>
    
    
    <div id="mobileview" className="inset-0 fixed z-40 flex items-center text-white bg-gray-900 bg-opacity-50">
        <div className="inset-0 fixed z-50 flex flex-col items w-2/5 text-white bg-gray-50">
          <div className="bg-sky-800 flex justify-between p-3">
            <img
              className="flex"
              src={logo}
              alt="Profile Image"
              width="80"
              height="0"
            />
            <a className="navbar-burger self-center flex" href="/" onClick={smoothCloseAndRedirect}>
  <svg xmlns="http://www.w3.org/2000/svg" id="nav" className="h-6 w-6 hover:text-gray-200 flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4  12h16M4 18h16" />
  </svg>
</a>

          </div>
          <ul className="md:flex p-4">
            <li>
              <Link to="/" onClick={smoothCloseAndRedirect} className="flex hover:text-white mar  text-indigo-700 hover:bg-blue-600   p-1 flex rounded-md font-bold  justify-center mt-4 ">
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
              </Link>
            </li>
            <li>
              <Link
                to="/about" onClick={smoothCloseAndRedirect}
                className="flex hover:text-white mar  text-indigo-700 hover:bg-blue-600   p-1 flex rounded-md font-bold  justify-center mt-4"
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
              </Link>
            </li>
            <li>
              <Link
                to="/projects" onClick={smoothCloseAndRedirect}
                className="flex hover:text-white mar  text-indigo-700 hover:bg-blue-600   p-1 flex rounded-md font-bold  justify-center mt-4"
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
              </Link>
            </li>
            <li>
              <Link
                to="/contactme" onClick={smoothCloseAndRedirect}
                className="flex hover:text-white mar  text-indigo-700 hover:bg-blue-600   p-1 flex rounded-md font-bold  justify-center mt-4"
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
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default Mobileview