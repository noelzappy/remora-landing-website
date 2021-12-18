import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { color } from "@mui/system";

export default function Waitlist() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="grid  sm:grid-cols-2 sm:px-24 px-6 mt-10">
      <div className="flex">
        <p className=" text-6xl font-extrabold leading-snug">
          Get <br />
          Notified <br />
          When We <br />
          Launch
        </p>
      </div>
      <div className="border-myborder rounded-3xl bg-myblack border-4 p-4 mt-20 sm:mt-0 mb-10  py-20">
        <div className="py-6">
          <TextField
            id="filled-basic"
            label="Full Name"
            variant="filled"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            sx={{
              backgroundColor: "#292929",
              borderRadius: 20,
              color: "white",
            }}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            InputProps={{
              style: {
                color: "white",
                border: "none",
              },
            }}
            fullWidth
          />
        </div>

        <div className="py-6">
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            sx={{
              backgroundColor: "#292929",
              borderRadius: 20,
              color: "white",
            }}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            InputProps={{
              style: {
                color: "white",
                border: "none",
              },
            }}
            fullWidth
          />
        </div>
        <div
          className="bg-white text-myblack align-middle justify-center mx-12 text-center hover:cursor-pointer p-3 font-bold  rounded-full  px-5"
          onClick={() => {
            console.log(userName, email);
            setEmail("");
            setUserName("");
          }}
        >
          Notify Me
        </div>
      </div>
    </div>
  );
}
