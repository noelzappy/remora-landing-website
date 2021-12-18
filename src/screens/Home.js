import React from "react";
import { Link } from "react-router-dom";
import phoneImage from "../assets/Group 712.png";

export default function Home() {
  return (
    <div className="h-full sm:grid sm:grid-cols-2 justify-between  px-6  sm:px-24">
      <div>
        <p className="font-extrabold text-5xl sm:text-7xl leading-snug">
          A New <br />
          Banking <br />
          Experience.
        </p>
        <div className="grid grid-cols-2 gap-1 bg-white rounded-3xl p-2  mt-8 w-80 sm:w-96">
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

      <div>{/* <img src={phoneImage} /> */}</div>
    </div>
  );
}
