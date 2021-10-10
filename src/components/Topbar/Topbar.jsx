import React from "react";
import Page from "../Page/Page";
import "./topbar.css";
import { Link } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Topbar = () => {
  return (

     <div className="topbar align-center">
       <Page className="justify-between">
      <div className="logo">
        <Link to="/">
          Auto<span>Wash</span>{" "}
        </Link>
      </div>
      <ul className="topbar_item d-flex ">
        <li className="d-flex align-center">
        <div className="topbar_icon">
            <FiClock />
          </div>
          <div className="topbar-text">
            <p>Opening Hour</p>
            <span>Mon-Fri, 8:00-9:00</span>
          </div>
        </li>
        <li className="d-flex align-center">
          <div className="topbar_icon">
            <BsFillTelephoneFill />
          </div>
          <div className="topbar-text">
            <p>Call Us</p>
            <span>+012 345 6789</span>
          </div>
        </li>
        <li className="d-flex align-center">
        <div className="topbar_icon">
            <HiOutlineMail />
          </div>
          <div className="topbar-text">
            <p>Email Us</p>
            <span>info@domain.com</span>
          </div>
        </li>
      </ul>
      </Page>
      </div>
 
  );
};

export default Topbar;
