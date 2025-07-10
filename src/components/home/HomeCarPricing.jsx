import React from "react";
import CarPricingCard from "../CarPricingCard";

const HomeCarPricing = () => {
  return (
    <div className="grid grid-cols-1 items-center text-center px-20 py-10 gap-10 md:h-screen w-full bg-gray-950 text-white">
      <h2 className="text-3xl font-semibold md:-mb-5">Top Rated Car</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
        asperiores laborum veritatis ad magni, cupiditate odit. Doloribus
        voluptates temporibus, praesentium odio maxime, exercitationem pariatur
        quia impedit similique ut fugiat eius.
      </p>

      <CarPricingCard />

      <div className="flex justify-center items-center">
        <button className="border border-yellow-300 text-yellow-300 px-4 py-2 hover:bg-orange-400 hover:text-white transition-all duration-300 rounded-md ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomeCarPricing;
