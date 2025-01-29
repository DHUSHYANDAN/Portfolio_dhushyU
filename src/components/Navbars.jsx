import  { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Navbars = () => {
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowStatus(true);
      setTimeout(() => setShowStatus(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowStatus(true);
      setTimeout(() => setShowStatus(false), 5000); 
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

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

      {/* Online/Offline Notification */}
      {showStatus && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-lg text-white text-lg font-semibold transition-all duration-500 ${
            isOnline ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {isOnline ? 'You are back online! ✅' : 'You are offline! ❌'}
        </div>
      )}

      {/* Navbar for desktop */}
      <nav id="lapview" className="hidden sm:flex z-10 sticky top-0 justify-between border-4 rounded-r-lg transition duration-500 bg-black ease-in-out p-2 text-white h-36">
        <Link to="/">
          <img className="bg-purple-900 rounded-lg p-1 mt-2 ml-2" src={logo} alt="Profile Image" width="120" />
        </Link>
        <div className="px-4 py-8">
          <ul id="myDIV" className="flex px-4 space-x-24">
            <li>
              <NavLink to="/" className="sh btn text-white shadow hover:bg-purple-100 hover:text-purple-800 font-bold rounded-md px-2 py-1" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="sh btn text-white shadow hover:bg-purple-100 hover:text-purple-800 font-bold rounded-md px-2 py-1" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="sh btn text-white shadow hover:bg-purple-100 hover:text-purple-800 font-bold rounded-md px-2 py-1" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactme" className="sh btn text-white shadow hover:bg-purple-100 hover:text-purple-800 font-bold rounded-md px-2 py-1" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Navbar for mobile */}
      <nav className="sm:hidden z-10 sticky top-0 flex justify-between items-center bg-black border-4 rounded-r-lg transition duration-500 bg-black ease-in-out h-36 p-4">
        <Link to="/">
          <img className="bg-purple-900 rounded-lg p-1" src={logo} alt="Profile Image" width="120" />
        </Link>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" id="nav" className="h-10 w-10 hover:text-gray-200 flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div onClick={toggleSidebar} className="sm:hidden fixed inset-0 flex items-center text-white bg-gray-900 bg-opacity-50 z-20">
          <div onClick={(e) => e.stopPropagation()} className="h-full flex flex-col items w-96 text-white border-4 rounded-r-lg hover:border-gray-600 transition duration-500 ease-in-out sho bg-gray-100 p-2 mt-5 ml-2 mb-2">
            <div className="bg-sky-800 rounded-r-lg flex justify-between p-3">
              <img className="flex" src={logo} alt="Profile Image" width="80" />
              <button onClick={toggleSidebar} className="text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414L11.414 11l2.293 2.293a1 1 0 01-1.414 1.414L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 11 6.293 8.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <ul id="myDIV" className="md:flex p-4 h-full">
              <li>
                <NavLink to="/" className="btn flex text-indigo-700 hover:bg-blue-600 hover:text-white p-1 rounded-md font-bold justify-center mt-6" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="btn flex text-indigo-700 hover:bg-blue-600 hover:text-white p-1 rounded-md font-bold justify-center mt-6" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="btn flex text-indigo-700 hover:bg-blue-600 hover:text-white p-1 rounded-md font-bold justify-center mt-6" activeClassName="active">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactme" className="btn flex text-indigo-700 hover:bg-blue-600 hover:text-white p-1 rounded-md font-bold justify-center mt-6" activeClassName="active">
                  Contact
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
