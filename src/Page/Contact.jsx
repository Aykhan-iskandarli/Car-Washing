import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import PageCard from "../components/PageCard/Card"

const Contact = () => {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
                 <PageCard>
        <div className="section_page">
          <div className="border">
            <h1 className="text-center ">Contact</h1>
          </div>
          <Link to="/">Home</Link>
          <b>/</b>
          <span>Contact</span>
        </div>
      </PageCard>
            
        </motion.div>
    )
}

export default Contact
