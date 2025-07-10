import React from "react";
import yellowBackground from "../assets/yellowbackground.jpg";
import gooleplay from "../assets/gooleplay.png";
import appstore from "../assets/appstore.png";

const GetStarted = () => {
  return (
    <div className="h-screen w-full px-20  flex justify-center items-center">
      <div
        className="bg-cover bg-center flex justify-center items-center relative h-96 w-full px-30"
        style={{ backgroundImage: `url(${yellowBackground})` }}
      >
        <div className="text-black z-10 flex flex-col gap-10 items-center justify-center text-center">
          <p className=" text-3xl font-semibold">Get Started With Our App</p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            commodi incidunt, provident assumenda sint ipsam suscipit unde
          </p>

          <div className="flex justify-center items-center gap-10">
            <img src={gooleplay} alt="" className="w-60"/>
            <img src={appstore} alt="" className="w-60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
