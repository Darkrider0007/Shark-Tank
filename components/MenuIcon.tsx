"use client";
import React, { useState } from "react";

type MenuIconProps = {
  theme: string;
};

const MenuIcon = ({ theme }: MenuIconProps) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className="relative h-[25px] w-[25px] flex flex-col justify-between items-center cursor-pointer overflow-hidden"
      onClick={() => {
        setShowMenu(!showMenu);
      }}
    >
      <div className="relative h-[10px] w-full flex items-center justify-start">
        <div
          className={`absolute ${
            theme === "dark" ? "bg-white" : "bg-black"
          } h-[2px] rounded-xl transition-all ease-in-out duration-500 delay-300 ${
            showMenu
              ? "w-full rotate-45 translate-y-[8px]"
              : "w-1/2 -rotate-0 translate-y-0"
          }`}
        />
      </div>
      <div
        className={`relative h-[10px] w-full flex items-center justify-between transition-all ease-in-out duration-500 ${
          showMenu ? "translate-x-[30px]" : "delay-500 translate-x-0"
        }`}
      >
        <div
          className={`absolute w-full ${
            theme === "dark" ? "bg-white" : "bg-black"
          } h-[2px] rounded-xl`}
        />
      </div>
      <div className="relative h-[10px] w-full flex items-center justify-end">
        <div
          className={`absolute ${
            theme === "dark" ? "bg-white" : "bg-black"
          } h-[2px] rounded-xl transition-all ease-in-out duration-500 delay-300 ${
            showMenu
              ? "w-full -rotate-45 -translate-y-[8px]"
              : "w-1/2 rotate-0 -translate-y-0"
          }`}
        />
      </div>
    </div>
  );
};

export default MenuIcon;