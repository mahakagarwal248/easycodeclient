import React, { useState, useEffect } from "react";
import "./Navbar.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  window.addEventListener("scroll", (event) => {
    if (toggleMenu) {
      setToggleMenu(false);
    }
  });
  const handleonclick = (path) => {
    setToggleMenu(false);
    if (path !== "/") {
      const id = path.split("#")[1];
      const servicesElement = document.getElementById(id);
      if (servicesElement) {
        let topOffset;
        if (id === "services") topOffset = servicesElement.offsetTop;
        else topOffset = servicesElement.offsetTop - 90; // Get the top position of the element
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <nav>
      <h2>
        <a href="/">EasyCoder</a>
      </h2>
      {(toggleMenu || screenWidth > 945) && (
        <div className="items-list">
          <button onClick={() => handleonclick("/")} className="items">
            Home
          </button>
          <button onClick={() => handleonclick("/#services")} className="items">
            Our Services
          </button>
          <button onClick={() => handleonclick("/#about")} className="items">
            About Us
          </button>
          <button
            onClick={() => handleonclick("/#catalogue")}
            className="items"
          >
            Catalogue
          </button>
          <hr />
          <button
            className="contact-us-btn"
            onClick={() => navigate("/contactus")}
            style={{ color: "white" }}
          >
            Contact Us
          </button>
        </div>
      )}

      <button onClick={toggleNav} className="navbtn">
        <DehazeIcon style={{ verticalAlign: "middle", color: "#035473" }} />
      </button>
    </nav>
  );
}

export default Navbar;
