import React from "react";
import { SiLeaderprice } from "react-icons/si";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <SiLeaderprice size={60} className="text-white" />,
    text: "Lorem ipsum dolor, sit amet consectetur commodi odit ipsa nostrum? Omnis ut doloremque praesentium quibusdam quod voluptatum impedit nihil modi?",
    button: "Learn More",
  },
  {
    icon: <AiTwotoneSafetyCertificate size={60} />,
    text: "Lorem ipsum dolor, sit amet consectetur commodi odit ipsa nostrum? Omnis ut doloremque praesentium quibusdam quod voluptatum impedit nihil modi?",
    button: "Learn More",
  },
  {
    icon: <FaRegAddressCard size={60} className="text-white" />,
    text: "Lorem ipsum dolor, sit amet consectetur commodi odit ipsa nostrum? Omnis ut doloremque praesentium quibusdam quod voluptatum impedit nihil modi?",
    button: "Learn More",
  },
];

const WhyChooseUsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-10 my-40 md:my-0 md:px-20 h-screen gap-5">
      <h2 className="text-3xl font-semibold">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 text-white">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-gray-950 flex flex-col justify-between items-center px-4 py-6 gap-8 h-80 hover:-translate-y-2 hover:shadow-black hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // each card appears with slight delay
          >
            <span>{card.icon}</span>
            <span>{card.text}</span>
            <span>{card.button}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
