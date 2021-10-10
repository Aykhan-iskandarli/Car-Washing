import React from "react";
import Page from "../Page/Page";
import "./testimonials.css";
import Sliderx from "../test_slider/T_Slider";

const Testimonials = () => {
  return (
    <div className="testimonials_section">
      <Page className="justify-center flex-col">
        <div className="testimonials  ">
          <div className="testimonials_title">
            <h3 className="text-center">TESTIMONIAL</h3> 
          </div>
          <div className="testimonials_client text-center">
            <h1>What Our Clients Say</h1>
          </div>
          <Sliderx/>
        </div>
      </Page>
    </div>
  );
};

export default Testimonials;
