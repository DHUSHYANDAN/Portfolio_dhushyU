import { Link } from 'react-router-dom';

const Template = () => {
  return (

    <>
    
    <div id="hero">
     
      <div >
        <section className="container">
          <h1 className="hero-title animate-slide-left">
            Hi, my name is <span className="text-color-main name">Dhushyandan</span>
            <br />
            I&apos;m the Web Developer.
          </h1>
          <p className="hero-cta">
            {/* Assuming you are using React Router */}
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
