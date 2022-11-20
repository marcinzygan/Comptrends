import React from "react";
import { useSelector } from "react-redux";

// COmponents
import Construction from "./Components/Construction";
import FooterCOnstruction from "./Components/FooterCOnstruction";
import Header from "./Components/Header";
import SideNavbar from "./Components/SideNavbar";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Offer from "./Pages/Offer";

const MainPage = () => {
  const displayConstruction = useSelector(
    (state) => state.construction.displayConstruction
  );
  return (
    <>
      {!displayConstruction && <Header />}
      {!displayConstruction && <SideNavbar />}

      {!displayConstruction && <Home />}
      {!displayConstruction && <About />}
      {!displayConstruction && <Offer />}
      {!displayConstruction && <Contact />}
      {displayConstruction && <Construction />}
      {displayConstruction && <FooterCOnstruction />}
    </>
  );
};

export default MainPage;
