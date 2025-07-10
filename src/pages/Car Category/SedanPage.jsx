// src/pages/SedansPage.jsx
import React from "react";
import sedanImg from "../../assets/sedan.png";
import CarCategoryPagesLayout from "../CarCategoryPagesLayout";

const SedanPage = () => {
  return (
    <CarCategoryPagesLayout
      title="Sedans"
      image={sedanImg}
      description="Explore popular sedans in India that offer style, comfort, and efficiency."
      details={[
        "Sedans have a three-box configuration with separate compartments for engine, passengers, and cargo.",
        "Known for better ride comfort and boot space.",
        "Popular among both families and executives.",
      ]}
      models={[
        {
          name: "Honda City",
          description:
            "Premium mid-size sedan known for comfort and reliability.",
          image: sedanImg,
        },
        {
          name: "Hyundai Verna",
          description: "Feature-rich with sporty styling.",
          image: sedanImg,
        },
        {
          name: "Maruti Suzuki Ciaz",
          description: "Spacious sedan with great fuel efficiency.",
          image: sedanImg,
        },
        {
          name: "Skoda Slavia",
          description: "European design and solid build quality.",
          image: sedanImg,
        },
        {
          name: "Volkswagen Virtus",
          description: "Fun-to-drive with modern tech features.",
          image: sedanImg,
        },
      ]}
    />
  );
};

export default SedanPage;
