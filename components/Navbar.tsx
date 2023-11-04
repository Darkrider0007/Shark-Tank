import React from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
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
      <Link href="/login">
        Login
      </Link>
      <MenuIcon theme="dark" />
    </div>
  );
};

export default Navbar;
