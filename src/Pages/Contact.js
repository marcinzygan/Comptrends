import React from "react";
import { Link } from "react-scroll";
import SectionHeadingAnimation from "../Components/SectionHeadingAnimation";
const Contact = () => {
  return (
    <section id="contact">
      <SectionHeadingAnimation heading={"Contact"} />
      <div className="contact__img-container">
        <h1 className="hero__txt">
          Ready to <span className="span__accentSecond">start</span> working
          with us ?
        </h1>
        <div className="contact__buttons-container">
          <div className="hero__btn contact__btn">
            <Link to="form" spy={true} smooth={true}>
              Contact us
            </Link>
          </div>
          <p className="contact__or">or</p>
          <div className="hero__btn">
            <Link to="offer" spy={true} smooth={true}>
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
