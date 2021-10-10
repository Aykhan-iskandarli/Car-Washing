import React from "react";
import { motion } from "framer-motion";
import WashingPlan from "../components/Plan/WashingPlan";
import { Link } from "react-router-dom";
import PageCard from "../components/PageCard/Card";

const Price = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageCard>
        <div className="section_page">
          <div className="border">
            <h1 className="text-center ">Price</h1>
          </div>
          <Link to="/">Home</Link>
          <b>/</b>
          <span>Price</span>
        </div>
      </PageCard>
      <WashingPlan />
    </motion.div>
  );
};

export default Price;
