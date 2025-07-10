import React from "react";
import CarsHeroSection from "../components/Cars/CarsHeroSection";
import CarDetailsContainer from "../components/CarDetailsContainer";

import crossover from "../assets/rent-1.png";
import hatchback from "../assets/baleno.png";
import luxury from "../assets/luxuries-car.png";
import mpv from "../assets/innova.png";
import sedan from "../assets/sedan.png";
import sports from "../assets/sports.png";
import suv from "../assets/rent-3.png";

const Cars = () => {
  return (
    <div>
      <CarsHeroSection />
      <CarDetailsContainer
        title="CrossOver"
        image={crossover}
        dark
        navigate="/cars/crossovers"
      />
      <CarDetailsContainer
        title="Hatchback"
        image={hatchback}
        reverse
        ml="-ml-45"
        navigate="/cars/hatchbacks"
      />
      <CarDetailsContainer
        title="Luxury"
        image={luxury}
        dark
        navigate="/cars/luxuries"
      />
      <CarDetailsContainer
        title="MPV (Multi Purpose Vehicle)"
        image={mpv}
        reverse
        ml="-ml-15"
        navigate="/cars/mpv"
      />
      <CarDetailsContainer
        title="Sedan"
        image={sedan}
        dark
        height="h-70"
        navigate="/cars/sedans"
      />
      <CarDetailsContainer
        title="Sports"
        image={sports}
        reverse
        navigate="/cars/sports"
      />
      <CarDetailsContainer title="SUV" image={suv} dark navigate="/cars/suv" />
    </div>
  );
};

export default Cars;
