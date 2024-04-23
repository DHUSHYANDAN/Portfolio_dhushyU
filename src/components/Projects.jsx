import react, { useEffect } from 'react';
import Biodata from "../assets/biodata.webp"
import ParallaxVid from '../assets/parallex.webm'
import NetflixVid from '../assets/Netflix.webm';


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

  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="project-wrapper">
            <h2 className="section-title dark-blue-text">Projects</h2>

            {/* Project 1 */}
            <div className="row">
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">Bio Data</h3>
                <p className="project-wrapper__text-info" id="two">
                  It is a basic level project. Also known as biographical data, a biodata typically includes a range of specific factual information about an individual. "It is a validation form". Essentially, biodata highlights a number of details about a person such as; name, age, color, height, skills, hobbies, allergies etc.
                </p>
                <div className="project-wrapper__text-btns">
                  <a href="https://github.com/DHUSHYANDAN/BioDATA.git" target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main cta-btn--hero cta-btn--projects">Source Code</a>
                </div>
              </div>

              <div className="project-wrapper__image">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <div className="thumbnail rounded flex justify-center " id="custom-animated-section">
                    <img src={Biodata} className=" transform  transition-transform duration-1000" alt="Project Image" />
                  </div>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <article className="row">
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">Parallax Website</h3>
                <p className="project-wrapper__text-info" id="three">
                  It is a simple level project. A typical website with a parallax effect is one in which the background of the website moves slower than the elements in the foreground. The visual effect we`&apos;`re able to achieve gives the impression of movement and depth as if there is space between the foreground and background.
                </p>
                <div className="project-wrapper__text-btns">
                  <a href="https://github.com/DHUSHYANDAN/parallax.git" target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main cta-btn--hero cta-btn--projects">Source Code</a>
                </div>
              </div>

              <div className="project-wrapper__image">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <div className="thumbnail rounded">
                    <video width="100%" autoPlay muted loop className="img-fluid">
                      <source src={ParallaxVid} />
                      <source src={ParallaxVid} type="video/ogg" />
                    </video>
                  </div>
                </a>
              </div>
            </article>

            {/* Project 3 */}
            <article className="row">
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">Netflix Project</h3>
                <p className="project-wrapper__text-info" id="four">
                  This project is just a normal project containing a sign-in page. And there are four pages in this project, similar to the Netflix website.
                </p>
                <div className="project-wrapper__text-btns">
                  <a href="https://github.com/DHUSHYANDAN/Netflix_model_project.git" target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main cta-btn--hero cta-btn--projects">Source Code</a>
                </div>
              </div>

              <div className="project-wrapper__image">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <div className="thumbnail rounded">
                    <video width="100%" autoPlay muted loop className="img-fluid">
                      <source src={NetflixVid} type="video/mp4" />
                      <source src={NetflixVid} type="video/ogg" />
                    </video>
                  </div>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects