import AddOffer from "@/components/AddOffer";
import Navbar from "@/components/Navbar";
import OfferCard from "@/components/OfferCard";
import PitchDetail from "@/components/PitchDetail";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-bg_dark_primary flex flex-col justify-start items-center gap-3">
      <div className="min-h-[40vh] w-full flex justify-between items-start px-2 gap-2 max-sm:flex-col mt-2">
        <PitchDetail />
        <AddOffer />
      </div>
      <div className="w-full min-h-full p-3 flex flex-col justify-start items-start text-white gap-2">
        <p className="text-2xl">All Offers</p>
        <div className="w-full min-h-full grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
