import { useNavigate } from "react-router-dom";

import "./AboutUs.css";

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="s3" id="about">
      <div className="s3d1">
        <img
          src="https://gensolarenergy.com/wp-content/uploads/2021/06/about-us-1.png"
          alt=""
        />
      </div>
      <div className="s3d2">
        <h4>About Us</h4>
        <h2>Stuff We Do</h2>
        <p>
          We create, design and deploy your website for your business to take
          your business to next level on digital platforms.
        </p>
        <p>
          We use latest technologies in our development work. We can design your
          site as you want. You can choose design from our catalogue or can give
          your own designs as per your requirement.
        </p>

        <button className="about-btn" onClick={() => navigate("/contact-us")}>
          What we can do for you
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
