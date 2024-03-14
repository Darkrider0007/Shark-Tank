"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { SubmitButton } from "@/components";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import conf from "../conf/conf";
import { IoIosSend } from "react-icons/io";
import { ParticleConfig } from "@/components/index";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const Page = () => {
  const [render, setRender] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const form = useRef<HTMLFormElement | null>(null);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Pass the form element directly to sendForm
      await emailjs.sendForm(
        conf.emailjsServiceID,
        conf.emailjsTemplateId,
        event.currentTarget, // Access the form element from the event
        conf.emailjsPublicKey
      );

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    setRender(true);
  }, []);

  if (!render) {
    return null;
  }

  return (
    <div className="flex flex-col bg-bg_dark_primary">
      <Navbar />
      <div className="min-h-[50vh] w-full flex justify-center items-center text-white">
        <div className="relative w-full z-5 flex justify-center items-center">
          <div className="sm:w-1/3 w-full bg-bg_dark_secondary shadow-lg p-4 rounded-sm mt-6">
            <div className="mb-4 w-full">
              <h1 className="text-3xl text-left">Contact Us</h1>
            </div>
            <form
              className="flex flex-col justify-start items-start w-full mt-2 gap-5"
              ref={form}
              onSubmit={submitHandler}
            >
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder=" "
                  name="name"
                  id="name"
                  className="peer w-full p-4 border rounded-sm outline-none transition disabled:opacity-70 disabled:cursor-not-allowed bg-transparent"
                />
                <label className="absolute text-md duration-150 transform -translate-y-7 top-4 left-2  origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 text-neutral-400 bg-bg_dark_secondary px-2">
                  Name
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder=" "
                  name="email"
                  id="email"
                  className="peer w-full p-4 border rounded-sm outline-none transition disabled:opacity-70 disabled:cursor-not-allowed bg-transparent"
                />
                <label className="absolute text-md duration-150 transform -translate-y-7 top-4 left-2  origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 text-neutral-400 bg-bg_dark_secondary px-2">
                  Email
                </label>
              </div>
              <div className="relative flex w-full items-center justify-center">
                <textarea
                  placeholder=" "
                  name="title"
                  id="description"
                  className="peer w-full p-4 border rounded-sm outline-none transition disabled:opacity-70 disabled:cursor-not-allowed bg-transparent h-[200px] resize-none"
                />
                <label className="absolute text-md duration-150 transform -translate-y-7 top-4 left-2  origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 text-neutral-400 bg-bg_dark_secondary px-2">
                  Give Your Message
                </label>
              </div>
              <button className="relative overflow-hidden px-3 py-1.5 border border-[#fefefe] mt-2 rounded-sm cursor-pointer flex justify-center items-center before:absolute before:content-[''] before:w-full before:h-full before:top-0 before:-left-full before:bg-white hover:before:left-0 before:transition-all before:duration-500 before:ease-in-out hover:text-black z-[1] before:-z-[1]">
                Send <IoIosSend className="ml-1" />
              </button>
              {/* <SubmitButton props="Send"/> */}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
