import React from "react";
import "./plan.css";
import Page from "../Page/Page";
import { MdOutlineGppGood } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import Button from "../Button/Button";

const WashingPlan = () => {
  return (
    <div className="plan_section">
      <Page className="justify-center">
        <div className="plan">
          <h3 className="text-center">Washing Plan</h3>
          <h1 className="text-center">Choose Your Plan</h1>
          <div className="cards mt-4">
            <div className="card">
              <div className="plan_title text-center">BASIC CLEANING</div>
              <div className="plan_price text-center">$ 25<span>.99</span></div>
              <div className="plan_package d-flex flex-col text-center">
                <span>
                  <MdOutlineGppGood /> Seats Washing
                </span>
                <span>
                  <MdOutlineGppGood /> Vacuum Cleaning
                </span>
                <span>
                  <MdOutlineGppGood /> Exterior Cleaning
                </span>
                <span>
                  <MdOutlineGppGood /> Interior Wet Cleaning
                </span>
                <span>
                <TiDeleteOutline className="text-red"/> Window Wiping
                </span>
                <span>
                <TiDeleteOutline className="text-red"/> Window Wiping
                </span>
              </div>
              <div className="plan_button">
                <Button className="btn-plan">Book Now</Button>
              </div>
            </div>
            <div className="card" style={{width:"350px", height:"480px",position:"relative", top:"-20px"}}>
              <div className="plan_title text-center text-red">PREMIUM CLEANING</div>
              <div className="plan_price text-center text-red">$ 35<span>.99</span></div>
              <div className="plan_package d-flex flex-col text-center">
                <span>
                  <MdOutlineGppGood /> Seats Washing
                </span>
                <span>
                  <MdOutlineGppGood /> Vacuum Cleaning
                </span>
                <span>
                  <MdOutlineGppGood /> Exterior Cleaning
                </span>
                <span>
                  <MdOutlineGppGood /> Interior Wet Cleaning
                </span>
                <span>
                <MdOutlineGppGood /> Interior Wet Cleaning
                </span>
                <span>
                <TiDeleteOutline className="text-red"/> Window Wiping
                </span>
              </div>
              <div className="plan_button">
                <Button className="btn-plan red">Book Now</Button>
              </div>
            </div>
            <div className="card">
              <div className="plan_title text-center">COMPLEX CLEANING</div>
              <div className="plan_price text-center">$ 49<span>.99</span></div>
              <div className="plan_package d-flex flex-col text-center">
                <span>
                  <MdOutlineGppGood /> Seats Washing
                </span>
                <span>
                  <MdOutlineGppGood /> Vacuum Cleaning
                </span>
                <span>
                  <MdOutlineGppGood /> Exterior Cleaning
                </span>
                <span>
                  <MdOutlineGppGood /> Interior Wet Cleaning
                </span>
                <span>
                <MdOutlineGppGood /> Interior Wet Cleaning
                </span>
                <span>
                <MdOutlineGppGood /> Interior Wet Cleaning
                </span>
              </div>
              <div className="plan_button">
                <Button className="btn-plan">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default WashingPlan;
