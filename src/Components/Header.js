import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="header__logo"></div>
        <nav className="nav">
          <ul>
            <li>home</li>
            <li>who we are</li>
            <li>our offer</li>
            <li>contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
