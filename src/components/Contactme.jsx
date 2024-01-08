import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 3 } // Adjust the duration as needed
      });
    }
  }, [controls, inView]);

  return (
    <section id="contact" ref={ref}>
      <div className="container">
      <h2 className="section-title">Contact</h2>
        
        <motion.div
        
          className="bg-white p-6 shadow-md rounded-full"
          initial={{ x: -50, opacity: 0 }}
          animate={controls}
        > 
          <p className="text-3xl font-semibold text-black">Email me at:</p>
          <a
            href="mailto:yourname@gmail.com"
            className="text-blue-900 hover:text-red-600 text-2xl"
          >
            dhushyandan302002@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;