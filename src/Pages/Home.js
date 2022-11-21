import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="hero__section">
      <div className="hero__container">
        <div className="hero__txt-container">
          <h1 className="hero__txt">Data solution for your business</h1>
        </div>
        <div className="hero__animation-container">
          <motion.div
            // transition={{
            //   staggerChildren: 0.5,
            //   delayChildren: 0.3,
            // }}
            className="hero__animation"
          >
            <motion.div
              animate={{ backgroundColor: ["#ffff", "#58effb", "#ffff"] }}
              transition={{
                duration: 2,
                delay: 1,
                repeat: Infinity,
                repeatDelay: 6,
              }}
              className="hero__dot"
            ></motion.div>
            <motion.div
              animate={{ backgroundColor: ["#ffff", "#58effb", "#ffff"] }}
              transition={{
                duration: 2,
                delay: 2,
                repeat: Infinity,
                repeatDelay: 6,
              }}
              className="hero__dot"
            ></motion.div>
            <motion.div
              animate={{ backgroundColor: ["#ffff", "#58effb", "#ffff"] }}
              transition={{
                duration: 2,
                delay: 3,
                repeat: Infinity,
                repeatDelay: 6,
              }}
              className="hero__dot"
            ></motion.div>
            <motion.div
              animate={{ backgroundColor: ["#ffff", "#ff11c7", "#ffff"] }}
              transition={{
                duration: 2,
                delay: 4,
                repeat: Infinity,
                repeatDelay: 6,
              }}
              className="hero__line"
            ></motion.div>
          </motion.div>
          <div className="hero__background"></div>
        </div>
        <Link to="about" className="hero__btn" spy={true} smooth={true}>
          Learn more
        </Link>
        <div className="social__icons">
          <Icon icon="entypo-social:facebook-with-circle" />
          <Icon icon="entypo-social:linkedin-with-circle" />
          <Icon icon="entypo-social:twitter-with-circle" />
        </div>
      </div>
    </section>
  );
};

export default Home;
