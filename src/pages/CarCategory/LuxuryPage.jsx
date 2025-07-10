import React from "react";
import luxuryImg from "../../assets/luxuries-car.png";
import CarCategoryPagesLayout from "../CarCategoryPagesLayout";

const LuxuryPage = () => {
  return (
    <CarCategoryPagesLayout
      title="Luxury Cars"
      image={luxuryImg}
      description="Experience unmatched comfort, style, and technology."
      details={[
        "Premium materials and advanced features.",
        "Powerful engines and refined ride.",
        "Status symbol among car owners."
      ]}
      models={[
        { name: "Mercedes-Benz C-Class", description: "Luxury sedan with modern tech.",image: luxuryImg },
        { name: "BMW 3 Series", description: "Sporty yet comfortable.", image: luxuryImg },
        { name: "Audi A4", description: "Elegant design and premium feel.",image: luxuryImg }
      ]}
    />
  );
};

export default LuxuryPage;
