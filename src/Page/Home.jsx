import React from 'react'
import { motion } from "framer-motion"
import About from '../components/About/About'
import CounterUp from '../components/CounterUp/CounterUp'
import Slider from "../components/main-slider/Sliders"
import Services from '../components/Services/Services'
import Plan from "../components/Plan/WashingPlan"
import Appointment from '../components/Appointment/Appointment'
import Workers from '../components/Workers/Workers'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <Slider/>
            <About/>
            <Services/>
            <CounterUp/>
            <Plan/>
            <Appointment/>
            <Workers/>
            <Testimonials/>
        </motion.div>
    )
}

export default Home
