import React from "react";
import Page from "../Page/Page";
import "./worker.css";
import team1 from "../../img/team-1.jpg";
import team2 from "../../img/team-2.jpg";
import team3 from "../../img/team-3.jpg";
import team4 from "../../img/team-4.jpg";
import Social from "../social-icon/Social";

const Workers = () => {
  return (
    <div className="worker_section">
      <Page className="justify-center">
        <div className="worker justify-center flex-col align-center">
          <div className="worker_title">
            <h3>Meet Our Team</h3>
          </div>
          <div className="enginers_title">
            <h1> Our Engineers & Workers</h1>
          </div>

          <div className="worker_cards d-flex">
            <div className="worker_card">
              <div className="worker_img">
                {" "}
                <img src={team1} alt="" />
              </div>
              <div className="worker_social justify-center">
                <Social className="social" />
              </div>
              <div className="worker_name text-center">
                <h6>Donald John</h6>
              </div>
              <div className="employee text-center">
                <h6>Engineer</h6>
              </div>
            </div>
            <div className="worker_card">
              <div className="worker_img">
                {" "}
                <img src={team2} alt="" />
              </div>
              <div className="worker_social justify-center">
              <Social className="social" />
              </div>
              <div className="worker_name text-center">
                <h6>Donald John</h6>
              </div>
              <div className="employee text-center">
                <h6>Engineer</h6>
              </div>
            </div>
            <div className="worker_card">
              <div className="worker_img">
                {" "}
                <img src={team3} alt="" />
              </div>
              <div className="worker_social justify-center">
              <Social className="social" />
              </div>
              <div className="worker_name text-center">
                <h6>Donald John</h6>
              </div>
              <div className="employee text-center">
                <h6>Engineer</h6>
              </div>
            </div>
            <div className="worker_card">
              <div className="worker_img">
                {" "}
                <img src={team4} alt="" />
              </div>
              <div className="worker_social justify-center">
              <Social className="social" />
              </div>
              <div className="worker_name text-center">
                <h6>Donald John</h6>
              </div>
              <div className="employee text-center">
                <h6>Engineer</h6>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Workers;
