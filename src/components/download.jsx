import React from 'react';

const ViewPage = () => {
  return (
    <div className="p-6 max-w-8xl mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-2xl p-2 shadow-slate-400 shadow-lg font-bold text-blue-500 mb-4">View & Download Resume</h2>
      
      {/* Show PDF in an iframe */}
      <iframe 
        src="http://localhost:5000/Dhushyu_resume" 
        width="100%" 
        height="500px"
        className="no-scrollbar"
       
        title="Resume Preview"
      ></iframe>
      
  
    </div>
  );
};

export default ViewPage;
