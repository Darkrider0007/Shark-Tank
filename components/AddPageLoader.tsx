import React from 'react'

function AddPageLoader({prop}:any) {
  return (
    <div className="min-h-screen w-full bg-bg_dark_primary flex justify-center items-center flex-col text-white gap-3 text-2xl">
        <div className="top-1/2 left-1/2  transform -translate-y-1/2">
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
        <h1 className='flex justify-center'>{prop}</h1>
    </div>
  )
}

export default AddPageLoader