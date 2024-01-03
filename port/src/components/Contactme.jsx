import React from 'react'

const Contactme = () => {
  return (
    <section id="contact">
    <div className="container ">
      <h2 className="section-title">Contact</h2>
      <div className="bg-white p-6  shadow-md rounded-full">
        <p className="text-3xl font-semibold text-black">Email me at:</p>
        <a href="mailto:yourname@gmail.com"
          className="text-blue-900 hover:text-red-600 text-2xl ">dhushyandan302002@gmail.com</a>
      </div>

    </div>
  </section>
  )
}

export default Contactme