import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavigation } from "../Features/navSlice";
import logo from "../Images/logo.svg";
export default function Navbar() {
  const dispatch = useDispatch();
  // GET STATE
  const isNavOpen = useSelector((state) => state.nav.isNavOpen);

  return (
    <nav className="nav">
      <Link to="home" spy={true} smooth={true} offset={-100} className="logo">
        <img src={logo} alt="comptrends logo"></img>
      </Link>

      <motion.button
        onClick={() => dispatch(toggleNavigation(isNavOpen))}
        className="nav__button"
        aria-label="toggle navigation"
      >
        <div className="nav__button-circle">
          {isNavOpen ? (
            <Icon icon="ooui:close" color="#ff11c7" />
          ) : (
            <Icon icon="ci:menu-alt-01" color="#ff11c7" />
          )}
        </div>
      </motion.button>

      <ul className={!isNavOpen ? "nav__list" : "nav__open nav__list"}>
        <div className="link__container">
          <motion.li whileHover={"hover"} className="nav__li">
            <motion.div
              className={"nav__rectangle"}
              initial={{ y: -30, x: -27, opacity: 1 }}
              transition={{ duration: 1 }}
              variants={{
                hover: { y: 50, opacity: 1, backgroundColor: "#ff11c7" },
              }}
            ></motion.div>

            <Link
              onClick={() => dispatch(toggleNavigation(isNavOpen))}
              to="home"
              className="nav__link"
              activeClass="nav__link-selected"
              spy={true}
              smooth={true}
              offset={-130}
            >
              Home
            </Link>
            <motion.div
              className={"nav__circle"}
              initial={{ y: 25, x: -39, opacity: 0 }}
              transition={{ duration: 2 }}
              variants={{
                hover: {
                  y: -39,
                  x: -39,
                  opacity: 1,
                  backgroundColor: "#ffff",
                },
              }}
            ></motion.div>
          </motion.li>
        </div>
        <div className="link__container">
          <motion.li whileHover={"hover"} className="nav__li">
            <motion.div
              className={"nav__rectangle"}
              initial={{ y: -30, x: -27, opacity: 1 }}
              transition={{ duration: 1 }}
              variants={{
                hover: { y: 50, opacity: 1, backgroundColor: "#ff11c7" },
              }}
            ></motion.div>

            <Link
              onClick={() => dispatch(toggleNavigation(isNavOpen))}
              to="about"
              className="nav__link"
              spy={true}
              smooth={true}
              offset={-130}
            >
              About us
            </Link>
            <motion.div
              className={"nav__circle"}
              initial={{ y: 50, x: -39, opacity: 0 }}
              transition={{ duration: 2 }}
              variants={{
                hover: { y: -39, x: -39, opacity: 1, backgroundColor: "#ffff" },
              }}
            ></motion.div>
          </motion.li>
        </div>
        <div className="link__container">
          <motion.li whileHover={"hover"} className="nav__li">
            <motion.div
              className={"nav__rectangle"}
              initial={{ y: -30, x: -27, opacity: 1 }}
              transition={{ duration: 1 }}
              variants={{
                hover: { y: 50, opacity: 1, backgroundColor: "#ff11c7" },
              }}
            ></motion.div>

            <Link
              onClick={() => dispatch(toggleNavigation(isNavOpen))}
              to="offer"
              className="nav__link"
              spy={true}
              smooth={true}
              offset={-130}
            >
              Our offer
            </Link>
            <motion.div
              className={"nav__circle"}
              initial={{ y: 50, x: -39, opacity: 0 }}
              transition={{ duration: 2 }}
              variants={{
                hover: { y: -39, x: -39, opacity: 1, backgroundColor: "#ffff" },
              }}
            ></motion.div>
          </motion.li>
        </div>
        <div className="link__container">
          <motion.li whileHover={"hover"} className="nav__li">
            <motion.div
              className={"nav__rectangle"}
              initial={{ y: -30, x: -27, opacity: 1 }}
              transition={{ duration: 1 }}
              variants={{
                hover: { y: 50, opacity: 1, backgroundColor: "#ff11c7" },
              }}
            ></motion.div>

            <Link
              onClick={() => dispatch(toggleNavigation(isNavOpen))}
              to="contact"
              className="nav__link"
              spy={true}
              smooth={true}
              offset={-130}
            >
              Contact
            </Link>
            <motion.div
              className={"nav__circle"}
              initial={{ y: 50, x: -39, opacity: 0 }}
              transition={{ duration: 2 }}
              variants={{
                hover: { y: -39, x: -39, opacity: 1, backgroundColor: "#ffff" },
              }}
            ></motion.div>
          </motion.li>
        </div>
      </ul>
    </nav>
  );
}
