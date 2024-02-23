"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, OfferCard } from "@/components";
import Navbar from "@/components/Navbar/Navbar";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer/Footer";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import appwritePitches from "../appwrite/pitchesHandler";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import carouselItems from "@/constants/carouselItems";

const About = () => {

  const [pitches, setPitches] = useState([
    {
      id: "No Id",
      Title: "No Title",
      Description: "No Description",
      Equity: "No Equity",
      Ask_Amount: "No Ask Amount",
      image:"No Image",
      userId: "No User Id",
    },
  ]as any);

  const fetchPitches = async () => {
    try {
      const data = await appwritePitches.getAllPitches();
      // console.log(data?.documents);
      const dataArray = Array.from(data?.documents as any);
      setPitches(
        dataArray.map((pitch: any) => {
          return {
            id: pitch["$id"],
            Title: pitch?.Title || "No Title",
            Description: pitch?.Description || "No Description",
            Equity: pitch?.Equity || "No Equity",
            Ask_Amount: pitch?.Ask_Amount || "No Ask Amount",
            image: pitch?.image || "No Image",
            userId: pitch?.userId || "No User Id",
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  

  useEffect(() => {
    fetchPitches();
  }, []); // Add an empty dependency array

  return (
    <div className="flex justify-start items-center w-full min-h-screen flex-col bg-bg_dark_primary">
      <div className="flex flex-col min-h-screen w-full justify-start items-center">
        <div className="min-h-screen w-full flex flex-col justify-start items-center gap-3 text-white">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Shark-Tank<br/> Where Dreams Meet Capital
          </motion.h1>
        </LampContainer>
          {/* <div className="my-10 justify-center items-center flex flex-col w-full">
            <h1 className="text-3xl sm:text-4xl md:text-6xl mb-3 uppercase">
              Sharktank
            </h1>
            <p className="w-3/4 sm:text-lg leading-relaxed text-center text-base">
              Welcome to Shark-Tank, a cutting-edge platform where aspiring
              entrepreneurs converge with seasoned investors. Our sleek
              interface transforms ideas into compelling pitches, fostering live
              interactions and secure collaborations. It&apos;s not just an app;
              it&apos;s the global arena where dreams meet capital, forging a
              future shaped by groundbreaking innovations.
            </p>
          </div> */}
          <Slider items={carouselItems} />
          <div className="w-full min-h-full p-1 flex flex-col justify-start items-start text-white gap-2 mt-10">
            <p className="text-4xl">Some Offers</p>
            <div className="w-full min-h-full grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
              <OfferCard />
              <OfferCard />
              <OfferCard />
            </div>
          </div>
          <div className="w-full min-h-full p-3 flex flex-col justify-start items-start text-white gap-2">
            <p className="text-2xl">Famous Investors</p>
            <div className="w-full min-h-full grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
              <p>profile 1</p>
              <p>profile 2</p>
              <p>profile 3</p>
            </div>
          </div>
          <div className="w-full min-h-full p-3 flex flex-col justify-start items-start text-white gap-2">
            <p className="text-2xl">Successful Entrepreneurs</p>
            <div className="w-full min-h-full grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
              <p>profile 1</p>
              <p>profile 2</p>
              <p>profile 3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white">
        <HoverEffect items={pitches}/>
        {/* {pitches.map((pitch: any) => {
          return (
            <div key={pitch.id}>
              <h1>{pitch.Title}</h1>
              <p>{pitch.Description}</p>
              <p>{pitch.Equity}</p>
              <p>{pitch.Ask_Amount}</p>
              <p>{pitch.image}</p>
              <p>{pitch.userId}</p>
            </div>
          );
        })} */}
      </div>
      <Footer />
    </div>
  );
};

export default About;
