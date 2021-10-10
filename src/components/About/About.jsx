import React from 'react'
import Page from '../Page/Page'
import "./about.css"
import aboutimg from "../../img/about.jpg"
import {MdOutlineGppGood} from "react-icons/md"
import Button from '../Button/Button'

const About = () => {
    return (
        <div className="about_section">
            <Page className="">
                <div className="row justify-center">
                    <div className="about_wrapper">
                    <div className="col-6">
                        <div className="about_img">
                            <img src={aboutimg} alt="" />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="about_content">
                            <div className="about-title">
                                <h4>About Us</h4>
                            </div>
                            <div className="about_detail_title">
                                <h2>Car Washing And Detailing</h2>
                            </div>
                            <div className="about_desc">
                                <p>Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in hendre dui, vel blandit massa. Ut vestibu suscipi cursus. Cras quis porta nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum</p>
                            </div>
                            <div className="about_service flex-col">
                                <span className="align-center"><MdOutlineGppGood/>Seats washing</span>
                                <span className="align-center"><MdOutlineGppGood/>Vacuum cleaning</span>
                                <span className="align-center"><MdOutlineGppGood/>Interior wet cleaning</span>
                                <span className="align-center"><MdOutlineGppGood/>Window wiping</span>
                            </div>
                            <div className="about_button">
                                <Button className="about-btn">Learn More</Button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Page>
        </div>
    )
}

export default About
