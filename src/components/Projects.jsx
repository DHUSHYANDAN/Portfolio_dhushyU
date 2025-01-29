import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Biodata from "../assets/biodata.webp";
import ParallaxVid from '../assets/parallex.webm';
import NetflixVid from '../assets/Netflix.webm';
import Admform from '../assets/admform.webm';
import Crudapp from '../assets/crud.webm';

const Projects = () => {
  useEffect(() => {
    const sectionElement = document.getElementById("custom-animated-section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sectionElement.classList.add("animate-section");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    className: " rounded-lg"
  };

  return (
    <section id="projects">
      <div className="container ">
        <div className="project-wrapper ">
          <h2 className="section-title dark-blue-text">Projects</h2>
          <Slider {...settings}>
            {/* Project 1 */}
            <div className="row ">
              <div className="project-wrapper__text p-8  ">
                <h3 className="project-wrapper__text-title">Biographical Data Form Validation</h3>
                <p className="project-wrapper__text-info " id="two ">
                  Developed a comprehensive form validation script in JavaScript for biographical data. This project involved creating a web form that collects various personal details and ensuring all input fields meet specified validation criteria before submission.
                </p>
                <div className="project-wrapper__text-btns flex sm1:space-x-4 space-y-4 sm2:space-y-0  ">
                  <a
                    href="https://github.com/DHUSHYANDAN/BioDATA.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main  cta-btn--hero cta-btn--projects"
                  >
                    Source Code
                  </a>
                  <a
                    href="https://dhushyandan.github.io/BioDATA/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main   cta-btn--hero cta-btn--projects"
                  >
                    Live Now!
                  </a>
                </div>
                <br /><br />
              </div>
              <div className="project-wrapper__image  ">
                <a href="https://dhushyandan.github.io/BioDATA/" target="_blank" rel="noopener noreferrer">
                  <div className="thumbnail rounded flex justify-center bg-gray-300 " id="custom-animated-section">
                    <img src={Biodata} className=" transform  transition-transform duration-1000" alt="Project Image" />
                  </div>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="row">
              <div className="project-wrapper__text p-8">
                <h3 className="project-wrapper__text-title">Parallax Website</h3>
                <p className="project-wrapper__text-info" id="three">
                  Created a basic website featuring a parallax effect. A typical website with a parallax effect is one in which the background of the website moves slower than the elements in the foreground. The visual effect we&apos;re able to achieve gives the impression of movement and depth as if there is space between the foreground and background.
                </p>
                <div className="project-wrapper__text-btns flex sm1:space-x-4 space-y-4 sm2:space-y-0  ">
                  <a
                    href="https://github.com/DHUSHYANDAN/parallax.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main  cta-btn--hero cta-btn--projects"
                  >
                    Source Code
                  </a>
                  <a
                    href="https://dhushyandan.github.io/parallax/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main   cta-btn--hero cta-btn--projects"
                  >
                    Live Now!
                  </a>
                </div>
              </div><br /><br />
              <div className="project-wrapper__image">
                <a href="https://dhushyandan.github.io/parallax/" target="_blank" rel="noopener noreferrer">
                  <div className="thumbnail rounded">
                    <video width="100%" autoPlay preload='auto' muted loop className="img-fluid">
                      <source src={ParallaxVid} />
                      <source src={ParallaxVid} type="video/ogg" />
                    </video>
                  </div>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="row">
              <div className="project-wrapper__text p-8">
                <h3 className="project-wrapper__text-title">Netflix Clone Project</h3>
                <p className="project-wrapper__text-info" id="four">
                  This project is a standard website featuring a home page and a sign-in page, similar to the layout of the Netflix website. It comprises four pages in total. The website is built using HTML and CSS.
                </p>
                <div className="project-wrapper__text-btns flex sm1:space-x-4 space-y-4 sm2:space-y-0  ">
                  <a
                    href="https://github.com/DHUSHYANDAN/Netflix_model_project.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main  cta-btn--hero cta-btn--projects"
                  >
                    Source Code
                  </a>
                  <a
                    href="https://dhushyandan.github.io/Netflix_model_project/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main   cta-btn--hero cta-btn--projects"
                  >
                    Live Now!
                  </a>
                </div>

              </div><br /><br />
              <div className="project-wrapper__image  ">
                <a href=" https://dhushyandan.github.io/Netflix_model_project/" target="_blank" rel="noopener noreferrer">
                  <div className="thumbnail rounded">
                    <video width="100%" autoPlay preload='auto' muted loop className="img-fluid ">
                      <source src={NetflixVid} type="video/mp4" />
                      <source src={NetflixVid} type="video/ogg" />
                    </video>
                  </div>
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="row">
              <div className="project-wrapper__text p-8">
                <h3 className="project-wrapper__text-title">My Campus Hub</h3>
                <p className="project-wrapper__text-info" id="four">
                This project provides an overview of my college's Campus where users need to log in to access the admission form. It utilizes JWT tokens for authentication and protected routes. The project integrates Express.js, Node.js, MongoDB, and EJS for views, encompassing a complete frontend, backend, and database solution.
                </p>
                <div className="project-wrapper__text-btns flex sm1:space-x-4 space-y-4 sm2:space-y-0  ">
                  <a
                    href="https://github.com/DHUSHYANDAN/Admission_Form.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main  cta-btn--hero cta-btn--projects"
                  >
                    Source Code
                  </a>
                  <a
                    href="https://admission-portal-zgny.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main   cta-btn--hero cta-btn--projects"
                  >
                    Live Now!
                  </a>
                </div>

              </div><br /><br />
              <div className="project-wrapper__image">
                <a href=" https://admission-portal-zgny.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <div className="thumbnail rounded">
                    <video width="100%" autoPlay preload='auto' muted loop className="img-fluid">
                      <source src={Admform} type="video/mp4" />
                      <source src={Admform} type="video/ogg" />
                    </video>
                  </div>
                </a>
              </div>
            </div>


            {/* Project 5 */}
            <div className="row">
              <div className="project-wrapper__text p-8">
                <h3 className="project-wrapper__text-title">Mern Crud App</h3>
                <p className="project-wrapper__text-info" id="four">
                  A full-stack web app built with React, Node.js, Express.js, and MongoDB that allows users to effortlessly create, read, update, and delete user profiles. The application features a responsive design, ensuring a seamless experience across devices, and showcases my ability to develop intuitive user interfaces and robust back-end functionalities.
                </p>
                <div className="project-wrapper__text-btns flex sm1:space-x-4 space-y-4 sm2:space-y-0  ">
                  <a
                    href="https://github.com/DHUSHYANDAN/Mern_crud_app.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main  cta-btn--hero cta-btn--projects"
                  >
                    Source Code
                  </a>
                  <a
                    href="https://mern-crud-dhushyu-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main   cta-btn--hero cta-btn--projects"
                  >
                    Live Now!
                  </a>
                </div>
              </div><br /><br />
              <div className="project-wrapper__image">
                <a href=" https://mern-crud-dhushyu-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="thumbnail rounded">
                    <video width="100%" autoPlay muted preload='auto' loop className="img-fluid">
                      <source src={Crudapp} type="video/mp4" />
                      <source src={Crudapp} type="video/ogg" />
                    </video>
                  </div>
                </a>
              </div>
            </div>



          </Slider>
        </div>
      </div>

    </section>
  );
};

export default Projects;
