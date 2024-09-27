import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            possimus labore amet voluptatibus fugiat eos, est consequatur
            architecto delectus inventore dignissimos commodi aliquid ratione,
            cumque nobis odio cum ex harum!
          </p>
        </div>
        {/* Center section */}
        <div>
          <p className="tex-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* Right section */}
        <div>
          <p className="tex-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+98-999-999-9999</li>
            <li>example@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* --------------Copyright Text ----------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Prescripto - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
