import React from "react";
import { useNavigate } from "react-router-dom";

const CarDetailsContainer = (props) => {
const navigate = useNavigate()

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen px-10 md:px-20 cursor-pointer ${
        props.dark && "bg-gray-950 text-white"
      }`}
      onClick={() => navigate(props.navigate)}
    >
      <h1 className="text-3xl font-bold">{props.title}</h1>
      <p className="my-5 w-3xl text-center font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam
        consequuntur suscipit ipsum quaerat assumenda aut blanditiis laboriosam
        error totam?
      </p>

      <div
        className={`flex w-full justify-center items-center gap-10 ${
          props.reverse && "flex-row-reverse"
        }`}
      >
        <img src={props.image} alt="" className={`hover:scale-110 transition-all duration-300 ${props.height} ${props.ml} w-full`} />

        <div className="flex flex-col gap-8 w-full">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            dicta quibusdam vero, quo beatae dolores minima, nam voluptatem
            praesentium dolorem quae delectus doloremque, est atque ut earum
            harum doloribus nisi!
          </span>

          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            dicta quibusdam vero, quo beatae dolores minima, nam voluptatem
            praesentium dolorem quae delectus doloremque, est atque ut earum
            harum doloribus nisi!
          </span>

          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            dicta quibusdam vero, quo beatae dolores minima, nam voluptatem
            praesentium dolorem quae delectus doloremque, est atque ut earum
            harum doloribus nisi!
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsContainer;
