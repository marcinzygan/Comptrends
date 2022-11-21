import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <section id="home" className="hero__section">
      <div className="hero__container">
        <div className="social__icons">
          <Icon icon="entypo-social:facebook-with-circle" />
          <Icon icon="entypo-social:linkedin-with-circle" />
          <Icon icon="entypo-social:twitter-with-circle" />
        </div>
        <div className="hero__txt-container">
          <h1 className="hero__txt">Data solution for your business</h1>
        </div>
        <div className="hero__animation-container">
          <div className="hero__animation">
            <div className="hero__dot"></div>
            <div className="hero__dot"></div>
            <div className="hero__dot"></div>
            <div className="hero__line"></div>
          </div>
          <div className="hero__background"></div>
        </div>
        <Link to="about" className="hero__btn" spy={true} smooth={true}>
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default Home;
