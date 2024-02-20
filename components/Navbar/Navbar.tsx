"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "../MenuIcon";
import Logout from "./Logout";
import { useDispatch } from "react-redux";
import authService from "@/app/appwrite/auth";
import { authlogout, login } from "@/app/GlobalRedux/Features/authSlice";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";

const NavbarAnim = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleX: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const item = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const container = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const Navbar = () => {
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [userDatabase, setUserDatabase] = useState({});
  const [userData, setUserData] = useState<any>({});
  const [authStatus, setAuthStatus] = useState(false);

  // const authStatus = useSelector(
  //   (state: { auth: { status: boolean } }) => state.auth.status
  // );

  // const userData = useSelector(
  //   (state: {
  //     auth: {
  //       userData: any
  //     }
  //   }) => state.auth.userData
  // );

  // console.log(userData.$id)

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(login({ userData }));
        setAuthStatus(true);
        setUserData(userData);
      } else {
        dispatch(authlogout());
      }
    };

    fetchCurrentUser();
  }, [dispatch, path]);

  useEffect(() => {
    const getUserDatabase = async () => {
      if (userData) {
        const user = await authService.getUserDatabase(userData.$id);
        console.log(user);
        if (user) {
          setUserDatabase(user);
        }
      }
    };
    getUserDatabase();
  }, [userData]);

  const clear = () => {
    setAuthStatus(false);
  };

  useEffect(() => {
    setIsActive(false);
  }, [path]);

  return (
    <>
      <div className="w-full px-5 py-2 flex justify-between bg-bg_dark_primary items-center text-white overflow-hidden">
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
          {authStatus && (
            <Link href={`/user/${userData.$id}`} className="text-[28px]">
              {(userDatabase as any).User_Avatar ? (
                <div className="rounded-full bg-slate-600 h-100 w-100 object-cover">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={authService
                      .getAvatar((userDatabase as any).User_Avatar)
                      .toString()}
                    alt="user"
                    className="rounded-full h-10  w-10 object-cover"
                  />
                </div>
              ) : (
                <div className="h-8 w-8 text-lg rounded-full flex items-center justify-center bg-blue-800">
                  {userData.name[0].toUpperCase()}
                </div>
              )}
            </Link>
          )}
          <Link href={"https://github.com/Darkrider0007/Shark-Tank"} target="blank">
            <AiOutlineGithub size={30} />
          </Link>
          <div onClick={() => setIsActive(!isActive)}>
            <MenuIcon theme="dark" isActive={isActive} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className={`w-full fixed top-0 min-h-screen bg-bg_dark_primary text-white z-10 left-0 flex justify-center items-center origin-right bg-opacity-95 backdrop-blur-sm`}
            variants={NavbarAnim}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              className="flex flex-col justify-between items-start text-7xl gap-5 uppercase font-oswald max-sm:text-5xl tracking-wide"
              variants={container}
              initial="initial"
              animate="open"
              exit="initial"
            >
              <div className="overflow-hidden">
                <motion.div variants={item}>
                  <Link href="/pitches">Pitches</Link>
                </motion.div>
              </div>
              {authStatus ? (
                <div className="overflow-hidden">
                  <motion.div variants={item}>
                    <Link href="/add-pitch">Add Pitch</Link>
                  </motion.div>
                </div>
              ) : (
                <div className="overflow-hidden">
                  <motion.div variants={item}>
                    <Link href="/about">About</Link>
                  </motion.div>
                </div>
              )}
              <div className="overflow-hidden">
                <motion.div variants={item}>
                  <Link href="/contacts">Contact</Link>
                </motion.div>
              </div>
              {authStatus ? (
                <div className="overflow-hidden">
                  <motion.div onClick={clear} variants={item}>
                    <Logout />
                  </motion.div>
                </div>
              ) : (
                <div className="overflow-hidden">
                  <motion.div variants={item}>
                    <Link href="/login">Login</Link>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
