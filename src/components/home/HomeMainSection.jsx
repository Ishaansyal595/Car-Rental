import React from "react";
import bmw from "../../assets/main_car.png";
import { motion } from "framer-motion";

const HomeMainSection = () => {
  return (
    <div className="bg-gray-950 grid grid-cols-1 md:grid-cols-2 items-center h-screen px-10 md:px-20">
      <motion.div
        className="w-full -mb-40 md:mb-0 overflow-hidden"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img src={bmw} alt="" />
      </motion.div>

      <motion.div
        className="w-full flex flex-col justify-center items-center text-center gap-5 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl">About Us</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          iusto quisquam suscipit, natus vel cum earum vero modi debitis
          incidunt eum veniam, quo laudantium cupiditate pariatur dolores
          dignissimos ab excepturi!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          iusto quisquam suscipit, natus vel cum earum vero modi debitis
          incidunt eum veniam, quo laudantium cupiditate pariatur dolores
          dignissimos ab excepturi!
        </p>
        <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300 w-3xs p-2 mt-10">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default HomeMainSection;
