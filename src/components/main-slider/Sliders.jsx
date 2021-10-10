import React from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../../img/carousel-1.jpg";
import carousel2 from "../../img/carousel-2.jpg";
import carousel3 from "../../img/carousel-3.jpg";
import Button from "../Button/Button";

const Sliders = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="outline-none overlay">
          <img src={carousel1} alt="" />
          <div className="slider_text">
            <h3>Washing & Detailing</h3>
            <h1>Exterior & Interior Washing</h1>
            <p>
              Sed ultrices,est eget feugjat accumsan, dui nibh egestas tortor,
              ut rhoncorus nibah ligula uesimad quam
            </p>
            <div className="slider_button">
            <Button className="slider-btn">Explore More</Button>
            </div>
          </div>
        </div>
        <div className="outline-none overlay">
          <img src={carousel2} alt="" />
          <div className="slider_text">
            <h3>Washing & Detailing</h3>
            <h1>Keep your Car Newer</h1>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
              Vivamus egestas eleifend dui ac
            </p>
            <div className="slider_button">
              <Button className="slider-btn">Explore More</Button>
            </div>
          </div>
        </div>
        <div className="outline-none overlay">
          <img src={carousel3} alt="" />
          <div className="slider_text">
            <h3>Washing & Detailing</h3>
            <h1>Quality service for you</h1>
            <p>
              Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue
              urna. Morbi sagittis orci sodales
            </p>
            <div className="slider_button">
            <Button className="slider-btn">Explore More</Button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
