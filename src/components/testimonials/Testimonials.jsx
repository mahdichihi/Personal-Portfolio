import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../data/testimonialsData.js";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {testimonialsData.map((testimonial, i) => (
          <SwiperSlide key={i} className="testimonial">
            <div className="client__avatar">
              <img src={testimonial.avatar} alt="Avatar One" />
            </div>
            <h5 className="client__name">{testimonial.name}</h5>
            <small className="client__review">{testimonial.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
