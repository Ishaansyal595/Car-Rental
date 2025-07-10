import React from "react";
import suvImg from "../../assets/rent-3.png";
import CarCategoryPagesLayout from "../CarCategoryPagesLayout";

const SUVPage = () => {
  return (
    <CarCategoryPagesLayout
      title="SUVs"
      image={suvImg}
      description="Rugged and powerful vehicles for city and adventure."
      details={[
        "Higher ground clearance and commanding road presence.",
        "Available in 2WD and 4WD variants.",
        "Spacious and versatile.",
      ]}
      models={[
        {
          name: "Mahindra XUV700",
          description: "Tech-loaded and powerful.",
          image: suvImg,
        },
        {
          name: "Hyundai Creta",
          description: "Balanced design and features.",
          image: suvImg,
        },
        {
          name: "Tata Harrier",
          description: "Bold styling and robust build.",
          image: suvImg,
        },
      ]}
    />
  );
};

export default SUVPage;
