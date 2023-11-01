"use client"
import React,{ useState }  from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // ---------------------- Function For Showing Password -----------------------
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // ---------------------- Function For Updating Values For Input Fields -----------------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // --------------------- Function For Doing Sign Up ---------------------
  const handleSignUp = async () => {
    // TODO: Implement
  };

  return (
    <div className="min-h-screen w-full bg-bg_dark_primary flex justify-start items-start text-[#fefefe]">
      <div className="max-w-[410px] h-screen bg-bg_dark_secondary shadow-lg p-2">
        <div className="flex flex-col justify-between items-start w-full">
          <Image
            src="/STlogo1.png"
            alt="logo"
            height={80}
            width={80}
            className="object-cover"
          />
          <h1 className="text-3xl font-bold">Sign In Into SharkTank</h1>
          <p className="mt-1">
            Don&apos;s have an account?{" "}
            <Link href="/registration" className="text-blue-500">
              Sign Up
            </Link>{" "}
            Here
          </p>
          {/* <p className="mt-2 text-lg">See which shark is waiting for you</p> */}
        </div>
        <div className="flex w-full justify-between items-center my-4 gap-2 text-lg">
          <button className="flex justify-center items-center w-1/2 h-[40px] rounded-md border-white border">
            <FcGoogle />
          </button>
          <button className="flex justify-center items-center w-1/2 h-[40px] rounded-md border-white border">
            <FaGithub />
          </button>
        </div>
        <div className="flex justify-between items-center w-full">
          <hr className="bg-white h-[1px] w-[20%] max-sm:w-[20%]" />
          <p className="max-sm:text-[11px] text-[14px]">Or with email and password</p>
          <hr className="bg-white h-[1px] w-[20%] max-sm:w-[20%]" />
        </div>
        <form className="flex flex-col justify-start items-start w-full mt-2">
          <div className="flex flex-col justify-between items-start mb-4 w-full">
            <p>Email</p>
            <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="bg-transparent focus:outline-none w-full"
                value={values.email}
                onChange={handleChange}
                required
              />
              <MdAlternateEmail className="text-xl ml-2" />
            </div>
          </div>
          <div className="flex flex-col justify-between items-start mb-4 w-full">
            <p>Password</p>
            <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
              <input
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                placeholder="Enter Your Password"
                className="bg-transparent focus:outline-none w-full"
                value={values.password}
                onChange={handleChange}
                required
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="text-xl ml-2 cursor-pointer"
                  onClick={handleShowPassword}
                />
              ) : (
                <AiFillEye
                  className="text-xl ml-2 cursor-pointer"
                  onClick={handleShowPassword}
                />
              )}
            </div>
          </div>
        </form>
        <button
          type="submit"
          className="px-3 py-1.5 border border-[#fefefe] mt-4"
          onClick={handleSignUp}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Page;
