import React from "react";
import { useSelector } from "react-redux";

// COmponents
import Construction from "./Components/Construction";
import FooterCOnstruction from "./Components/FooterCOnstruction";
import Header from "./Components/Header";
import SideNavbar from "./Components/SideNavbar";

const MainPage = () => {
  const displayConstruction = useSelector(
    (state) => state.construction.displayConstruction
  );
  return (
    <>
      {!displayConstruction && <Header />}
      {!displayConstruction && <SideNavbar />}
      {displayConstruction && <Construction />}
      {displayConstruction && <FooterCOnstruction />}
    </>
  );
};

export default MainPage;
