import React from "react";
import Page from "../Page/Page";
import "./counter.css";
import {IoLocationSharp} from "react-icons/io5"
import {AiOutlineUser} from "react-icons/ai"
import {IoPeopleSharp} from "react-icons/io5"
import {TiTick} from "react-icons/ti"



const CounterUp = () => {
  return (
    <div className="counterup align-center">
      <Page className="align-center">
          <ul className="counter_feature ">
          <li className="d-flex align-center">
        <div className="counter_icon">
           <IoLocationSharp/>
          </div>
          <div className="counter-text">
           
            <h1>25</h1>
            <span>Service Points</span>
          </div>
        </li>
        <li className="d-flex align-center">
        <div className="counter_icon">
           <AiOutlineUser/>
          </div>
          <div className="counter-text">
            
            <h1>350</h1>
            <span>Engineers & Workers</span>
          </div>
        </li>
        <li className="d-flex align-center">
        <div className="counter_icon">
           <IoPeopleSharp/>
          </div>
          <div className="counter-text">
          
            <h1>1500</h1>
            <span>Happy Clients</span>
          </div>
        </li>
        <li className="d-flex align-center">
        <div className="counter_icon">
           <TiTick/>
          </div>
          <div className="counter-text">
           
            <h1>5000</h1>
            <span>Projects Completed</span>
          </div>
        </li>
          </ul>
      </Page>
    </div>
  );
};

export default CounterUp;
