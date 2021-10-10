import React from 'react'
import { motion } from "framer-motion"
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'
import { Link } from 'react-router-dom'
import PageCard from "../components/PageCard/Card"

const Service = () => {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
                <PageCard>
               <div className="section_page">
               <div className="border">
                    <h1 className="text-center ">Service</h1>
                  </div>
               <Link to="/" >Home</Link><b>/</b><span>Service</span>
               </div>
            </PageCard>
          <Services/>
          <Testimonials/>
        </motion.div>
    )
}

export default Service
