import React from "react";
import "./footer.css";
import Page from "../Page/Page";
import Social from "../social-icon/Social";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../Button/Button"

const Footer = () => {
  return (
    <div className="footer_section ">
      <Page>
        <div className="footer d-flex justify-between align-center w-full">
    
      <ul className="footer_location">
            <h3>Get In Touch</h3>
            <li className="d-flex ">
              <IoLocationSharp /> <span>123 Street, New York, USA</span>
            </li>
            <li>
              <BsFillTelephoneFill /> +012 345 67890
            </li>
            <li>
              {" "}
              <GrMail /> info@domain.com
            </li>
            <Social className="footer-social" />
          </ul>
    
          <ul className="popular_links">
            <h3>Popular Links</h3>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/about">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">Our Service</Link>
            </li>
            <li>
              <Link to="/about">Service Points</Link>
            </li>
            <li>
              <Link to="/about">Pricing Plan</Link>
            </li>
          </ul>
          <ul className="useful_links">
            <h3>Useful Links</h3>
            <li>
              <Link to="/about">Terms of use</Link>
            </li>
            <li>
              <Link to="/about">Privacy</Link>
            </li>
            <li>
              <Link to="/about">Cookies</Link>
            </li>
            <li>
              <Link to="/about">Help</Link>
            </li>
            <li>
              <Link to="/about">FAQs</Link>
            </li>
          </ul>
          <ul>
            <h3>Newsletter</h3>
            <li>
              <input type="text" className="form-control" placeholder="Full Name" />
            </li>
            <li>
             <input type="email" className="form-control" placeholder="Email" />
            </li>
            <div className="footer_button">
                <Button className="btn-footer">Submit</Button>
            </div>
          </ul>
        </div>
      </Page>
      <p className="text-center mt-4 footer_end">
            <AiOutlineCopyrightCircle />{" "}
            <span>
              <Link to="/" >Your Site Name,</Link>All Rights Reserved. Designed
              By <a href="https://www.facebook.com/Axiles1907/">Axilles</a>
            </span>
          </p>
    </div>
  );
};

export default Footer;
