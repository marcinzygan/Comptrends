import React from "react";
import { Link } from "react-scroll";

export default function SideNavbar() {
  return (
    <nav className="side__nav">
      <div className="side__item">
        <Link
          to="home"
          activeClass="side__link-selected"
          spy={true}
          smooth={true}
          offset={-100}
          className="side__link"
        ></Link>
        <span className="side__label">Home</span>
      </div>

      <div className="side__item">
        <Link
          to="about"
          activeClass="side__link-selected"
          spy={true}
          smooth={true}
          offset={-30}
          className="side__link"
        ></Link>
        <span className="side__label">About us</span>
      </div>

      <div className="side__item">
        <Link
          to="offer"
          activeClass="side__link-selected"
          spy={true}
          smooth={true}
          offset={-30}
          className="side__link"
        ></Link>
        <span className="side__label">Our offer</span>
      </div>

      <div className="side__item">
        <Link
          to="contact"
          activeClass="side__link-selected"
          spy={true}
          smooth={true}
          offset={-30}
          className="side__link"
        ></Link>
        <span className="side__label">Contact</span>
      </div>
    </nav>
  );
}
