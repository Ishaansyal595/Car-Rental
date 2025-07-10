import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import carLogo from "../assets/carLogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-transparent h-15 flex justify-between items-center backdrop-blur-lg backdrop-opacity-80 shadow-md px-10">
      <img src={carLogo} alt="" className="h-10" />

      <div className="flex justify-center items-center gap-5 font-semibold">
        <NavLink className="hover:border-b-black hover:border-b" to={"/"}>
          Home
        </NavLink>

        <NavLink className="hover:border-b-black hover:border-b" to={"/cars"}>
          Cars
        </NavLink>

        <NavLink
          className="hover:border-b-black hover:border-b"
          to={"/Blogs"}
        >
          Blogs
        </NavLink>

        <NavLink className="hover:border-b-black hover:border-b" to={"/about"}>
          Why Choose Us
        </NavLink>

        <NavLink
          className="hover:border-b-black hover:border-b"
          to={"/contact-us"}
        >
          Contact Us
        </NavLink>
      </div>

      <div className="flex justify-center items-center gap-5">
        <button className="bg-orange-400 py-1 px-4 rounded-full text-white">
          Login
        </button>

        <IoSunnyOutline size={20} />
      </div>
    </div>
  );
};

export default Navbar;
