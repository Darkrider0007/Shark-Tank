"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiCopyrightLine } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast.success("Message Sent Successfully");
    setData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <footer className="w-full min-h-[20rem] bg-zinc-900 gap-5 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-white mt-5 sm:mt-10 md:mt-20">
      <div className="flex items-center sm:items-start gap-3 flex-col p-2">
        <Image
          src="/JGEC_logo.png"
          alt="logo"
          height={200}
          width={200}
          className="object-cover"
        />
        <div className="flex flex-col sm:items-start w-full text-center sm:text-left">
          <div className="flex w-full gap-1 items-center justify-center sm:justify-start">
            <RiCopyrightLine />{" "}
            <p className="text-center sm:text-left">
              {new Date().getFullYear()} All rights reserved
            </p>
          </div>
          <span className="font-bold items-center">
            Jalpaiguri Government Engineering College, Jalpaiguri, West Bengal,
            India
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start gap-1 p-2">
        <h1 className="text-2xl font-bold">Connect With Us</h1>
        <hr className="w-1/4" />
        <div className="flex flex-col gap-4 mt-4 text-xl items-start">
          <div className="flex gap-2 items-center justify-start">
            <SiGooglemaps />
            <p className="text-base">Jalpaiguri, West Bengal</p>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <MdAlternateEmail />
            <p className="text-base">sharktank.jgec@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <FaGithub />
            <p className="text-base">Shark Tank</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-1 p-2">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <hr className="w-1/4" />
        <form className="flex flex-col w-full gap-4 mt-4">
          <input
            required
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
            placeholder="Name"
            className="w-full p-2 rounded-sm bg-zinc-700 focus:outline-none focus:border-transparent"
          />
          <input
            required
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            placeholder="Email"
            className="w-full p-2 rounded-sm bg-zinc-700 focus:outline-none focus:border-transparent"
          />
          <textarea
            required
            placeholder="Give Your Message Here..."
            name="message"
            onChange={(e) => {
              setData({ ...data, message: e.target.value });
            }}
            value={data.message}
            className="w-full p-2 rounded-sm bg-zinc-700 resize-none focus:outline-none focus:border-transparent"
          />
          <button
            className="w-[120px] p-2 rounded-sm bg-zinc-700"
            onClick={handleSubmit}
          >
            Send
          </button>
        </form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.196658325896!2d88.70117917477329!3d26.545949475757055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e47bce687f169d%3A0x4152036d0d736d37!2sJalpaiguri%20Government%20Engineering%20College!5e0!3m2!1sen!2sin!4v1708100276642!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </footer>
  );
};

export default Footer;
