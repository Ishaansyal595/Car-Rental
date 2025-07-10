import React from "react";

import scorpio2 from "../assets/scorpio2.png";
import scorpio from "../assets/scorpio.png";
import bronco from "../assets/aboutuscar.png";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";
import { motion } from "framer-motion";

const bookingPrice = [
  {
    fuel: "Petrol",
    image: scorpio2,
    name: "Scorpio 2",
    price: "₹1000/Day",
  },
  {
    fuel: "Diesel",
    image: scorpio,
    name: "Scorpio",
    price: "₹700/Day",
  },
  {
    fuel: "CNG",
    image: bronco,
    name: "Bronco",
    price: "₹700/Day",
  },
];

const CarPricingCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
      {bookingPrice.map((book, index) => (
        <motion.div
          className="relative border border-yellow-300 rounded-xl w-full p-3 group overflow-hidden hover:-translate-y-2 hover:shadow-white hover:shadow-lg transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.2 }}
        >
          <span className="absolute top-3 left-3 border border-white rounded-md px-2">
            {book.fuel}
          </span>

          <div className="flex flex-col items-center">
            <img
              src={book.image}
              alt={book.name}
              className="h-40 object-contain text-center"
            />

            <p>{book.name}</p>

            <div className="flex justify-center items-center gap-5 my-2">
              <span className="flex justify-center items-center gap-2 text-gray-300">
                <MdOutlineAirlineSeatReclineNormal /> 4 Seater
              </span>
              <span className="flex justify-center items-center gap-2 text-gray-300">
                <TbManualGearbox />
                Manual
              </span>
            </div>

            <span className="font-semibold">{book.price}</span>

            <div className="flex justify-center items-center gap-5 my-5 ">
              <span className="bg-orange-400 text-white py-1 px-3 rounded-md cursor-pointer  border-orange-400  border hover:bg-transparent hover:text-orange-400 transition-all duration-200">
                Details
              </span>
              <span className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white py-1 px-3 rounded-md cursor-pointer transition-all duration-200">
                Book Now
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CarPricingCard;
