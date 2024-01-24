import React, { useContext } from "react";
import "./Navbar.css";
import Workingcontext from "../../../contexts/workngalert/workingcontext";

function Navbar() {
  const notworkcontext = useContext(Workingcontext);
  const developmentstate = () => {
    notworkcontext.customtoast("website in development state ", "warn");
  };
  return (
    <div className="architecture-navbar">
      <div className="architecture-logo">
        <span>D</span>
        <span>E</span>
        <span>C</span>
        <span>O</span>
        <span style={{ color: "red" }}>R</span>
        <span>R</span>
      </div>
      <div className="architecture-nav-items">
        <h5 className="architecture-nav-item" onClick={developmentstate}>
          Home
        </h5>
        <h5 className="architecture-nav-item" onClick={developmentstate}>
          Services
        </h5>
        <h5 className="architecture-nav-item" onClick={developmentstate}>
          Our Work
        </h5>
        <h5 className="architecture-nav-item" onClick={developmentstate}>
          Customer Reviews
        </h5>
        <h5 className="architecture-nav-item" onClick={developmentstate}>
          Our Team
        </h5>
        <h5 className="architecture-nav-item" onClick={developmentstate}>
          Contact
        </h5>
        <h5 className="architecture-nav-item" onClick={developmentstate}>
          Hire Us
        </h5>
      </div>
    </div>
  );
}

export default Navbar;
