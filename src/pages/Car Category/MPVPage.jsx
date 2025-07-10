import React from "react";
import mpvImg from "../../assets/innova.png";
import CarCategoryPagesLayout from "../CarCategoryPagesLayout";

const MPVPage = () => {
  return (
    <CarCategoryPagesLayout
      title="MPV (Multi Purpose Vehicle)"
      image={mpvImg}
      description="Spacious cars ideal for families and group travel."
      details={[
        "Can carry 6-8 passengers comfortably.",
        "Versatile seating configurations.",
        "Good choice for long trips."
      ]}
      models={[
        { name: "Toyota Innova Crysta", description: "Most trusted MPV in India.", image: mpvImg },
        { name: "Maruti Suzuki Ertiga", description: "Affordable and practical 7-seater.", image: mpvImg },
        { name: "Kia Carens", description: "Modern design and flexible seating.", image: mpvImg }
      ]}
    />
  );
};

export default MPVPage;
