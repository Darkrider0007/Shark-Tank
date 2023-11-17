import React from "react";
import OfferCard from "@/components/OfferCard";

const About = () => {
      return(
        <div className="min-h-screen w-full bg-bg_dark_primary flex flex-col justify-start items-center gap-3 text-white">

        <h1 className="text-3xl">SHARKTANK</h1>
          <p className="w-3/4 leading-relaxed text-l">
            &quot;Shark Tank&quot; is a popular American television show that
            features aspiring entrepreneurs and inventors pitching their
            business ideas or products to a panel of wealthy investors, known as
            &quot;sharks&quot;. The entrepreneurs hope to secure investment
            deals from the sharks in exchange for a percentage of their
            company&apos;s equity. Each contestant has a limited time to make
            their pitch, after which the sharks can ask questions and negotiate
            terms. The show is known for its high-stakes drama, candid feedback
            from the sharks, and the potential for life-changing investment
            offers. &quot;Shark Tank&quot; has not only provided a platform for
            entrepreneurs to showcase their innovations but has also entertained
            and inspired millions of viewers around the world.
          </p>
  
        <div className="w-full min-h-full p-1 flex flex-col justify-start items-start text-white gap-2">
        <p className="text-2xl">Some Offers</p>
        <div className="w-full min-h-full grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
          <OfferCard/>
          <OfferCard/>
          <OfferCard/>
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

      )

}

export default About;
