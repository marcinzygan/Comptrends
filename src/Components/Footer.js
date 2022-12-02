import React from "react";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <section>
      <footer>
        <div className="footer__container">
          <div className="footer__links-container">
            <h4 className="footer__h4">
              Site map <span className="span__accentFirst">.</span>
            </h4>
            <Link smooth={true} to="home" className="footer__link">
              Home
            </Link>
            <Link smooth={true} to="about" className="footer__link">
              About us
            </Link>
            <Link smooth={true} to="offer" className="footer__link">
              Our offer
            </Link>
            <Link smooth={true} to="contact" className="footer__link">
              Contact us
            </Link>
          </div>
          <div className="footer__links-container">
            <h4 className="footer__h4">
              Contact info <span className="span__accentFirst">.</span>
            </h4>
            <>
              <p className="footer__link">Phone :</p>
              <span className="footer__link">+48 009 009 234</span>
            </>
            <>
              <p className="footer__link">Email :</p>
              <span className="footer__link">comptrends@gmail.com</span>
            </>
          </div>
          <div className="footer__links-container">
            <h4 className="footer__h4">
              Social media <span className="span__accentFirst">.</span>
            </h4>
            <a className="footer__link" href="https://facebook.com">
              Facebook
            </a>
            <a className="footer__link" href="https://facebook.com">
              LinkedIn
            </a>
            <a className="footer__link" href="https://facebook.com">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
