import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      {/* <div className="header__container">
        <div className="header__logo">
          <p>LOGO</p>
        </div>
        <nav className="nav">
          <ul>
            <li className="nav__link">home</li>
            <li className="nav__link">who we are</li>
            <li className="nav__link">our offer</li>
            <li className="nav__link">contact</li>
          </ul>
        </nav>
      </div> */}
      <Navbar />
    </header>
  );
};

export default Header;
