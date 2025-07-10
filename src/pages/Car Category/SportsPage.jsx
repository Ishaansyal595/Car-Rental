import React from "react";
import sportsImg from "../../assets/sports.png";
import CarCategoryPagesLayout from "../CarCategoryPagesLayout";

const SportsPage = () => {
  return (
    <CarCategoryPagesLayout
      title="Sports Cars"
      image={sportsImg}
      description="Cars built for speed and driving thrill."
      details={[
        "Low-slung, aerodynamic design.",
        "Powerful engines and precise handling.",
        "Mostly two-door or coupe style."
      ]}
      models={[
        { name: "Porsche 911", description: "Iconic sports car.", image: sportsImg },
        { name: "BMW Z4", description: "Convertible roadster with sporty looks.", image: sportsImg },
        { name: "Jaguar F-Type", description: "Stylish and powerful.", image: sportsImg }
      ]}
    />
  );
};

export default SportsPage;
