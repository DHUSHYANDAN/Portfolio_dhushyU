import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Template = () => {
  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');
  const textPart1 = "Hi, my name is Dhushyandan.";
  const textPart2 = "I'm a Web Developer.";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < textPart1.length) {
      const interval = setInterval(() => {
        setTypedText1((prevText) => prevText + textPart1[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 150); // Adjust typing speed here

      return () => clearInterval(interval);
    }
  }, [currentIndex, textPart1.length]); // Include currentIndex and textPart1.length in the dependency array

  useEffect(() => {
    if (currentIndex >= textPart1.length && currentIndex < textPart1.length + textPart2.length) {
      const interval = setInterval(() => {
        setTypedText2((prevText) => prevText + textPart2[currentIndex - textPart1.length]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 150); // Adjust typing speed here

      return () => clearInterval(interval);
    }
  }, [currentIndex, textPart1.length, textPart2.length]); // Include currentIndex, textPart1.length, and textPart2.length in the dependency array

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if (currentIndex >= textPart1.length + textPart2.length) {
        setShowCursor(false); // Hide cursor if typing is completed
      } else {
        setShowCursor((prevShow) => !prevShow); // Toggle cursor visibility
      }
    }, 500); // Adjust blinking speed here

    return () => clearInterval(cursorInterval);
  }, [currentIndex, textPart1.length, textPart2.length]); // Include currentIndex, textPart1.length, and textPart2.length in the dependency array

  return (
    <>
      <div id="hero" >
        <div>
          <section className="container">
            <h1 className="hero-title animate-slide-left font-mono  font-bold text-gray-900 ">{typedText1}{typedText1.length < textPart1.length ? '|' : ''}<br/>{typedText2}{typedText2.length < textPart2.length ? '|' : ''}</h1>
            <p className="hero-cta">
             
              <Link to="/contact" className="cta-btn cta-btn--hero animate-slide-left">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 bg-red"></span>
                Get in touch
              </Link>
            </p>
            <br /><br /><br /><br /><br /><br /><br />
            <a href="#footer" className="scroll-down-link" aria-label="scroll-down">
              <div className="scroll-down"></div>
            </a>
          </section>
        </div>
      </div>
    </>
  );
}

export default Template;
