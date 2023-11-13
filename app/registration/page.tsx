"use client";
import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BsShieldLockFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import  authService  from "../appwrite/auth"
import { useRouter } from 'next/navigation'

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter()
  // const [values, setValues] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   role: "Entrepreneur",
  // });


  const { register, handleSubmit } = useForm();

  // ---------------------- Function For Showing Password -----------------------
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // ---------------------- Function For Updating Values For Input Fields -----------------------
  // const handleChange = (
  //   e:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // --------------------- Function For Doing Sign Up ---------------------
  const handleSignUp = async (data:any) => {
    setError("");
    //console.log(data);
    const { name, email, password, confirmPassword, role } = data;

    if (!name || !email || !password || !confirmPassword || !role) {
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
      console.log("here");
      const userData = await authService.createAccount({email,password,name,role})
            if (userData) {
                router.push('/login')
            }
    } catch (error:any) {
      setError(error.message || "An error occurred");
    }
    

  };

  return (
    <div className="min-h-screen w-full bg-bg_dark_primary flex justify-end items-start text-[#fefefe]">
      <div className="max-w-[450px] min-h-screen bg-bg_dark_secondary shadow-lg p-2 pb-10 pr-5">
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
            <Link href="/login" className="text-blue-500">
              Sign In
            </Link>{" "}
            Here
          </p>
          {/* <p className="mt-2 text-lg">See which shark is waiting for you</p> */}
        </div>


        {error && <p className="text-red-500">{error}</p>}
        {/* -----------------Form Starts Here----------------- */}


        <form className="flex flex-col justify-start items-start w-full mt-4"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <div className="flex flex-col justify-between items-start mb-4 w-full">
            <p>Full Name</p>
            <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="bg-transparent focus:outline-none w-full"
                {...register("name",{
                  required: true
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
                {...register("email",{
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
                {...register("password",{
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
          <div className="flex flex-col justify-between items-start mb-4 w-full">
            <p>Confirm Password</p>
            <div className="flex justify-between items-center w-full p-2 bg-transparent border border-[#fefefe] mt-1">
              <input
                type="password"
                placeholder="Re-Enter Your Password"
                className="bg-transparent focus:outline-none w-full"
                {...register("confirmPassword",{
                    required: true,
                  })
                }
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
            <button
            type="submit"
            className="px-3 py-1.5 border border-[#fefefe] mt-4 hover:bg-[#fefefe] hover:text-black transition-all"
          >
            Sign Up
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Page;
