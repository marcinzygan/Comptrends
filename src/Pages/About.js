import React from "react";
import SectionHeadingAnimation from "../Components/SectionHeadingAnimation";
import { Link } from "react-scroll";
import aboutImg from "../Images/about.png";
const About = () => {
  return (
    <section id="about">
      <SectionHeadingAnimation heading={"About us"} />
      <div className="about__container">
        <div className="about__txt-container">
          <h3>Data engineering and web development company</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
            dui. Elit risus morbi etiam diam tempus. Vitae amet metus ante
            gravida nisi eget imperdiet. Consectetur ut lorem mattis felis
            sapien diam arcu
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit
            dui. Elit risus morbi etiam diam tempus.{" "}
          </p>
          <div className="hero__btn">
            <Link to="offer" spy={true} smooth={true}>
              Our offer
            </Link>
          </div>
        </div>
        <img src={aboutImg} alt="robot showing graph on coputer screen"></img>
      </div>
    </section>
  );
};

export default About;
