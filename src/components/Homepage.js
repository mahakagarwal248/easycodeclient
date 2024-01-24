import React from "react";

import TechnologyUsed from "./sections/TechnologyUsed/TechnologyUsed";
import OurServices from "./sections/OurServices/OurServices";
import AboutUs from "./sections/AboutUs/AboutUs";
import Catalogue from "./sections/Catalogue/Catalogue";
import GetInTouch from "./sections/GetInTouch/GetInTouch";
import Banner from "./sections/Banner/Banner";

function Homepage() {
  return (
    <div className="homepage">
      <Banner />
      <TechnologyUsed />
      <OurServices />
      <AboutUs />
      <Catalogue />
      <GetInTouch />
    </div>
  );
}

export default Homepage;
