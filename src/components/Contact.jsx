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
    
  return (
    <>
    <animated.div style={fadeProps}>
        <div id='iam' className="text-left bg-black text-white max-w-screen-xl mx-auto rounded-md p-6 shadow-md">
          <nav className="bg-gray-800 text-white p-4 w-full">
            <div className="container mx-auto">
              <a href="/" className="text-2xl font-bold">
                Get in Touch
              </a>
            </div>
          </nav>

          <animated.div style={slideProps} className="px-4 md:px-0">
            <div className="container mx-auto mt-8 w-full text-left">
              <section className="mb-8 w-full">
                <h2 className="text-3xl font-bold mb-4 text-green-700">Hello, I'm DHUSHYANDAN</h2>
                <p className="text-gray-300">
                  Welcome to my portfolio. I am a passionate Web Developer with expertise in HTML, CSS, Basic in Javascript, basics of python, basics of Java, basics of React, Bootstrap, and Tailwindcss.
                  Feel free to explore my work below.
                </p>
              </section>

              <section className="w-full">
                <h2 className="text-2xl font-bold mb-4 text-orange-700">Contact Me</h2>
                <p className="text-gray-300 mb-4">
                  Have a project in mind or just want to say hi? Feel free to get in touch!
                </p>

                {/* Contact Form */}
                <form action="#" method="post" className="max-w-1/2 w-full">
                  <div className="mb-4 w-full">
                    <label htmlFor="name" className="block text-gray-300 font-bold mb-2">
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
                    <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
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
                    <label htmlFor="message" className="block text-gray-300 font-bold mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Enter your message"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-black"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                  >
                    <Link to='/'>Send Message</Link>
                  </button>
                </form>
              </section>
            </div>
          </animated.div>

          <footer className="bg-gray-800 text-white p-4 mt-8 w-full">
            <div className="container mx-auto text-center">&copy; 2023 My Portfolio. All rights reserved.</div>
          </footer>
        </div>
      </animated.div>
    
    
    </>
  )
}

export default Contact