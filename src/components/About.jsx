import { motion } from "framer-motion";
import Dhush from '../assets/dhush2-removebg.png'
import {FaDownload} from 'react-icons/fa'

export default function About() {
  return (
    <div id="about" className="w-full  bg-gradient-to-b from-blue-100 to-[#56CAF1] min-h-[100vh]">
      {/* Top Section */}
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 "><button className="p-2 shadow-slate-400 shadow-lg">🎊 About Me</button></h1>
      </div>
      
      
      {/* Main About Section */}
      <div className="bg-slate-200 text-white px-6 py-16 md:flex md:items-center md:justify-center md:gap-12 rounded-xl shadow-lg mx-6">
          {/* 3D Animated Image */}
          <motion.div 
          className="md:w-1/3 flex justify-evenly mt-8 md:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ rotate: 5, scale: 1.05 }}
        >
          <img 
            src={Dhush}
            alt="Profile Picture" 
            className="w-66 h-72 rounded-full border-4 border-white shadow-2xl"
          />
        </motion.div>
        <div className="md:w-1/2 text-left">
          <h2 className="text-5xl text-center mt-4 font-extrabold text-blue-700">Hi, I'm Dhushyandan</h2>
          <h3 className="text-2xl font-semibold text-black text-center mt-3">Creative Technologist & Junior Web Developer</h3>
          <p className="mt-6 text-gray-900 leading-relaxed">
            Passionate about software development, I am an MCA student from India.
            I thrive on learning and evolving in full-stack development.
            My motto? <span className="text-red-400 font-bold">"Be Good, Be Smart"</span>.
            Let’s build and innovate together.
          </p>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 flex items-center  bg-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition shadow-md"
          >
    <FaDownload className="mr-2" />
            Download Resume
          </motion.button>
        </div>
        
      
      </div>
    </div>
  );
}