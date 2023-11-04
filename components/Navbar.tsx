"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
  const [loggedin,setLoggedin] = useState(false)
  return (
    <div className="w-full px-5 py-2 flex justify-between items-center bg-bg_dark_secondary text-white shadow-md">
      <Link href="/">
        <Image
          src="/STlogo2.png"
          alt="logo"
          height={50}
          width={50}
          className="object-cover"
        />
      </Link>
      <div className="flex flex-row gap-4">
        <Link href="/pitches" className="hover:underline">
          Pitches  
        </Link>
        {
          loggedin ? <h1>User</h1> : <Link href="/login" className="hover:underline ">
              Login
            </Link>
        }
        
        <MenuIcon theme="dark" />
      </div>
    </div>
  );
};

export default Navbar;
