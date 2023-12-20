import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

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
            <h1 className="text-6xl">SHARKTANK</h1>
            <p className="w-3/4 leading-relaxed text-xl">
              &quot;Shark Tank&quot; is a popular American television show that
              features aspiring entrepreneurs and inventors pitching their
              business ideas or products to a panel of wealthy investors, known
              as &quot;sharks&quot;. The entrepreneurs hope to secure investment
              deals from the sharks in exchange for a percentage of their
              company&apos;s equity. Each contestant has a limited time to make
              their pitch, after which the sharks can ask questions and
              negotiate terms. The show is known for its high-stakes drama,
              candid feedback from the sharks, and the potential for
              life-changing investment offers. &quot;Shark Tank&quot; has not
              only provided a platform for entrepreneurs to showcase their
              innovations but has also entertained and inspired millions of
              viewers around the world.
            </p>
            <Link
              href="/about"
              className="mt-6 rounded-full border-white border-2 px-4 py-2 hover:underline hover:border-b-4"
            >
              See more →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
