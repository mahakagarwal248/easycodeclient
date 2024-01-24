import React, { useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./index.css";

function CompSwiper() {
  const [width, setWidth] = useState(window.innerWidth);
  const getWidth = () => {
    setWidth(window.innerWidth);
  };
  useLayoutEffect(() => {
    getWidth();
    window.addEventListener("resize", getWidth);
    getWidth();
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  return (
    <div style={{ color: "white" }}>
      <Swiper
        className="compswiper"
        spaceBetween={50}
        slidesPerView={width >= 820 ? 3 : width >= 475 && width < 820 ? 2 : 1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <FormatQuoteIcon style={{ fontSize: "50px" }} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <h5 style={{ color: "tomato" }}>Ralph Edwards</h5>
          <span style={{ fontSize: "12px" }}>12 April,2021</span>
        </SwiperSlide>
        <SwiperSlide>
          <FormatQuoteIcon style={{ fontSize: "50px" }} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <h5 style={{ color: "tomato" }}>Ralph Edwards</h5>
          <span style={{ fontSize: "12px" }}>12 April,2021</span>
        </SwiperSlide>
        <SwiperSlide>
          <FormatQuoteIcon style={{ fontSize: "50px" }} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <h5 style={{ color: "tomato" }}>Ralph Edwards</h5>
          <span style={{ fontSize: "12px" }}>12 April,2021</span>
        </SwiperSlide>
        <SwiperSlide>
          <FormatQuoteIcon style={{ fontSize: "50px" }} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <h5 style={{ color: "tomato" }}>Ralph Edwards</h5>
          <span style={{ fontSize: "12px" }}>12 April,2021</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CompSwiper;
