import { useContext } from "react";

import "./index.css";
import Workingcontext from "../../../../contexts/workngalert/workingcontext";

function ContactUs() {
  const notworkcontext = useContext(Workingcontext);
  const developmentstate = () => {
    notworkcontext.customtoast("website in development state ", "warn");
  };
  return (
    <div className="architecture-contact">
      <p className="architecture-section-name">
        Contact Us
        <hr />
      </p>
      <div className="architecture-contact-info">
        <h2>Get in touch with us and give your interiors a new look!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="architecture-contact-content">
        <div>
          <img
            src="https://www.indecortrends.com/wp-content/uploads/2019/11/Relevant-interior-design-trends-2021-6-600x400.jpg"
            alt=""
          />
        </div>

        <form className="architecture-contact-form">
          <input type="text" placeholder="Full name" />
          <br />
          <input type="phone" placeholder="Mobile no.(with country code)" />
          <br />
          <input type="email" placeholder="E-mail" />
          <br />
          <input type="text" maxLength="200" placeholder="Message" />
          <br />
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              developmentstate();
            }}
          >
            Submit
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
