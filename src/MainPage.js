import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Construction from "./Components/Construction";
import FooterCOnstruction from "./Components/FooterCOnstruction";
import Header from "./Components/Header";
import SideNavbar from "./Components/SideNavbar";
// Pages
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Offer from "./Pages/Offer";
// Reducers
import { checkScreenSize } from "./Features/hideAnimationSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  // State imports
  const displayConstruction = useSelector(
    (state) => state.construction.displayConstruction
  );

  // Run use effect on app load to check the screen size
  useEffect(() => {
    dispatch(checkScreenSize());
  }, []);

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
