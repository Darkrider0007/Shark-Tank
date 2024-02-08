"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-bg_dark_primary overflow-hidden overscroll-none flex justify-center text-white">
        {/* <Image
          src="/SharktankLogo.png"
          alt="logo"
          width={750}
          height={350}
          className="fixed z-0 opacity-20"
        /> */}
        <div className="flex justify-start items-center flex-col w-full min-h-screen">
          <div className="z-[5] flex items-center flex-col mt-20 gap-4">
            <motion.div
              className="w-full flex justify-center items-center text-8xl font-kanit overflow-hidden"
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
            </motion.div>
            <p className="w-3/4 leading-relaxed text-xl">
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
            </p>
            <Link
              href="/about"
              className="relative overflow-hidden mt-6 rounded-full border-white border-2 px-4 py-2 before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:-left-full before:bg-white hover:before:left-0 before:transition-all before:duration-300 before:ease-in-out hover:text-black before:-z-[1]"
            >
              See more →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
