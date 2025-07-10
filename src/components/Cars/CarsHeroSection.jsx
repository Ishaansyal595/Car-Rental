import React from "react";

import cars from "../../assets/cars.png";

const carTypes = [
  "Crossover",
  "Hatchbag",
  "Luxury",
  "MPV",
  "SUV",
  "Sedan",
  "Sports",
];

const CarsHeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">All Typers Of Cars</h1>
      <p className="my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam
        consequuntur suscipit ipsum quaerat assumenda aut blanditiis laboriosam
        error totam?
      </p>

      <div className="flex justify-center items-center gap-3">
        {carTypes.map((type) => (
          <span
            key={type}
            className="rounded-md py-1 px-3 bg-gray-600 text-white hover:bg-orange-400 transition-all duration-300 "
          >
            {type}
          </span>
        ))}
      </div>

      <div className="mt-10">
        <img src={cars} alt="Cars" />
      </div>
    </div>
  );
};

export default CarsHeroSection;
