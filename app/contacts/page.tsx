"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { SubmitButton } from "@/components";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import conf from "../conf/conf";

const Page = () => {
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
  
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  return (
    <div className="min-h-screen w-full bg-bg_dark_primary flex justify-center items-center text-[#fefefe]">
      <div className="max-w-[600px] w-full h-screen bg-bg_dark_secondary shadow-lg p-4">
        <div className="flex flex-col justify-between items-center w-full mb-4">
          <Image
            src="/STlogo1.png"
            alt="logo"
            height={80}
            width={80}
            className="object-cover"
          />
        </div>

        <form className="flex flex-col justify-start items-start w-full mt-2"
         ref={form}
          onSubmit={submitHandler}
        >
          <div className="flex flex-col justify-between items-start mb-4 w-full">
            <label htmlFor="name">Name</label>
            <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
              <input
                type="text"
                id="name"
                placeholder="Enter Your name"
                className="bg-transparent focus:outline-none w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-col justify-between items-start mb-4 w-full">
            <label htmlFor="email">Email</label>
            <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
              <input
                type="email"
                id="email"
                placeholder="Enter Your email"
                className="bg-transparent focus:outline-none w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-col justify-between items-start mb-4 w-full">
            <label htmlFor="message">Message</label>
            <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
              <textarea
                id="message"
                rows={5}
                placeholder="Enter Your message"
                className="bg-transparent focus:outline-none w-full"
                required
              />
            </div>
          </div>
          <input type="submit" value="Send" className="px-3 py-1.5 border border-[#fefefe] mt-4 rounded-lg hover:bg-white hover:text-black hover:px-3.2 hover:py-1.7" />
          {/* <SubmitButton props="Send"/> */}
        </form>
      </div>
    </div>
  );
};

export default Page;
