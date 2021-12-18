import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import menuButton from "../assets/Menu button.png";
import closeMenuIcon from "../assets/Menu cancel button.png";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    // <div className="grid grid-cols-2 gap-4 flex-1">
    //
    //   <Link to="/">Home</Link>
    //   <Link to="/about">About</Link>
    // </div>

    <nav class="bg-transparent">
      <div class="flex  justify-between align-top sm:px-24 px-6 py-14">
        <div>
          <Link to="/">
            <img
              src={logo}
              className="w-12 md:w-16 lg:w-20"
              alt="Remora Logo"
            />
          </Link>
        </div>
        <div class="hidden md:flex items-center space-x-1">
          <Link
            to="/contact"
            className="border-2  border-solid border-grey  py-4 px-8 rounded-full font-[700] hover:bg-white hover:cursor-pointer hover:text-black  duration-1000"
          >
            Contact Us
          </Link>
        </div>
        <div
          className="sm:hidden"
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <img src={menuButton} alt="open menu icon" />
        </div>
      </div>

      {openMenu && (
        <div class="fixed inset-0 bg-black  overflow-y-auto h-full w-full">
          <div
            className="grid place-items-end p-6"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            <img src={closeMenuIcon} alt="Close Menu Icon" />
          </div>
          <div className="grid place-items-center h-screen">
            <Link
              to="/contact"
              className="border-2 align-middle justify-center border-solid border-grey  py-4 px-8 rounded-full font-[700] hover:bg-white hover:cursor-pointer hover:text-black  duration-1000"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
