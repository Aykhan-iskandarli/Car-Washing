import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Page from "../Page/Page";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "../Button/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="navbar_section align-center d-flex ">
        <Page className="align-center  ">
          <nav className="align-center  justify-between">
            <ul className={open ? " navbar  active_navbar" : "navbar "}>
              <li>
                {" "}
                <Link to="/" onClick={() => setOpen(!open)}>
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/about" onClick={() => setOpen(!open)}>
                  About
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/service" onClick={() => setOpen(!open)}>
                  Service
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/price" onClick={() => setOpen(!open)}>
                  Price
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/washing" onClick={() => setOpen(!open)}>
                  Washing Points
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/"
                  className="d-flex align-center"
                  onClick={() => setOpen(!open)}
                >
                  Pages
                  <IoMdArrowDropdown />
                </Link>
                {/* <ul className={dropdown?"dropdown":"dropdown_off"}>
                  <li><Link to="/">Blog Grid</Link></li>
                  <li><Link to="/">Blog Grid</Link></li>
                  <li><Link to="/">Blog Grid</Link></li>
                  <li><Link to="/">Blog Grid</Link></li>
                </ul> */}
              </li>
              <li>
                {" "}
                <Link to="/contact" onClick={() => setOpen(!open)}>
                  Contact
                </Link>
              </li>
            </ul>
            <Link to="/washing" className="navbar_button">
              <Button className="btn-nav">Get Appointment</Button>
            </Link>
          </nav>

          <div
            className={open ? "hamburger active" : "hamburger"}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Page>
      </div>
    </div>
  );
};

export default Navbar;
