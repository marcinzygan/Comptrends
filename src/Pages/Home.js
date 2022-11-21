import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="hero__section">
      <div className="hero__container">
        <div className="hero__txt-container">
          <motion.h1
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
            className="hero__txt"
          >
            Data solution for your business
          </motion.h1>
        </div>
        <motion.div
          className="hero__animation-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, delay: 2 }}
        >
          <div className="hero__animation">
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
          </div>
          <div className="hero__background"></div>
        </motion.div>
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
