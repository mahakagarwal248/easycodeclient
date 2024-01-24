import { useContext } from "react";
import Workingcontext from "../../../../contexts/workngalert/workingcontext";

function Features() {
  const notworkcontext = useContext(Workingcontext);
  const developmentstate = () => {
    notworkcontext.customtoast("website in development state ", "warn");
  };
  return (
    <div className="architecture-features">
      <div>
        <p className="architecture-section-name">
          Our Features <hr />
        </p>
        <div className="architecture-features-info">
          <h2>
            Design your interiors <br />
            with the style you want
          </h2>
          <button onClick={developmentstate}>View more styles</button>
        </div>
        <div className="architecture-features-cards">
          <div>
            <img
              src="https://bloximages.newyork1.vip.townnews.com/news-daily.com/content/tncms/assets/v3/editorial/3/03/303f8ca0-ebf9-58d5-90b6-f13b3cdbd9f0/617ab4f0c1f5a.preview.png?resize=200%2C200"
              alt=""
            />
            <h6>Soft & Playful</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <img
              src="https://www.arch2o.com/wp-content/uploads/2022/04/Arch2O-tiny-house-interior-design-tips-and-tricks-for-a-better-life-style-1-200x200.webp"
              alt=""
            />
            <h6>Minimalistic</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ8VYb_HBBScOMjaGGvabaiuIQnovwUbEtww&usqp=CAU"
              alt=""
            />
            <h6>Productive</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <img
              src="https://www.dreaminteriors.in/wp-content/uploads/2019/12/Hotel-Interior-Design-200x200.jpg"
              alt=""
            />
            <h6>Enjoyable</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
