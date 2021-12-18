import React from "react";
import fbIcon from "../assets/facebook.png";
import igIcon from "../assets/Group 75.png";
import ytIcon from "../assets/001-youtube.png";
import twitterIcon from "../assets/twitter.png";

export default function Contact() {
  return (
    <div className="mx-6 sm:mx-24">
      <p className="font-extrabold align-middle text-center  text-2xl sm:text-4xl leading-normal sm:leading-snug">
        Connect and stay updated with us <br /> on all our social media pages
      </p>
      <div className="grid grid-cols-4 place-items-center mt-10 px-10 sm:px-52 sm:mt-20">
        <img
          className="w-auto h-8 hover:cursor-pointer"
          src={fbIcon}
          alt="Facebook Logo"
        />
        <img
          className="w-auto h-8 hover:cursor-pointer"
          src={igIcon}
          alt="Instagram logo"
        />
        <img
          className="w-auto h-8 hover:cursor-pointer"
          src={ytIcon}
          alt="YouTube logo"
        />
        <img
          className="w-auto h-8 hover:cursor-pointer"
          src={twitterIcon}
          alt="Twitter Icon"
        />
      </div>
    </div>
  );
}
