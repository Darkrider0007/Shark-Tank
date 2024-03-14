"use client";
import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BsShieldLockFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../GlobalRedux/Features/authSlice";
import { AddPageLoader, SubmitButton } from "@/components";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  // ---------------------- Function For Showing Password -----------------------
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // ---------------------- Function Handling SignUP -----------------------

  const handleSignUp = async (data: any) => {
    setError("");
    //console.log(data);
    const { name, email, password, confirmPassword } = data;

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all the fields");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setLoading(true);
      const userData = await authService.createAccount({
        email,
        password,
        name,
      });
      if (userData) {
        const data = await authService.getCurrentUser();
        dispatch(authLogin(data));
        if (data) {
          router.push(`/user/${data.$id}`);
        } else {
          router.push("/");
        }
      }
    } catch (error: any) {
      setLoading(false);
      setError(error.message || "An error occurred");
    }
  };

  if (loading) {
    return <AddPageLoader prop="Holding Up" />;
  }

  return (
    <div className="min-h-screen w-full bg-bg_dark_primary flex md:flex-row justify-end md:justify-between items-start md:items-center text-[#fefefe]">
      <div className="flex justify-center items-center h-screen w-[calc(100%_-_400px)] max-md:w-[calc(100%_-_300px)] max-sm:w-0">
        <Image src="/signup.png" alt="signup" width={800} height={600} />
      </div>
      <div className="w-[400px] max-md:w-[300px] max-sm:w-full h-screen bg-bg_dark_secondary shadow-lg px-2.5">
        <div className="flex flex-col justify-between items-start w-full">
          <Image
            src="/STlogo1.png"
            alt="logo"
            height={80}
            width={80}
            className="object-cover"
          />
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="mt-1">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Sign In
            </Link>{" "}
            Here
          </p>
          {/* <p className="mt-2 text-lg">See which shark is waiting for you</p> */}
        </div>

        {error && <p className="text-red-500">{error}</p>}
        {/* -----------------Form Starts Here----------------- */}

        <form
          className="flex flex-col justify-start items-start w-full mt-4"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <div className="flex flex-col justify-between items-start mb-4 w-full">
            <p>Full Name</p>
            <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="bg-transparent focus:outline-none w-full"
                {...register("name", {
                  required: true,
                })}
              />
              <FaUserCircle className="text-xl ml-2" />
            </div>
          </div>
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
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
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
                })}
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
          <div className="flex flex-col justify-between items-start mb-4 w-full">
            <p>Confirm Password</p>
            <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
              <input
                type="password"
                placeholder="Re-Enter Your Password"
                className="bg-transparent focus:outline-none w-full"
                {...register("confirmPassword", {
                  required: true,
                })}
              />
              <BsShieldLockFill className="text-xl ml-2" />
            </div>
          </div>
          {/* <div className="flex flex-col justify-between items-start mb-4 w-full">
            <p>Role</p>
            <select
              className="w-full p-2 bg-transparent border border-[#945353] mt-1 focus:outline-none"
              {...register("role",{
                required: true
              })
              }
            >
              <option value="Entrepreneur" className="text-black">
                Entrepreneur
              </option>
              <option value="Investor" className="text-black">
                Investor
              </option>
            </select> */}
          {/* </div> */}
          <SubmitButton props="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default Page;