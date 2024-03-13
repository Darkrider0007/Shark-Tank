"use client";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/Spotlight";

const item = {
  initial: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 0],
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const words = `Shark Tank is a popular American television show that features aspiring entrepreneurs and inventors pitching their business ideas or products to a panel of wealthy investors, known as sharks. The entrepreneurs hope to secure investment deals from the sharks in exchange for a percentage of their company's equity. Each contestant has a limited time to make their pitch, after which the sharks can ask questions and negotiate terms. The show is known for its high-stakes drama, candid feedback from the sharks, and the potential for life-changing investment offers. Shark Tank has not only provided a platform for entrepreneurs to showcase their innovations but has also entertained and inspired millions of viewers around the world.
`;

export default function Home() {
  return (
    <div className="flex flex-col bg-bg_dark_primary">
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="overflow-hidden overscroll-none flex justify-center text-white">
        
        <div className="flex justify-start items-center flex-col w-full">
          <div className="z-[5] flex items-center flex-col mt-20 gap-4">
            {/* <motion.div
              className="w-full flex justify-center items-center text-4xl sm:temt-6xl md:text-8xl font-kanit overflow-hidden"
              initial="initial"
              animate="animate"
              transition={{ staggerChildren: 0.09, delayChildren: 0.3 }}
            >
              {"SHARKTANK".split("").map((e, id) => {
                return (
                  <motion.span variants={item} key={id}>
                    {e}
                  </motion.span>
                );
              })}
            </motion.div> */}
            <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
              <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                SharkTank
              </h1>
              <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        
                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={800}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
        
                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
            <div className="w-3/4 leading-relaxed text-sm sm:text-base md:text-xl text-center">
              <TextGenerateEffect words={words} />
            </div>
            
            {/* <motion.p
              className="w-3/4 leading-relaxed text-sm sm:text-base md:text-xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              
              <strong>Shark Tank</strong> is a popular American television show
              that features aspiring entrepreneurs and inventors pitching their
              business ideas or products to a panel of wealthy investors, known
              as <strong>Sharks</strong>. The entrepreneurs hope to secure
              investment deals from the sharks in exchange for a percentage of
              their company&apos;s equity. Each contestant has a limited time to
              make their pitch, after which the sharks can ask questions and
              negotiate terms. The show is known for its high-stakes drama,
              candid feedback from the sharks, and the potential for
              life-changing investment offers. <strong>Shark Tank</strong> has
              not only provided a platform for entrepreneurs to showcase their
              innovations but has also entertained and inspired millions of
              viewers around the world.
            </motion.p> */}
            {/* <Link
              href="/about"
              className="relative overflow-hidden mt-6 rounded-full border-white border-2 px-4 py-2 before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:-left-full before:bg-white hover:before:left-0 before:transition-all before:duration-300 before:ease-in-out hover:text-black before:-z-[1]"
            >
              See more →
            </Link> */}

            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                  <Link href="/about">
                    See more
                  </Link>                  
                </span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
