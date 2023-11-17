"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../GlobalRedux/Features/authSlice";
import { AddPageLoader, SubmitButton } from "@/components";


const Page = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter()
  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  // ---------------------- Function For Showing Password -----------------------
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // ---------------------- Function For Updating Values For Input Fields -----------------------
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // --------------------- Function For Doing Sign IN ---------------------
  const handleSignIn = async (data: any) => {
    setError("");
    const { email, password } = data;
    if (!email || !password) {
      setError("Please fill all the fields");
      return;
    }
    try {
      setLoading(true);
      const session = await authService.login({ email, password })
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(authLogin(userData));
        router.push('/')
      }
    } catch (error: any) {
      setLoading(false);
      setError(error.message || "An error occurred");
    }
  };

  if (loading) {
    return (
      <AddPageLoader />
    )
  }

  return (
    <div className="min-h-screen w-full bg-bg_dark_primary flex justify-start items-start md:justify-between md:items-center text-[#fefefe]">
      <div>
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
              <Link href="/registration" className="text-blue-500 hover:underline">
                Sign Up
              </Link>{" "}
              Here
            </p>
            {/* <p className="mt-2 text-lg">See which shark is waiting for you</p> */}
          </div>
          {/* <div className="flex w-full justify-between items-center my-4 gap-2 text-lg">
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
        </div> */}

          {error && <p className="text-red-500">{error}</p>}
          {/* -----------------Form Starts Here----------------- */}

          <form className="flex flex-col justify-start items-start w-full mt-2"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="flex flex-col justify-between items-start mb-4 w-full">
              <p>Email</p>
              <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-transparent focus:outline-none w-full"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                  })}
                />
                <MdAlternateEmail className="text-xl ml-2" />
              </div>
            </div>
            <div className="flex flex-col justify-between items-start mb-4 w-full">
              <p>Password</p>
              <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Enter Your Password"
                  className="bg-transparent focus:outline-none w-full"
                  {...register("password", {
                    required: true,
                  })
                  }
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
            <SubmitButton props="Login" />
          </form>

        </div>
      </div>
      <div className="mr-20">
        <Image
          src="/login.png"
          alt="logo"
          height={600}
          width={800}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Page;
