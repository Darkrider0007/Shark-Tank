"use client";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-bg_dark_primary flex justify-start items-start text-[#fefefe]">
      <div className="max-w-[410px] h-screen bg-bg_dark_secondary shadow-lg p-2">
        <div className="flex flex-col justify-between items-start w-full">
          <Image
            src="/STlogo1.png"
            alt="logo"
            height={80}
            width={80}
            className="object-cover"
          />
        </div>

        <form className="flex flex-col justify-start items-start w-full mt-2">
          <div className="flex flex-col justify-between items-start mb-4 w-full">
            <p>Name</p>
            <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
              <input
                type="text"
                name="name"
                placeholder="Enter Your name"
                className="bg-transparent focus:outline-none w-full"
                //value={}
                //onChange={}
                required
              />
            </div>
          </div>

          <div className="flex flex-col justify-between items-start mb-4 w-full">
            <p>Email</p>
            <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
              <input
                type="text"
                name="email"
                placeholder="Enter Your email"
                className="bg-transparent focus:outline-none w-full"
                //value={}
                //onChange={}
                required
              />
            </div>
          </div>

          <div className="flex flex-col justify-between items-start mb-4 w-full">
            <p>Message</p>
            <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
              <textarea
                rows={10}
                cols={10}
                placeholder="Enter Your message"
                className="bg-transparent focus:outline-none w-full"
                required
              />
            </div>
          </div>
        </form>

        <button
          type="submit"
          className="px-3 py-1.5 border border-[#fefefe] mt-4"
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default Page;
