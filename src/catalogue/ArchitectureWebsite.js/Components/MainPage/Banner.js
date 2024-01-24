import { useContext } from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import "./index.css";
import Workingcontext from "../../../../contexts/workngalert/workingcontext";

function Banner() {
  const notworkcontext = useContext(Workingcontext);
  const developmentstate = () => {
    notworkcontext.customtoast("website in development state ", "warn");
  };
  return (
    <div className="architecture-banner">
      <div className="architecture-contact-details">
        <p>
          <PhoneInTalkIcon className="architecture-contact-details-icons" />{" "}
          8755102544
        </p>
        <span>(Mon 9am - Fri 9pm)</span>
        <p>
          <MailOutlineIcon className="icons" /> example@example.com
        </p>
      </div>
      <div className="architecture-banner-div">
        <div className="architecture-banner-info">
          <div className="architecture-banner-data">
            <div className="architecture-banner-info-div">
              <p className="architecture-section-name">
                Designing interior since 2003 <hr />
              </p>
              <h1>
                We Design Beautiful <br /> Home Interiors
              </h1>
              <p>
                We are an interior design company based in India.We design home,
                <br />
                office and other corporate buildings.
              </p>
              <button onClick={developmentstate}>CONTACT US</button>
            </div>
          </div>
          <div className="architecture-banner-info-img">
            <img
              src="https://3.imimg.com/data3/CE/NF/MY-12891390/hall-interior-designing-service-500x500.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="architecture-banner-cards">
          <div>
            <h2>01</h2>
            <h6>Home Design</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              posuere nulla non turpis porttitor viverra.
            </p>
          </div>
          <div>
            <h2>02</h2>
            <h6>Office Design</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              posuere nulla non turpis porttitor viverra.
            </p>
          </div>
          <div>
            <h2>03</h2>
            <h6>Furniture Design</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              posuere nulla non turpis porttitor viverra.
            </p>
          </div>
          <div>
            <h2>04</h2>
            <h6>Paints & Lights</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              posuere nulla non turpis porttitor viverra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
