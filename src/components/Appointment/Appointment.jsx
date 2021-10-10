import React from "react";
import "./appointment.css";
import Page from "../Page/Page";
import { IoLocationSharp } from "react-icons/io5";
import Button from "../Button/Button";

const Appointment = () => {
  return (
    <div className="appointment_section">
      <Page className="justify-center">
        <div className="row">
          <div className="appointment d-flex">
            <div className="col-6  w-full">
              <div className="appointment_title">
                <h3>Washing Points</h3>
              </div>
              <h1>Car Washing & Care Points</h1>
              <ul className="justify-between">
                <li className="d-flex align-center">
                  <div className="appointment_icon">
                    <IoLocationSharp />
                  </div>
                  <div className="appointment-text">
                    <h4>Car Washing Point</h4>
                    <p>123 Street, New York, USA</p>
                    <span>
                      {" "}
                      <b>Call:</b> +012 345 6789
                    </span>
                  </div>
                </li>
                <li className="d-flex align-center">
                  <div className="appointment_icon">
                    <IoLocationSharp />
                  </div>
                  <div className="appointment-text">
                    <h4>Car Washing Point</h4>
                    <p>123 Street, New York, USA</p>
                    <span>
                      {" "}
                      <b>Call:</b> +012 345 6789
                    </span>
                  </div>
                </li>
              </ul>
              <ul className="justify-between mt-4">
                <li className="d-flex align-center">
                  <div className="appointment_icon">
                    <IoLocationSharp />
                  </div>
                  <div className="appointment-text">
                    <h4>Car Washing Point</h4>
                    <p>123 Street, New York, USA</p>
                    <span>
                      {" "}
                      <b>Call:</b> +012 345 6789
                    </span>
                  </div>
                </li>
                <li className="d-flex align-center">
                  <div className="appointment_icon">
                    <IoLocationSharp />
                  </div>
                  <div className="appointment-text">
                    <h4>Car Washing Point</h4>
                    <p>123 Street, New York, USA</p>
                    <span>
                      {" "}
                      <b>Call:</b> +012 345 6789
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-6 w-full justify-center flex-col align-center">
              <div className="form justify-center flex-col align-center">
                <h5>Request for a car wash</h5>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="form-control"
                      placeholder="description"
                    ></textarea>
                  </div>
                  <div className="appointment_button">
                    <Button className="btn-app">Send Request</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Appointment;
