import React from "react";
import { Link } from "react-router-dom";
import debitCards from "../assets/Debit cards.png";
import phoneAppImage from "../assets/Phone app.png";

export default function About() {
  return (
    <div className=" mx-6 sm:mx-24 mb-10">
      <div className="grid sm:grid-cols-2 sm:justify-between sm:align-middle  h-full">
        <div>
          <p className="font-extrabold text-7xl sm:text-7xl">Remora</p>
          <p className="leading-normal  font-medium text-xl">
            is a 100% digital bank that seeks to make people's financial lives
            easier. The main function of the brand is to free it's users from
            the high fees & lack of customer services generated by conventional
            or traditional banks
          </p>
        </div>
        <div
          className="sm:ml-10  pt-4 sm:pt-0  debitCard"
          // style={{
          //   marginTop: -120,
          // }}
        >
          <img src={debitCards} alt="Remora  Debit Card" className="w-auto" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 border-myborder border-4 px-2 my-10 rounded-2xl  h-96">
        <div className="m-5">
          <p className="text-xl font-extrabold">There's More</p>
          <p className="text-md  leading-normal pt-3">
            But where's the fun if we share everything now? If we've piqued your
            interest, let us know by joining the waitlist.
          </p>

          <div>
            <Link
              className="text-black rounded-3xl justify-center align-middle flex mt-5 p-4  bg-white font-semibold hover:cursor-pointer duration-200"
              to="/waitlist"
            >
              Join Now
            </Link>
          </div>
        </div>
        <div className="align-center  flex justify-center">
          <img
            src={phoneAppImage}
            className="absolute sm:w-auto sm:mt-10 sm:ml-20 ml-0 mt-1 w-52"
            alt="Phone App"
          />
        </div>
      </div>
    </div>
  );
}