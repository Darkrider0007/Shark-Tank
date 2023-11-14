import React from 'react'

function SubmitButton({props}:any) {
  return (
    <button
        type="submit"
        className="px-3 py-1.5 border border-[#fefefe] mt-4 rounded-lg hover:bg-white hover:text-black hover:px-3.2 hover:py-1.7"
    >
        {props}
    </button>
  )
}

export default SubmitButton