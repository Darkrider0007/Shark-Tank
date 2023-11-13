import Image from 'next/image'
import React from 'react'

function page() {
  return (
    
    <div className="min-h-screen w-full bg-bg_dark_primary flex justify-start items-start text-[#fefefe]">
      <div className="max-w-[410px] h-screen bg-bg_dark_secondary shadow-lg p-2">
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
    </div>
  )
}

export default page