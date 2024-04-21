import React from 'react';

const Footer = () => {
    return (
        <footer  id='footer' className="footer">
            <div className="container">
                
                <div className="social-links">
                    <a href="mailto:dhushyandan302002@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="gmail">
                        <i className="far fa-envelope hover:text-blue-500"></i>
                    </a>
                    <a href="https://www.instagram.com/d_h_u_s_h_yu/?hl=en" target="_blank" rel="noopener noreferrer"
                        aria-label="instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/dhushyandan.v/" target="_blank" rel="noopener noreferrer"
                        aria-label="facebook">
                        <i className="fab fa-facebook hover:text-sky-400"></i>
                    </a>
                    <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BRuxj%2BgMUQ6yQ1PS5dYbUDw%3D%3D"
                        target="_blank" rel="noopener noreferrer" aria-label="linkedin">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/DHUSHYANDAN" target="_blank" rel="noopener noreferrer" aria-label="github">
                        <i className="fab fa-github hover:text-gray-400"></i>
                    </a>
                </div>
                <hr />
                <p className="footer__text">
                   
                    <a href="https://github.com/DHUSHYANDAN" target="_blank" rel="noopener noreferrer">
                    @ - Portfolio by  Dhushyandan.</a> <br />Made with ❤️;
                </p>
            </div>
        </footer>
    )
}

export default Footer;
