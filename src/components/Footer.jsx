import React from "react";
import { BiSolidNavigation } from "react-icons/bi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-10 w-full">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-semibold">Car Rentals</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          dolore!
        </p>
        <span className="flex items-center gap-2">
          <BiSolidNavigation /> Ludhiana, Punjab
        </span>
        <span className="flex items-center gap-2">
          <MdOutlinePhoneIphone /> +91 1234567890
        </span>
        <span className="flex items-center gap-2">
          <FaInstagram size={30} /> <FaLinkedin size={30} />{" "}
          <FaFacebookSquare size={30} />
        </span>
      </div>

      <div className="flex flex-col gap-8">
        <h2>Important Links</h2>
        <span>
          ⮚ <a href="#">Home</a>
        </span>
        <span>
          ⮚ <a href="#">About</a>
        </span>
        <span>
          ⮚ <a href="#">Contact</a>
        </span>
        <span>
          ⮚ <a href="#">Blog</a>
        </span>
      </div>

      <div className="flex flex-col gap-8">
        <h2>Important Links</h2>
        <span>
          ⮚ <a href="#">Home</a>
        </span>
        <span>
          ⮚ <a href="#">About</a>
        </span>
        <span>
          ⮚ <a href="#">Contact</a>
        </span>
        <span>
          ⮚ <a href="#">Blog</a>
        </span>
      </div>

      <div className="flex flex-col gap-8">
        <h2>Important Links</h2>
        <span>
          ⮚ <a href="#">Home</a>
        </span>
        <span>
          ⮚ <a href="#">About</a>
        </span>
        <span>
          ⮚ <a href="#">Contact</a>
        </span>
        <span>
          ⮚ <a href="#">Blog</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
