import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Initialize Swiper core modules
import "swiper/css";
import "swiper/css/navigation";

const FoodSlider = ({ Urls }) => {
  const swiperRef = useRef();

  return (
    <section className="sliderContainer  ">
      <Swiper
        className="swiper"
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={30}
        cssMode={true}
        loop={true}
        parallax={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          1200: {
            slidesPerView: 10,
            spaceBetween: 20,
            mousewheel:false,
            loop:false,
          
            watchOverflow:false,
          },
        }}
      >
        {Urls.map((data, index) => (
          <SwiperSlide key={index}>
            <Link to={data?.url}>
              <img
                src={data.imageUrl}
                alt="data"
                className="rounded-end-circle rounded-start-circle"
              />
              <h3 className="text-decoration-none">{data.name}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Customized navigation buttons */}
      <div className="swiper-button d-lg-none">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <i className="bi bi-arrow-left-circle-fill"></i>
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>
    </section>
  );
};

export default FoodSlider;
