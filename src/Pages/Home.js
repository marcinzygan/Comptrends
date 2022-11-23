import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="hero__section">
      <div className="hero__container">
        <div className="hero__txt-container">
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="hero__txt">
              <span className="hero__span">Data</span> solution for your
              business .
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 2 }}
              className="hero__subtxt"
            >
              Lorem ipsum dolor sit amet consectetur. Bibendum et mauris porta
              id sapien varius risus. Condimentum posuere habitant netus
              pellentesque leo arcu.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          className="hero__animation-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 2 }}
        >
          <div className="hero__animation">
            <motion.div
              animate={{ backgroundColor: ["#ffff", "#58effb", "#ffff"] }}
              transition={{
                duration: 2,
                delay: 1,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="hero__dot"
            ></motion.div>
            <motion.div
              animate={{ backgroundColor: ["#ffff", "#58effb", "#ffff"] }}
              transition={{
                duration: 2,
                delay: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="hero__dot"
            ></motion.div>
            <motion.div
              animate={{ backgroundColor: ["#ffff", "#58effb", "#ffff"] }}
              transition={{
                duration: 2,
                delay: 3,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="hero__dot"
            ></motion.div>
            <motion.div
              animate={{ backgroundColor: ["#ffff", "#ff11c7", "#ffff"] }}
              transition={{
                duration: 2,
                delay: 4,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="hero__line"
            ></motion.div>
          </div>
          <div className="hero__background"></div>
        </motion.div>
        <motion.div
          className="hero__btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <Link to="about" spy={true} smooth={true}>
            Learn more
          </Link>
        </motion.div>
        <div className="social__icons">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.5 }}
          >
            <Icon icon="entypo-social:facebook-with-circle" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}
          >
            <Icon icon="entypo-social:linkedin-with-circle" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5.5 }}
          >
            <Icon icon="entypo-social:twitter-with-circle" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
