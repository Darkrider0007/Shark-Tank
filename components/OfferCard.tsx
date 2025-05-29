import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsGlobe2, BsCurrencyRupee, BsPercent } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const OfferCard = ({
  name,
  role,
  profileImage,
  githubLink,
  websiteLink,
  amount,
  equity,
  comment,
  offerId,
}: {
  name: string;
  role: string;
  profileImage: string;
  githubLink: string;
  websiteLink: string;
  amount: number;
  equity: number;
  comment: string;
  offerId: string;
}) => {
  return (
    <div className="relative min-w-1/3 min-h-[50vh] bg-bg_dark_secondary flex flex-col justify-start items-start gap-2 rounded-sm shadow-md backdrop-blur-[10px] p-2">
      <div className="flex justify-start items-center gap-4 py-2 w-full">
        <Image
          src={profileImage}
          width={70}
          height={70}
          alt="profile"
          className="object-cover rounded-full"
        />
        <div className="flex flex-col justify-start items-start min-h-full w-full p-1">
          <p className="text-lg">{name}</p>
          <p className="text-sm">{role}</p>
          <div className="flex justify-start items-center w-full gap-2 mt-2">
            <Link href={githubLink} target="_blank">
              <FaGithub />
            </Link>
            <Link href={websiteLink} target="_blank">
              <BsGlobe2 />
            </Link>
          </div>
        </div>
      </div>
      <form className="flex flex-col justify-start items-start w-full gap-2">
        <div className="flex flex-col justify-start items-start w-full">
          <p>Amount</p>
          <div className="flex justify-between items-center py-1 px-2 w-full bg-bg_dark_placeholder mt-1 rounded-sm">
            <input
              type="number"
              className="w-full bg-transparent outline-none focus:outline-none"
              value={amount}
              readOnly
            />
            <BsCurrencyRupee />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p>Equity</p>
          <div className="flex justify-between items-center py-1 px-2 w-full bg-bg_dark_placeholder mt-1 rounded-sm">
            <input
              type="number"
              className="w-full bg-transparent outline-none focus:outline-none"
              value={equity}
              readOnly
            />
            <BsPercent />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p>Comment</p>
          <textarea
            className="w-full outline-none focus:outline-none resize-none bg-bg_dark_placeholder p-2 h-[150px] mt-1 rounded-sm"
            value={comment}
            readOnly
          />
        </div>
      </form>
      <Link
        href={`/offers/${offerId}`}
        className="absolute top-2 right-2 cursor-pointer text-xl"
      >
        <FiExternalLink />
      </Link>
    </div>
  );
};

export default OfferCard;
