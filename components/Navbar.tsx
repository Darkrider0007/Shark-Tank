"use client";
import React, { useState, useEffect, use } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import Logout from "./Logout";
import { useSelector } from "react-redux";
const Navbar = () => {
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);

  const authStatus = useSelector(
    (state: { auth: { status: boolean } }) => state.auth.status
  );

  const userData = useSelector(
    (state: {
      auth: {
        userData: any
      }
    }) => state.auth.userData
  );
  //console.log(userData)

  useEffect(() => {
    setIsActive(false);
  }, [path]);
  return (
    <>
      <div className="w-full px-5 py-2 flex justify-between items-center bg-bg_dark_secondary text-white shadow-md overflow-hidden">
        <Link href="/">
          <Image
            src="/STlogo2.png"
            alt="logo"
            height={50}
            width={50}
            className="object-cover"
          />
        </Link>
        
        <div className="flex flex-row gap-4 items-center">
          {authStatus && <Link href={`/user/${userData.$id}`}>
            <Image
              src="/STlogo2.png"
              alt="logo"
              height={50}
              width={50}
              className="object-cover"
            />
          </Link>}
          <div onClick={() => setIsActive(!isActive)}>
            <MenuIcon theme="dark" isActive={isActive} />
          </div>
        </div>
      </div>
      <div
        className={`w-full fixed top-0 min-h-screen bg-bg_dark_secondary text-white z-10 left-0 transition-all ease-in-out duration-500 ${
          isActive ? "-translate-x-0" : "translate-x-full"
        } flex justify-center items-center opacity-90 backdrop-blur`}
      >
        <div className="flex flex-col justify-between items-center text-5xl gap-5">
          <Link href="/pitches" className="hover:underline">
            Pitches
          </Link>
          {authStatus ? <Link href="/add-pitch" className="hover:underline ">Add Pitch</Link>
          :<Link href="/about" className="hover:underline">
            About
          </Link>}
          <Link href="/contacts" className="hover:underline">
            Contact
          </Link>
          {authStatus ? (
            <Logout />
          ) : (
            <Link href="/login" className="hover:underline ">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
