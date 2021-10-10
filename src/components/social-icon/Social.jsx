import React from 'react'
import "./social.css"
import {BsTwitter} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const Social = ({className}) => {
    return (
        <div >
            <div className="social d-flex">
                <div className={`twitter ${className}`}>
                    <BsTwitter/>
                </div>
                <div className={`face ${className}`}>
                    <FaFacebookF/>
                </div>
                <div className={`linkedin ${className}`}>
                    <FaLinkedinIn/>
                </div>
                <div className={`instagram ${className}`}>
                    <FaInstagram/>
                </div>
            </div>
        </div>
    )
}

export default Social
