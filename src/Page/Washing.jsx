import React from 'react'
import { motion } from "framer-motion"
import Appointment from '../components/Appointment/Appointment'
import { Link } from 'react-router-dom'
import PageCard from "../components/PageCard/Card"

const Washing = () => {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
              <PageCard>
               <div className="section_page">
                  <div className="border">
                    <h1 className="text-center ">Washing Points</h1>
                  </div>
                
               <Link to="/" >Home</Link><b>/</b><span>Washing Points</span>
               </div>
            </PageCard>
            <Appointment/>
        </motion.div>
    )
}

export default Washing
