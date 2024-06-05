import React from "react";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img className="w-16 lg:w-18" src="./assets/RM_logo.png" alt="logo" />
        <button className="bg-gradient-to-r from-blue-400 to-purple-400 font-medium text-sm text-[#2c2c2b] rounded-3xl px-2.5 py-1.5 lg:px-5 md:py-1">Real Madrid</button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-8 ">
        <li><a className="text-blue-500 font-semibold text-[13px] px-4 hover:underline hover:font-extrabold" href="#">Book Match Tickets</a></li>
        <li><a className="text-blue-500 font-semibold text-[13px] px-3 hover:underline hover:font-extrabold" href="#">Buy Jersey</a></li>
        <li><a className="text-blue-500 font-semibold text-[13px] px-3 hover:underline hover:font-extrabold" href="#">Santiago Bernabéu Stadium Ticekts</a></li>
        <li><a className="text-blue-500 font-semibold text-[13px] px-3 hover:underline hover:font-extrabold" href="#">Real Madrid's History</a></li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-3">
        <button className="text-blue-400 text-sm rounded-3xl bg-[#210563] px-5 py-1 hover:bg-blue-700 hover:text-black hover:font-bold" href="#">Sign In</button>
        <button className="text-blue-400 text-sm rounded-3xl bg-[#210563] px-5 py-1 hover:bg-blue-700 hover:text-black hover:font-bold">Join Us</button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
