import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const Contact = () => {
  const fadeProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideProps = useSpring({
    from: { transform: 'translateY(50px)' },
    to: { transform: 'translateY(0px)' },
    config: { duration: 800 },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch("https://formspree.io/f/xayrvpve", {
      method: 'POST',
      body: formData,
    }).then(response => {
      if (response.ok) {
        alert('Success');
      } else {
        alert('Error');
      }
    });

    // Reset form after submission
    event.target.reset();
  };

  return (
    <>
      <animated.div style={fadeProps}>
        <div id='iam' className="text-left bg-gray-900 text-black max-w-screen-xl mx-auto rounded-md p-6 shadow-md">
          <div className='bg-gray-200 opacity-90 border-4'>
            <nav className="bg-gray-800 text-white p-4 w-full">
              <div className="container mx-auto">
                <a href="/" className="text-xl font-semibold">
                  Get in Touch
                </a>
              </div>
            </nav>

            <animated.div style={slideProps} className="px-4 md:px-0">
              <div className="container mx-auto mt-8 w-full text-left">
                <section className="mb-8 w-full">
                  <h2 className="text-3xl font-semibold mb-4 text-green-700 ">Hello, I'm DHUSHYANDAN</h2>
                  <p className="text-gray-600 font-medium ">
                    Welcome to my portfolio. I am a passionate Web Developer with expertise in HTML, CSS, Basic in Javascript, basics of python, basics of Java, basics of React, Bootstrap, and Tailwindcss.
                    Feel free to explore my work below.
                  </p>
                </section>

                <section className="w-full">
                  <h2 className="text-3xl font-semibold mb-4 text-orange-700">Contact Me</h2>
                  <p className="text-gray-600 mb-4">
                    Have a project in mind or just want to say hi? Feel free to get in touch!
                  </p>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} action='/' className="max-w-1/2 w-full">
                    <div className="mb-4 w-full">
                      <label htmlFor="name" className="text-2xl block text-gray-600 font-semibold mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-black"
                        required
                      />
                    </div>
                    <div className="mb-4 w-full">
                      <label htmlFor="email" className="block text-gray-600 font-semibold mb-2 text-2xl">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-black"
                        required
                      />
                    </div>
                    <div className="mb-4 w-full">
                      <label htmlFor="message" className="block text-gray-600 font-semibold text-2xl mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Enter your message"
                        className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-black"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-green-500 text-black hover:text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                    >
                       <b>Send Message</b>
                    </button>
                  </form>
                </section>
              </div>
            </animated.div>

            <footer className="bg-gray-800 text-white p-4 mt-8 w-full">
              <div className="container mx-auto text-center">&copy; 2023 My Portfolio. All rights reserved.</div>
            </footer>
          </div>
        </div>
      </animated.div>
    </>
  )
}

export default Contact;
