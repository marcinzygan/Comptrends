import React from "react";
import SectionHeadingAnimation from "../Components/SectionHeadingAnimation";
import { Link } from "react-scroll";
import aboutImg from "../Images/about.png";
const About = () => {
  return (
    <section id="about">
      <SectionHeadingAnimation heading={"Who we are ?"} />
      <div className="about__container">
        <div className="about__txt-container">
          <h3 className="heading__h3">
            <span className="span__accentFirst">Data</span> engineering and web
            development company
          </h3>
          <p className="about__txt">
            Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
            dui. Elit risus morbi etiam diam tempus. Vitae amet metus ante
            gravida nisi eget imperdiet. Consectetur ut lorem mattis felis
            sapien diam arcu
          </p>
          <p className="about__txt">
            Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
            dui. Elit risus morbi etiam diam tempus.{" "}
          </p>
        </div>
        <img src={aboutImg} alt="robot showing graph on coputer screen"></img>
        <div className="hero__btn">
          <Link to="offer" spy={true} smooth={true}>
            Our offer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
