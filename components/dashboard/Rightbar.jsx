import React from 'react'

export default function Rightbar() {
  return (
    <div className="flex flex-col items-left py-6 px-7 mr-4 w-full justify-start">
      <h2 className="font-body text-lg font-semibold">Enter your Details</h2>

      <div className="w-full flex justify-center flex-col gap-3 items-start ">
        <div className="flex gap-1 w-full mt-5 flex-col">
          <p className="font-body text-sm font-medium px-2"> Height</p>
          <input className="w-full px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
        </div>
        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2"> Height</p>
          <input className="w-full px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
        </div>
        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2"> Height</p>
          <input className="w-full px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
        </div>
        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2"> Height</p>
          <input className="w-full px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
        </div>
        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2"> Height</p>
          <input className="w-full px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
        </div>
        <div className="flex gap-1 w-full flex-col mt-3">
         <button className='w-full bg-blue-400 text-white  rounded-2xl py-2 '>Update</button>
        </div>
      </div>
    </div>
  );
}
