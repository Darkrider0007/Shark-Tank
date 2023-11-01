import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { BsCurrencyRupee, BsPercent } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const OfferCard = () => {
  return (
    <div className="relative min-w-1/3 min-h-[50vh] bg-bg_dark_secondary flex flex-col justify-start items-start gap-2 rounded-sm shadow-md backdrop-blur-[10px] p-2">
      <div className="flex justify-start items-center gap-4 py-2 w-full">
        <Image
          src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={70}
          height={70}
          alt="profile"
          className="object-cover rounded-full"
        />
        <div className="flex flex-col justify-start items-start min-h-full w-full p-1">
          <p className="text-lg">Jane Doe</p>
          <p className="text-sm">Open Source Contributor & Freelancer</p>
          <div className="flex justify-start items-center w-full gap-2 mt-2">
            <Link
              href="https://github.com/Darkrider0007/Shark-Tank"
              target="__blank"
            >
              <FaGithub />
            </Link>
            <Link href="https://shark-tank-eight.vercel.app/" target="__blank">
              <BsGlobe2 />
            </Link>
          </div>
        </div>
      </div>
      <form className="flex flex-col justify-start items-start w-full gap-2">
        <div className="flex flex-col justify-start items-start w-full">
          <p>Amount</p>
          <div className="flex justify-between items-center py-1 px-2 w-full border border-white mt-1">
            <input
              type="number"
              className="w-full bg-transparent outline-none focus:outline-none"
              value={1000}
              readOnly
            />
            <BsCurrencyRupee />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p>Equity</p>
          <div className="flex justify-between items-center py-1 px-2 w-full border border-white mt-1">
            <input
              type="number"
              className="w-full bg-transparent outline-none focus:outline-none"
              value={10}
              readOnly
            />
            <BsPercent />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p>Comment</p>
          <textarea
            className="w-full bg-transparent outline-none focus:outline-none resize-none border border-white p-2 h-[150px] mt-1"
            value="I am interested in your idea. I would like to invest in your idea. Please contact me."
            readOnly
          />
        </div>
      </form>
      <Link href="/offers/1213132" className="absolute top-2 right-2 cursor-pointer text-xl">
        <FiExternalLink />
      </Link>
    </div>
  );
};

export default OfferCard;
