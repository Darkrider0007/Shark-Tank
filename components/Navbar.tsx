"use client";
import React, { useState, useEffect, use } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import Logout from "./Logout";
import { useDispatch, useSelector } from "react-redux";
import authService from "@/app/appwrite/auth";
import { authlogout, login } from "@/app/GlobalRedux/Features/authSlice";
const Navbar = () => {
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [userDatabase, setUserDatabase] = useState({})
  const [userData, setUserData] = useState<any>({})
  const [authStatus, setAuthStatus] = useState(false)

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
        setAuthStatus(true)
        setUserData(userData)
      } else {
        dispatch(authlogout());
      }
    };

    fetchCurrentUser();
  }, [dispatch,path]);

  

 useEffect(() =>{
  const getUserDatabase = async () => {
    if(userData){
      const user = await authService.getUserDatabase(userData.$id)
      // console.log(user)
      if(user){
        setUserDatabase(user)
      }
    }
  }
  getUserDatabase()
 },[userData])

 const clear = () => {
  setAuthStatus(false)
 }

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
          {(userDatabase as any).User_Avatar ?
            (
              <div className='rounded-full bg-slate-600 h-100 w-100 object-cover'>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={authService.getAvatar((userDatabase as any).User_Avatar).toString()}
                  alt="user" className="rounded-full h-10  w-10 object-cover"
                />
              </div>

          )    :
          <svg stroke="currentColor" fill="currentColor" 
            stroke-width="0" viewBox="0 0 24 24" height="2.5em"
            width="2.5em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M12,8c-1.178,0-2,0.822-2,2s0.822,2,2,2s2-0.822,2-2S13.178,8,12,8z">
              </path><path fill="none" d="M12,4c-4.337,0-8,3.663-8,8c0,2.176,0.923,4.182,2.39,5.641c0.757-1.8,2.538-3.068,4.61-3.068h2 c2.072,0,3.854,1.269,4.61,3.068C19.077,16.182,20,14.176,20,12C20,7.663,16.337,4,12,4z M12,14c-2.28,0-4-1.72-4-4s1.72-4,4-4 s4,1.72,4,4S14.28,14,12,14z">
                </path><path fill="none" d="M13,16.572h-2c-1.432,0-2.629,1.01-2.926,2.354C9.242,19.604,10.584,20,12,20s2.758-0.396,3.926-1.073 C15.629,17.582,14.432,16.572,13,16.572z"></path>
                <path d="M12,2C6.579,2,2,6.579,2,12c0,3.189,1.592,6.078,4,7.924V20h0.102C7.77,21.245,9.813,22,12,22s4.23-0.755,5.898-2H18 v-0.076c2.408-1.846,4-4.734,4-7.924C22,6.579,17.421,2,12,2z M8.074,18.927c0.297-1.345,1.494-2.354,2.926-2.354h2 c1.432,0,2.629,1.01,2.926,2.354C14.758,19.604,13.416,20,12,20S9.242,19.604,8.074,18.927z M17.61,17.641 c-0.757-1.8-2.538-3.068-4.61-3.068h-2c-2.072,0-3.854,1.269-4.61,3.068C4.923,16.182,4,14.176,4,12c0-4.337,3.663-8,8-8 s8,3.663,8,8C20,14.176,19.077,16.182,17.61,17.641z"></path>
                <path d="M12,6c-2.28,0-4,1.72-4,4s1.72,4,4,4s4-1.72,4-4S14.28,6,12,6z M12,12c-1.178,0-2-0.822-2-2s0.822-2,2-2s2,0.822,2,2 S13.178,12,12,12z"></path>
          </svg>}
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
            <div onClick={clear}>
              <Logout />
            </div>
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
