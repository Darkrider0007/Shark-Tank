import React from "react";
import Image from "next/image";
import { BsCurrencyRupee, BsPercent } from "react-icons/bs";

const PitchDetail = () => {
  return (
    <div className="w-1/2 h-full bg-bg_dark_secondary flex flex-col p-3 justify-start items-center text-white max-sm:w-full">
      <div className="min-h-1/2 w-full flex justify-between items-start gap-4">
        <Image
          src="/dummy.jpg"
          alt="dummy"
          height={200}
          width={400}
          className="aspect-auto object-cover rounded-sm w-1/2"
        />
        <div className="flex flex-col min-h-1/2 w-1/2 gap-3">
          <div className="flex flex-col justify-start items-start">
            <p>Equity</p>
            <div className="flex justify-between items-center w-full px-2 py-1 mt-1 border border-white rounded-sm">
              <input
                type="text"
                readOnly
                value="20"
                className="w-full focus:outline-none bg-transparent"
              />
              <BsPercent />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start">
            <p>Ask Amount</p>
            <div className="flex justify-between items-center w-full px-2 py-1 mt-1 border border-white rounded-sm">
              <input
                type="text"
                readOnly
                value="20000"
                className="w-full focus:outline-none bg-transparent"
              />
              <BsCurrencyRupee />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start">
            <p>Pitch Title</p>
            <input
              type="text"
              readOnly
              value="Lorem Ispum"
              className="w-full px-2 py-1 mt-1 rounded-sm focus:outline-none bg-transparent border border-white"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start mt-3 w-full h-1/2">
        <p>Pitch Description</p>
        <textarea
          className="w-full p-2 h-[150px] rounded-sm mt-1 resize-none bg-transparent border border-white focus:outline-none"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna nibh, scelerisque id dolor eget, laoreet imperdiet odio. Nullam cursus metus quis dolor malesuada maximus. Suspendisse potenti. Pellentesque bibendum egestas sem, non porttitor felis tempus in. In ultrices, felis et mollis placerat, felis massa pellentesque tortor"
          readOnly
        />
      </div>
    </div>
  );
};

export default PitchDetail;
