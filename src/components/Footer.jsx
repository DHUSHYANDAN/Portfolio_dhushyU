import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <a href="#hero" className="back-to-top" aria-label="go back to top">
        <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
      </a>
      <div className="social-links">
        <a href="mailto:smartworkdhushyu@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="gmail">
          <i className="fa-brands fa-maxcdn "></i>
        </a>
        <a href="https://www.instagram.com/d_h_u_s_h_yu/?hl=en" target="_blank" rel="noopener noreferrer"
          aria-label="instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/dhushyandan.v/" target="_blank" rel="noopener noreferrer"
          aria-label="facebook">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BRuxj%2BgMUQ6yQ1PS5dYbUDw%3D%3D"
          target="_blank" rel="noopener noreferrer" aria-label="linkedin">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/DHUSHYU" target="_blank" rel="noopener noreferrer" aria-label="github">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <hr />
      <p className="footer__text">
        @ - Protfolio by
        <a href="https://github.com/DHUSHYU" target="_blank" rel="noopener noreferrer">
          Dhushyandan.</a> <br />Made with &hearts;
      </p>
    </div>
  </footer>

  )
}

export default Footer