import { useState } from 'react';

const UploadPage = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return alert("Please select a file!");

        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData
        });

        const data = await res.json();
        setMessage(data.message);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-500">
            <div className="p-10 w-full max-w-2xl bg-white shadow-lg rounded-2xl">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Upload Your Resume</h2>
                
                <input 
                    type="file" 
                    accept="application/pdf" 
                    onChange={(e) => setFile(e.target.files[0])} 
                    className="block w-full py-10 border border-gray-300 rounded-lg text-gray-700"
                />
                
                <button 
                    onClick={handleUpload} 
                    className="mt-4 w-full py-8 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 text-5xl transition">
                    Upload
                </button>
                
                {message && <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>}
            </div>
        </div>
    );
};

export default UploadPage;
