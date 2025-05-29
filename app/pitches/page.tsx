import AddOffer from "@/components/AddOffer";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import OfferCard from "@/components/OfferCard";
import PitchDetail from "@/components/PitchDetail";
import React from "react";
const offerData = [
  {
    name: "Jane Doe",
    role: "Freelancer & Open Source Contributor",
    profileImage: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/user1/project1",
    websiteLink: "https://project1.vercel.app/",
    amount: 5000,
    equity: 10,
    comment: "Excited about your idea. Let’s connect!",
    offerId: "offer001",
  },
  {
    name: "John Smith",
    role: "Startup Mentor",
    profileImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/user2/project2",
    websiteLink: "https://project2.vercel.app/",
    amount: 10000,
    equity: 15,
    comment: "I can guide you and fund your idea.",
    offerId: "offer002",
  },
  {
    name: "Alice Green",
    role: "Tech Evangelist",
    profileImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/user3/project3",
    websiteLink: "https://project3.vercel.app/",
    amount: 7500,
    equity: 12,
    comment: "Looks promising, let’s collaborate.",
    offerId: "offer003",
  },
  {
    name: "Bob Lee",
    role: "Product Strategist",
    profileImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/user4/project4",
    websiteLink: "https://project4.vercel.app/",
    amount: 12000,
    equity: 20,
    comment: "Great vision. Let me join your journey.",
    offerId: "offer004",
  },
  {
    name: "Sara Paul",
    role: "Early Stage Investor",
    profileImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/user5/project5",
    websiteLink: "https://project5.vercel.app/",
    amount: 8000,
    equity: 8,
    comment: "Interested in this niche. Let’s talk.",
    offerId: "offer005",
  },
  {
    name: "Michael Ross",
    role: "Tech Consultant",
    profileImage: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/user6/project6",
    websiteLink: "https://project6.vercel.app/",
    amount: 9000,
    equity: 14,
    comment: "Happy to fund and consult your team.",
    offerId: "offer006",
  },
  {
    name: "Emma Clark",
    role: "Angel Investor",
    profileImage: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/user7/project7",
    websiteLink: "https://project7.vercel.app/",
    amount: 11000,
    equity: 18,
    comment: "Passionate about this industry. Let’s partner.",
    offerId: "offer007",
  },
  {
    name: "Daniel White",
    role: "Serial Entrepreneur",
    profileImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/user8/project8",
    websiteLink: "https://project8.vercel.app/",
    amount: 15000,
    equity: 25,
    comment: "I see potential. Let’s make it big.",
    offerId: "offer008",
  },
];



const Page = () => {
  return (
    <div className="flex flex-col bg-bg_dark_primary">
      <Navbar />
      <div className="min-h-screen w-full bg-bg_dark_primary flex flex-col justify-start items-center gap-3">
        <div className="min-h-[40vh] w-full flex justify-between items-start px-2 gap-2 max-sm:flex-col mt-2">
          <PitchDetail />
          <AddOffer />
        </div>
        <div className="w-full min-h-full p-3 flex flex-col justify-start items-start text-white gap-2">
          <p className="text-2xl">All Offers</p>
          <div className="w-full min-h-full grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
            {offerData.map((offer) => (
              <OfferCard key={offer.offerId} {...offer} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
