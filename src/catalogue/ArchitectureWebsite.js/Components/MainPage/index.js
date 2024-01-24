import "./index.css";

import Features from "./Features";
import ContactUs from "./ContactUs";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio";
import Banner from "./Banner";

function MainPage() {
  return (
    <div className="architecture-main-div">
      <Banner />
      <Portfolio />
      <Features />
      <ContactUs />
      <Testimonials />
    </div>
  );
}

export default MainPage;
