import React from 'react'
import { motion } from "framer-motion"
import PageCard from "../components/PageCard/Card"
import AboutComponent from "../components/About/About"
import CounterUp from '../components/CounterUp/CounterUp'
import Workers from '../components/Workers/Workers'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <PageCard>
               <div className="section_page">
                   <h1 className="text-center">About Us</h1>
               <Link to="/" >Home</Link><b>/</b><span>About Us</span>
               </div>
            </PageCard>
           <AboutComponent/>
           <CounterUp/>
           <Workers/>
        </motion.div>
    )
}

export default About
