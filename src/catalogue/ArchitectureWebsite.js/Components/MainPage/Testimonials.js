import "./index.css";
import CompSwiper from "./Swiper";

function Testimonials() {
  return (
    <div className="architecture-testimonials">
      <div>
        <p className="architecture-section-name">
          Testimonials <hr />
        </p>
        <h2 className="architecture-testimonials-info">
          Our customers love us for the quality of our service
        </h2>
        <CompSwiper />
      </div>
    </div>
  );
}

export default Testimonials;
