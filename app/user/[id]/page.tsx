"use client"
import React from 'react'

function page({params}:any) {
  return (
    
    <div className="min-h-screen w-full bg-bg_dark_primary flex justify-start items-start text-[#fefefe]">
      <div>{params.id}</div>
    </div>
  )
}

export default page