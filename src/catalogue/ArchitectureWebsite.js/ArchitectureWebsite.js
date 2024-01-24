import { useEffect } from "react";
import "./ArchitectureWebsite.css";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage/index.js";
import Footer from "./Components/Footer";

function ArchitectureWebsite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="architect-website-div">
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  );
}

export default ArchitectureWebsite;
