// import logo from "../Images/logo.svg";
import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar() {
  //Set state for opening the navigation
  const [navOpen, setNavOpen] = React.useState(false);
  //Function to toggle state
  function toggleNavigation() {
    setNavOpen((prevState) => !prevState);
  }
  return (
    <nav className="nav">
      <Link to="home" spy={true} smooth={true} offset={-100} className="logo">
        <img alt="marcin zygan logo"></img>
      </Link>

      <motion.button
        onClick={toggleNavigation}
        className="nav__button"
        aria-label="toggle navigation"
        // initial={{ x: 400, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ duration: 2, delay: 3 }}
      >
        <Icon icon="ri:menu-4-line" />
      </motion.button>

      <ul className={!navOpen ? "nav__list" : "nav__open nav__list"}>
        <li className="nav__li">
          <Link
            onClick={toggleNavigation}
            to="home"
            className="nav__link"
            spy={true}
            smooth={true}
            offset={-130}
          >
            Home
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={toggleNavigation}
            to="work"
            className="nav__link"
            spy={true}
            smooth={true}
            offset={-30}
          >
            Work
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={toggleNavigation}
            to="about"
            className="nav__link"
            spy={true}
            smooth={true}
            offset={-30}
          >
            About
          </Link>
        </li>
        <li className="nav__li">
          <Link
            onClick={toggleNavigation}
            to="contact"
            className="nav__link"
            spy={true}
            smooth={true}
            offset={-30}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
