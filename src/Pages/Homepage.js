import { useEffect } from "react";

import TechnologyUsed from "../components/sections/TechnologyUsed/TechnologyUsed";
import OurServices from "../components/sections/OurServices/OurServices";
import AboutUs from "../components/sections/AboutUs/AboutUs";
import Catalogue from "../components/sections/Catalogue/Catalogue";
import GetInTouch from "../components/sections/GetInTouch/GetInTouch";
import Banner from "../components/sections/Banner/Banner";

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
