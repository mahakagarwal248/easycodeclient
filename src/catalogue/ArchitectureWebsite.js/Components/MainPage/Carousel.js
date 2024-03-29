import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";

function CompCarousel() {
  return (
    <div className="compcarousel" style={{ display: "flex", width: "100%" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="architecture-carousel-img"
            src="https://i.pinimg.com/originals/fe/51/91/fe51913d5ffb6ab7c5f9b345dbbb1c69.png"
            alt=""
          />
          <Carousel.Caption className="carouselcaption">
            <div>
              <h5>R.K. Apartment Design</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <br />
              <a
                href="/"
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "underline",
                }}
              >
                View Project Details
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="architecture-carousel-img"
            src="https://www.luxuriantmagazine.com/wp-content/uploads/2021/04/Explore-Rome-Decor-With-Its-Best-Interior-Design-Projects-ft.jpg"
            alt=""
          />
          <Carousel.Caption className="carouselcaption">
            <div>
              <h5>R.K. Apartment Design</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <br />
              <a
                href="/"
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "underline",
                }}
              >
                View Project Details
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="architecture-carousel-img"
            src="https://d3i9l7sj72swdx.cloudfront.net/pentabase/2021/05/base-rec-final-fullres-140-1000x400.jpg"
            alt=""
          />
          <Carousel.Caption className="carouselcaption">
            <div>
              <h5>R.K. Apartment Design</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <br />
              <a
                href="/"
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "underline",
                }}
              >
                View Project Details
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CompCarousel;
