import React from "react";
import { Link } from "react-router-dom";
import phoneImage from "../assets/group/phone.png";

export default function Home() {
  return (
    <div className="h-full sm:grid sm:grid-cols-2 justify-between align-middle w-full px-6 mt-0 pt-0  lg:mt-50 sm:pl-24">
      <div className="lg:mt-32">
        <p className="font-extrabold text-5xl lg:text-7xl leading-snug">
          A New <br />
          Banking <br />
          Experience.
        </p>
        <div className="grid grid-cols-2 gap-1 bg-white rounded-3xl p-2  mt-8 w-80 lg:w-96">
          <div>
            <Link
              to="/about"
              className="bg-black rounded-3xl p-4  flex  align-middle justify-center  hover:bg-white hover:cursor-pointer hover:text-black hover:border-black border-2 duration-1000"
            >
              About Us
            </Link>
          </div>
          <div>
            <Link
              className="text-black rounded-3xl justify-center align-middle flex p-4 font-semibold hover:cursor-pointer hover:border-2 hover:border-black duration-500"
              to="/waitlist"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>

      <div className="flex sm:place-content-end">
        <img alt="Remora app" className="w-auto lg:h-5/6" src={phoneImage} />
      </div>
    </div>
  );
}
