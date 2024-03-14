"use client";
import appwritePitches from "@/app/appwrite/pitchesHandler";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCurrencyRupee, BsPercent } from "react-icons/bs";
import { LuPlus, LuSend } from "react-icons/lu";

const IndividualOffers = ({ params }: any) => {
  const [pitch, setPitch] = useState({
    Title: "" || "No Title",
    Description: "" || "No Description",
    Equity: "" || "No Equity",
    Ask_Amount: "" || "No Ask Amount",
  } as any);
  const { id } = params;

  const pitchDetails = async (id: any) => {
    try {
      const pitchdetails = await appwritePitches.getPitchesDatabase(id);
      setPitch({
        Title: pitchdetails?.Title || "No Title",
        Description: pitchdetails?.Description || "No Description",
        Equity: pitchdetails?.Equity || "No Equity",
        Ask_Amount: pitchdetails?.Ask_Amount || "No Ask Amount",
      });
      // console.log(pitchdetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pitchDetails(id);
  }, [id]);

  return (
    <div className="flex flex-col bg-bg_dark_primary">
      <Navbar />
      <div className="w-full min-h-screen bg-bg_dark_primary flex justify-between flex-col md:flex-row items-center gap-3 text-white px-5 mt-5">
        <div className="w-full md:w-1/3 flex flex-col items-center bg-bg_dark_secondary p-3 gap-4">
          <Image
            src="/dummy.jpg"
            alt="dummy"
            height={200}
            width={450}
            className="aspect-auto object-cover rounded-sm"
          />
          <div className="flex flex-col min-h-1/2 w-full gap-3">
            <div className="flex flex-col justify-start items-start">
              <p>Equity</p>
              <div className="flex justify-between items-center w-full px-2 py-1 mt-1 rounded-sm bg-bg_dark_placeholder">
                <input
                  type="text"
                  readOnly
                  value={pitch?.Equity}
                  className="w-full focus:outline-none bg-transparent"
                />
                <BsPercent />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p>Ask Amount</p>
              <div className="flex justify-between items-center w-full px-2 py-1 mt-1 rounded-sm bg-bg_dark_placeholder">
                <input
                  type="text"
                  readOnly
                  value={pitch?.Ask_Amount}
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
                value={pitch?.Title}
                className="w-full px-2 py-1 mt-1 rounded-sm focus:outline-none bg-bg_dark_placeholder"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-3 w-full h-1/2">
            <p>Pitch Description</p>
            <textarea
              className="w-full p-2 h-[150px] rounded-sm mt-1 resize-none bg-bg_dark_placeholder focus:outline-none"
              value={pitch?.Description}
              readOnly
            />
          </div>
        </div>
        <div className="relative h-[100vh] w-full md:w-2/3 p-3 bg-bg_dark_secondary">
          <div className="absolute bottom-3 left-3 w-full flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-bg_dark_placeholder flex items-center justify-center cursor-pointer">
              <LuPlus size={25} />
            </div>
            <div className="flex w-[calc(100%_-_90px)] items-center bg-bg_dark_placeholder rounded-[25px] pl-3 pr-0.5">
              <input
                type="text"
                placeholder="Enter Your Message"
                className="p-2 w-full bg-transparent focus:outline-none text-white"
              />
              <div className="h-12 w-12 rounded-full flex items-center justify-center cursor-pointer">
                <LuSend size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualOffers;
