import React from "react";
import CarCategoryPagesLayout from "../CarCategoryPagesLayout";
import hatchbackImg from "../../assets/baleno.png";

const HatchbacksPage = () => {
  return (
    <CarCategoryPagesLayout
      title="Hatchbacks"
      image={hatchbackImg}
      description="Compact and efficient cars perfect for city life."
      details={[
        "Small size makes them easy to park and drive.",
        "Usually more affordable and fuel-efficient.",
        "Ideal for daily commutes."
      ]}
      models={[
        { name: "Maruti Suzuki Baleno", description: "Spacious premium hatchback.", image: hatchbackImg },
        { name: "Hyundai i20", description: "Sporty design and modern features.", image: hatchbackImg },
        { name: "Tata Altroz", description: "High safety and solid build.", image: hatchbackImg }
      ]}
    />
  );
};

export default HatchbacksPage;
