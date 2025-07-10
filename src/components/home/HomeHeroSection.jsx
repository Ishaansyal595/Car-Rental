import React, { useEffect, useState } from "react";
import jeep2 from "../../assets/jeep-2.png";
import CalendarPicker from "../CalendarPicker";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomeHeroSection = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  console.log(value);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center my-10 md:-my-7.5 w-full px-10 md:px-20 h-screen">
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-5xl font-bold w-full">
          Fast And Easy Way To Rent A Car
        </h1>
        <p className="w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          numquam velit quia, tenetur laborum illum vel esse id totam
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:justify-between items-center">
          <div className="flex flex-col gap-5 ">
            <label htmlFor="" className="text-xl font-semibold">
              Select Your Car Type
            </label>
            <select
              name="car_type"
              id="car_type"
              className="border border-black md:w-45 p-2 rounded-full w-full"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="" defaultValue={"select a category"}>
                Select a Category
              </option>
              <option value={"crossovers"}>Crossovers</option>
              <option value={"hatchbacks"}>Hatchbacks</option>
              <option value={"luxuries"}>Luxury</option>
              <option value={"mpv"}>MPV</option>
              <option value={"suv"}>SUV</option>
              <option value={"sedans"}>Sedan</option>
              <option value={"sports"}>Sports</option>
            </select>
          </div>

          <CalendarPicker />
        </div>

        <button
          className="bg-orange-400 hover:bg-amber-600 cursor-pointer transition duration-300 text-white p-2 rounded-full"
          onClick={() => navigate(`/cars/${value}`)}
        >
          Book Now
        </button>
      </div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img src={jeep2} alt="Dark Porsche" className={`w-full `} />
      </motion.div>
    </div>
  );
};

export default HomeHeroSection;
