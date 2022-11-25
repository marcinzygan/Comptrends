import React from "react";
import { motion } from "framer-motion";
const SectionHeadingAnimation = (props) => {
  return (
    <div className="section__heading-container">
      <div className="section__animation">
        <motion.div
          className="section__line-1"
          initial={{ height: "5px", width: "65px" }}
          animate={{ width: "85px" }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            repeatDelay: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          initial={{ height: "5px", width: "48px" }}
          animate={{ width: "55px" }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            repeatDelay: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="section__line-2"
        ></motion.div>
        <motion.div
          initial={{ height: "5px", width: "85px" }}
          animate={{ width: "50px" }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            repeatDelay: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="section__line-3"
        ></motion.div>
        <motion.div
          className="section__line-4"
          initial={{ height: "5px", width: "62px" }}
          animate={{ width: "35px" }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            repeatDelay: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="section__line-5"
          initial={{ height: "5px", width: "22px" }}
          animate={{ width: "70px" }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            repeatDelay: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </div>
      <h2 className="section__heading-txt">{props.heading}</h2>
    </div>
  );
};

export default SectionHeadingAnimation;
