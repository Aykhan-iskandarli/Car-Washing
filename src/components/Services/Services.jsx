import React from "react";
import "./service.css";
import Page from "../Page/Page";
import { RiCarWashingFill } from "react-icons/ri";

const Services = () => {
  return (
    <div className="services_section">
      <Page>
        <div className="row justify-center">
          <div className="services_wrapper col">
            <div className="services_title">
              <h4>WHAT WE DO?</h4>
            </div>
            <div className="services_washing_title">
              <h1>Premium Washing Services</h1>
            </div>
            <div className="washing_services">
              <div className="row mobil_flex ">
                <div className="col-3 text-center">
                  <div className="services_icon">
                    <RiCarWashingFill />
                  </div>
                  <div className="services_name">
                    <h3>Exterior Washing</h3>
                  </div>
                  <div className="services_desc ">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phase nec preti facils
                      ornare velit non metus tortor
                    </p>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <div className="services_icon">
                    <RiCarWashingFill />
                  </div>
                  <div className="services_name">
                    <h3>Interior Washing</h3>
                  </div>
                  <div className="services_desc">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phase nec preti facils
                      ornare velit non metus tortor
                    </p>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <div className="services_icon">
                    <RiCarWashingFill />
                  </div>
                  <div className="services_name">
                    <h3>Vacuum Cleaning</h3>
                  </div>
                  <div className="services_desc">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phase nec preti facils
                      ornare velit non metus tortor
                    </p>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <div className="services_icon">
                    <RiCarWashingFill />
                  </div>
                  <div className="services_name">
                    <h3>Seats Washing</h3>
                  </div>
                  <div className="services_desc">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phase nec preti facils
                      ornare velit non metus tortor
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mobil_flex  mt-4">
              <div className="col-3 text-center">
                  <div className="services_icon">
                    <RiCarWashingFill />
                  </div>
                  <div className="services_name">
                    <h3>Window Wiping</h3>
                  </div>
                  <div className="services_desc">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phase nec preti facils
                      ornare velit non metus tortor
                    </p>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <div className="services_icon">
                    <RiCarWashingFill />
                  </div>
                  <div className="services_name">
                    <h3>Wet Cleaning</h3>
                  </div>
                  <div className="services_desc">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phase nec preti facils
                      ornare velit non metus tortor
                    </p>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <div className="services_icon">
                    <RiCarWashingFill />
                  </div>
                  <div className="services_name">
                    <h3>Oil Changing</h3>
                  </div>
                  <div className="services_desc">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phase nec preti facils
                      ornare velit non metus tortor
                    </p>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <div className="services_icon">
                    <RiCarWashingFill />
                  </div>
                  <div className="services_name">
                    <h3>Brake Reparing</h3>
                  </div>
                  <div className="services_desc">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phase nec preti facils
                      ornare velit non metus tortor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Services;
