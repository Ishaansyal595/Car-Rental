import React from "react";
import crossoverImg from "../../assets/rent-1.png";
import CarCategoryPagesLayout from "../CarCategoryPagesLayout";

const CrossoversPage = () => {
  return (
    <CarCategoryPagesLayout
      title="Crossovers"
      image={crossoverImg}
      description="Stylish and versatile cars combining SUV looks with car-like comfort."
      details={[
        "Built on a car platform but styled like an SUV.",
        "Ideal for city driving with occasional rough roads.",
        "Compact size and better mileage.",
      ]}
      models={[
        {
          name: "Hyundai Venue",
          description: "Feature-rich compact crossover.",
          image: crossoverImg
        },
        {
          name: "Kia Sonet",
          description: "Sporty design and premium interior.",
          image: crossoverImg
        },
        {
          name: "Tata Nexon",
          description: "High safety rating and modern design.",
          image: crossoverImg
        },
      ]}
    />
  );
};

export default CrossoversPage;
