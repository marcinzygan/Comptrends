import React from "react";
import SectionHeadingAnimation from "../Components/SectionHeadingAnimation";
import circleOne from "../Images/circle__one.png";
import circleTwo from "../Images/circle__two.png";
import { motion } from "framer-motion";

const Offer = () => {
  return (
    <section id="offer">
      <SectionHeadingAnimation heading={"Offer"} />
      <div className="offer__info-container">
        <h3 className="heading__h3">
          <span className="span__accentFirst">Help</span> to promote your
          business
        </h3>
        <p className="paragraph__txt">
          Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit dui.
          Elit risus morbi etiam diam tempus. Vitae amet metus ante gravida nisi
          eget imperdiet. Consectetur ut lorem mattis felis sapien diam arcu
        </p>
        <p className="paragraph__txt">
          Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit dui.
          Elit risus morbi etiam diam tempus.
        </p>
      </div>
      <div className="offer__animation-container">
        <motion.div
          className="circle__animation"
          // initial={{ translateX: "50%", translateY: "50%" }}
          animate={{ rotate: 90 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
        >
          <img
            src={circleOne}
            alt="dashed pink circle"
            className="circle__one"
          ></img>
        </motion.div>
        <motion.div
          className="circle__animation"
          // initial={{ translateX: "50%", translateY: "50%" }}
          animate={{ rotate: -90 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
        >
          <img
            src={circleTwo}
            alt="dashed blue circle"
            className="circle__two"
          ></img>
        </motion.div>
      </div>
      <div className="offer__info-container">
        <h3 className="heading__h3">
          Bring your <span className="span__accentSecond">data</span> to live
        </h3>
        <p className="paragraph__txt">
          Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit dui.
          Elit risus morbi etiam diam tempus. Vitae amet metus ante gravida nisi
          eget imperdiet. Consectetur ut lorem mattis felis sapien diam arcu
        </p>
        <p className="paragraph__txt">
          Lorem ipsum dolor sit amet consectetur. Vitae odio quis sit velit dui.
          Elit risus morbi etiam diam tempus.
        </p>
      </div>
    </section>
  );
};

export default Offer;
