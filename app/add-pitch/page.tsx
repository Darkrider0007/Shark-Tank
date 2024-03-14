"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { LuImagePlus } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

function Page() {
  const [value, setValue] = useState({
    equity: "",
    amount: "",
    title: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col bg-bg_dark_primary text-white">
      <Navbar />
      <div className="min-h-[70vh] w-full flex items-center justify-center pt-10">
        <div className="flex flex-col items-start gap-5 w-full sm:w-2/3 px-5">
          <h1 className="text-4xl uppercase w-full text-center">
            Add New Pitch
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
            <div className="relative w-full sm:w-1/2 border-2 border-dashed aspect-video flex items-center justify-center cursor-pointer">
              <LuImagePlus size={50} />
            </div>
            <div className="flex flex-col w-full sm:w-1/2 gap-5">
              <div className="relative w-full">
                <input
                  type="number"
                  placeholder=" "
                  name="equity"
                  value={value.equity}
                  onChange={handleChange}
                  className="peer w-full p-4 border rounded-sm outline-none transition disabled:opacity-70 disabled:cursor-not-allowed bg-transparent"
                />
                <label className="absolute text-md duration-150 transform -translate-y-7 top-4 left-2  origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 text-neutral-400 bg-bg_dark_primary px-2">
                  Equity
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type="number"
                  placeholder=" "
                  name="amount"
                  value={value.amount}
                  onChange={handleChange}
                  className="peer w-full p-4 border rounded-sm outline-none transition disabled:opacity-70 disabled:cursor-not-allowed bg-transparent bg-opacity-50"
                />
                <label className="absolute text-md duration-150 transform -translate-y-7 top-4 left-2  origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 text-neutral-400 bg-bg_dark_primary px-2">
                  Ask Amount
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder=" "
                  name="title"
                  value={value.title}
                  onChange={handleChange}
                  className="peer w-full p-4 border rounded-sm outline-none transition disabled:opacity-70 disabled:cursor-not-allowed bg-transparent bg-opacity-50"
                />
                <label className="absolute text-md duration-150 transform -translate-y-7 top-4 left-2  origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 text-neutral-400 bg-bg_dark_primary px-2">
                  Title
                </label>
              </div>
            </div>
          </div>
          <div className="relative flex w-full items-center justify-center">
            <textarea
              placeholder=" "
              name="description"
              value={value.description}
              onChange={(e) => {
                setValue({ ...value, description: e.target.value });
              }}
              className="peer w-full p-4 border rounded-sm outline-none transition disabled:opacity-70 disabled:cursor-not-allowed bg-transparent bg-opacity-50 h-[200px] resize-none"
            />
            <label className="absolute text-md duration-150 transform -translate-y-7 top-4 left-2  origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 text-neutral-400 bg-bg_dark_primary px-2">
              Description
            </label>
          </div>
          <button className="relative overflow-hidden py-2 px-4 border flex items-center rounded-sm before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:-left-full before:bg-white hover:before:left-0 before:transition-all before:duration-500 before:ease-in-out hover:text-black z-[1] before:-z-[1]">
            Submit Pitch <FaArrowRightLong size={15} className="ml-2" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
