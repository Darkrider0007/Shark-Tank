"use client"
import authService from '@/app/appwrite/auth'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Page({ params }: any) {

  const userData = useSelector(
    (state: {
      auth: {
        userData: any, status: boolean
      }
    }) => state.auth.userData
  );

  const data = async () => {
    // const user = await authService.getCurrentUser() || null
    console.log(userData)
  }

  return (

    <div className="min-h-screen w-full bg-bg_dark_primary flex justify-start items-start text-[#fefefe]">
      <div className="max-w-[410px] h-screen bg-bg_dark_secondary shadow-lg p-2">
        <h1>{params.id}</h1>
        <div className="flex flex-col justify-between items-start w-full">
          <Image
            src="/STlogo2.png"
            alt="logo"
            height={50}
            width={50}
            className="object-cover"
          />
        </div>
      </div>
      <button onClick={data}>Test</button>
    </div>
  )
}

