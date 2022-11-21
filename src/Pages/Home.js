import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <section id="home">
      <div className="hero__container">
        <div className="social__icons">
          <Icon icon="entypo-social:facebook-with-circle" />
          <Icon icon="entypo-social:linkedin-with-circle" />
          <Icon icon="entypo-social:twitter-with-circle" />
        </div>
        <div className="hero__txt-container">
          <h1>Data solution for your business</h1>
          <Link to="about" className="nav__link" spy={true} smooth={true}>
            About us
          </Link>
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
      </div>
    </section>
  );
};

export default Home;
