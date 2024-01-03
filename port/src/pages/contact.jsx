import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 max-w-screen-2xl mx-auto bg-white rounded-md p-6 shadow-md">

      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <a href="#" className="text-2xl font-bold">Get Contact with me</a>
        </div>
      </nav>

      <div className="container mx-auto mt-8">

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Hello, I'm DHUSHYANDAN</h2>
          <p className="text-gray-700">Welcome to my portfolio. I am a passionate Web Developer with expertise in HTML, CSS, Basic in Javascript, python, Java. Feel free to explore my work below.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-700 mb-4">Have a project in mind or just want to say hi? Feel free to get in touch!</p>

          {/* Contact Form */}
          <form action="index.html" method="get" className="max-w-1/2">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
              <input type="text" id="name" name="name" className="w-1/2 p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
              <input type="email" id="email" name="email" className="w-1/2 p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Your Message</label>
              <textarea id="message" name="message" rows="4" className="w-1/2 p-2 border border-gray-300 rounded" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
          </form>
        </section>

      </div>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          &copy; 2023 My Portfolio. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Contact;
