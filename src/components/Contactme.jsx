import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contactme = () => {
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
      <div className='h-40  xl:h-72'></div>
      <div className=''></div>
      <div className="container">
      <h2 className="section-title">Contact</h2>
        
        <motion.div
        
          className="bg-white p-6 shadow-md rounded-full"
          initial={{ x: -50, opacity: 0 }}
          animate={controls}
        > 
          <p className="text-3xl font-semibold text-black">Click 'Gmail' to contact  me :</p>
          <a
            href="mailto:smartdhushyu@gmail.com"
            className="text-red-600 hover:text-green-600 text-2xl"
          >
             smartdhushyu@gmail.com
          </a>
        </motion.div>
      </div> 
      <div className="h-52 xl:h-60"></div>
    </section>
  );
};

export default Contactme;