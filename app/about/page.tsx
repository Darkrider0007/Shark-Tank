"use client";
import React from "react";
import Image from "next/image";
import { Carousel, OfferCard } from "@/components";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";

const About = () => {
  const carouselItems = [
    {
      imageUrl: "/Idea_Pitching.jpg",
      heading: "Pitch Your Idea",
      paragraph:
        " Seamlessly showcase your groundbreaking concepts through a user-friendly interface. From product prototypes to service-based solutions, Shark-Tank empowers you to present your vision effectively.",
    },
    {
      imageUrl: "/MeetWithInvestor.jpg",
      heading: "Connect with Investors",
      paragraph:
        "Our robust networking capabilities enable you to approach a diverse range of investors actively seeking the next big thing. Browse through profiles, review investment preferences, and connect with potential backers who share your passion for innovation.",
    },
    {
      imageUrl: "/IdeaMarketPlace.jpg",
      heading: "Idea Marketplace",
      paragraph:
        "Investors, explore a diverse range of ideas and projects from talented individuals worldwide. Discover opportunities that align with your investment strategy and contribute to the next wave of industry-disrupting innovations.",
    },
    {
      imageUrl: "/pexels-fauxels-3184291.jpg",
      heading: "Secure Collaboration",
      paragraph:
        "Communicate securely within the platform, ensuring confidentiality during negotiations and collaboration. Our advanced messaging system enables seamless communication between entrepreneurs and investors.",
    },
    // Add more items as needed
  ];

  return (
    <div className="flex justify-start items-center w-full min-h-screen flex-col bg-bg_dark_primary">
      <div className="flex flex-col min-h-screen w-full justify-start items-center">
        <div className="min-h-screen w-full flex flex-col justify-start items-center gap-3 text-white">
          <div className="my-10 justify-center items-center flex flex-col w-full">
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
          </div>
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
            <p className="text-2xl">Famous Investers</p>
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
    </div>
  );
};

export default About;
