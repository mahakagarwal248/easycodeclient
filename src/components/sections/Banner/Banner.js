import { useNavigate } from "react-router-dom";

import "./Banner.css";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className="s1" id="s1">
      <div className="s1content">
        <p>Solution for your Website related problems.</p>
        <h1>
          <span>We</span>
          <span>design</span>
          <span>and</span>
          <span>develop</span>
          <span>experiences</span>
          <span>that</span>
          <span>make</span>
          <span>people's</span>
          <span>lives</span>
          <span>
            <b>simple</b>.
          </span>
        </h1>
        <button className="btn" onClick={() => navigate("/contactus")}>
          Free consultation
        </button>
      </div>
      <div className="s1-img-div">
        <img src="../../../images/30668-min.jpg" alt="bg-img" />
      </div>
    </div>
  );
}

export default Banner;
