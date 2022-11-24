import React from "react";

const SectionHeadingAnimation = (props) => {
  return (
    <div className="section__heading-container">
      <div className="section__animation">
        <div className="section__line-1"></div>
        <div className="section__line-2"></div>
        <div className="section__line-3"></div>
        <div className="section__line-4"></div>
      </div>
      <h2>{props.heading}</h2>
    </div>
  );
};

export default SectionHeadingAnimation;
