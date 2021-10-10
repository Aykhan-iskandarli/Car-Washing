import React from "react";
import Slider from "react-slick";
import "./t_slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial1 from "../../img/testimonial-1.jpg";
import testimonial2 from "../../img/testimonial-2.jpg";
import testimonial3 from "../../img/testimonial-3.jpg";
import testimonial4 from "../../img/testimonial-4.jpg";

const T_Slider = ({ children, src, className }) => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
    ]
  };
  return (
    <div className="slider_testimonials ">
      <Slider {...settings}>
        <div className="d-flex cursor-pointer">
          <div className="testimonials_img">
            <img src={testimonial1} alt="" />
          </div>
          <div className="testimonials_text">
              <h2>Client Name</h2>
              <span>Profession</span>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur nisi saepe earum non nam magni. Aperiam tenetur natus cum aliquam ab.</p>
          </div>
        </div>
        <div className="d-flex ">
          <div className="testimonials_img">
            <img src={testimonial2} alt="" />
          </div>
          <div className="testimonials_text">
              <h2>Client Name</h2>
              <span>Profession</span>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur nisi saepe earum non nam magni. Aperiam tenetur natus cum aliquam ab.</p>
          </div>
        </div>
        <div className="d-flex ">
          <div className="testimonials_img">
            <img src={testimonial3} alt="" />
          </div>
          <div className="testimonials_text">
              <h2>Client Name</h2>
              <span>Profession</span>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur nisi saepe earum non nam magni. Aperiam tenetur natus cum aliquam ab.</p>
          </div>
        </div>
        <div className="d-flex ">
          <div className="testimonials_img">
            <img src={testimonial1} alt="" />
          </div>
          <div className="testimonials_text">
              <h2>Client Name</h2>
              <span>Profession</span>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur nisi saepe earum non nam magni. Aperiam tenetur natus cum aliquam ab.</p>
          </div>
        </div>
        <div className="d-flex ">
          <div className="testimonials_img">
            <img src={testimonial4} alt="" />
          </div>
          <div className="testimonials_text">
              <h2>Client Name</h2>
              <span>Profession</span>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur nisi saepe earum non nam magni. Aperiam tenetur natus cum aliquam ab.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default T_Slider;
