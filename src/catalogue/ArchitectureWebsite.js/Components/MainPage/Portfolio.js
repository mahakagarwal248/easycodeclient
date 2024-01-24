import "./index.css";
import CompCarousel from "./Carousel";
function Portfolio() {
  return (
    <div className="architecture-portfolio">
      <p className="architecture-section-name">
        Our Portfolio
        <hr />
      </p>
      <div className="architecture-portfolio-info">
        <h2>
          We have completed more than 5000 projects
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="architecture-portfolio-carousel">
        <CompCarousel className="compcarousel" />
      </div>
    </div>
  );
}

export default Portfolio;
