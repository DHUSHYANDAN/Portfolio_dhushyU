import React, { useState } from "react";
import { useSpring, animated } from "react-spring";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const fadeProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideProps = useSpring({
    from: { transform: "translateY(90px)" },
    to: { transform: "translateY(0px)" },
    config: { duration: 900 },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send the message.");
      }
    } catch (error) {
      setStatus("Error: Could not send the message.");
    }
  };

  return (
    <animated.div
      style={fadeProps}
      className="p-8 min-h-screen bg-gray-500 flex items-center justify-center sm:p-4"
    >
      <animated.div
        style={slideProps}
        className="md:max-w-5xl xl:p-10 lg:max-w-7xl w-full bg-gray-800 rounded-2xl shadow-xl border border-gray-700"
      >
        <div className="p-6">
          {/* Header */}
          <h2 className="text-center text-3xl font-bold text-green-400 mb-6">
            Make in Touch With Me
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Feel free to reach out to me! Fill out the form below and I’ll get
            back to you soon.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-green-500 text-xl font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-green-500 text-xl font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-green-500 text-xl font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-gray-100 py-3 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-center text-green-400 font-medium">
              {status}
            </p>
          )}
        </div>

       
          <div className="p-6 border-t text-left border-gray-700">
            {/* Phone Section */}
          <h3 className="text-xl font-bold text-green-400 mb-4">Call Me</h3>
          <a
            href="tel:+916385500837"
            className="text-lg text-green-500 hover:underline "
          >
            <span className="text-3xl">📞</span> <span className="text-xl">+91 6385500837</span>
          </a>
          </div>

          {/* Social Media Section */}
        <div className="p-6 border-t text-left border-gray-700">
          <h3 className="text-xl font-bold text-green-400 mb-4">
            Follow Me on Social Media
          </h3>
          <div className="flex space-x-8  text-2xl">
            <a
              href="https://www.linkedin.com/in/dhushyandan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400  hover:text-blue-600"
            >
              <i className="fab fa-linkedin text-5xl"></i>
            </a>
             

            <a
              href="https://www.instagram.com/d_h_u_s_h_yu/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
             <i className="fab fa-instagram text-5xl"></i>
            </a>
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Contact;
