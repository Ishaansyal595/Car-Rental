// src/pages/CarCategoryPage.jsx
import React from "react";
import ModelCarousal from "../components/ModelCarousal";

const CarCategoryPagesLayout = ({ title, image, description, details, models }) => {
  return (
    <div className="flex flex-col items-center justify-center px-10 md:px-20 py-10">
      <h1 className="text-4xl font-bold mb-5">{title}</h1>
      <img src={image} alt={title} className="my-5 max-w-md rounded-xl shadow-lg" />
      <p className="text-center mb-10 text-lg">{description}</p>

      <ul className="flex flex-col gap-4 max-w-3xl mb-10 list-disc list-inside text-left">
        {details.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-5">Models</h2>
      <div className="w-full max-w-7xl mx-auto">
        <ModelCarousal models={models} />
      </div>
    </div>
  );
};

export default CarCategoryPagesLayout;
