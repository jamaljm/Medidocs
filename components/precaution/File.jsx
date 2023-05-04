import React from "react";

export default function File() {
  return (
    <div className="flex justify-start flex-col w-full gap-4 items-center mt-10">
      <div className="gap-2 flex flex-col justify-start item-center">
        <h1 className="font-body font-bold text-2xl">
          Generate Precautions Before Checkup
        </h1>
        <p className="item-center content-center flex justify-center">
          Personalized health recommendations before your checkup
        </p>
      </div>
      <div className="flex flex-col w-1/2 px-4 py-3 border-2 rounded-2xl mt-3 bg-slate-50 justify-between gap-3">
        <div className=" flex items-center gap-2 ">
          <img
            className="w-10"
            src="https://img.icons8.com/color-glass/48/null/health-checkup.png"
          />
          <h2 className="font-body font-semibold">
            Enter your checkup details
          </h2>
        </div>
        <div className="flex gap-3">
          <div className="flex gap-1 w-full mt-3 flex-col">
            <p className="font-body text-sm font-medium px-2"> Height</p>
            <input className="w-full border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
          </div>
          <div className="flex gap-1 w-full mt-3  flex-col">
            <p className="font-body text-sm font-medium px-2"> Height</p>
            <input className="w-full border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex gap-1 w-full mt-3 flex-col">
            <p className="font-body text-sm font-medium px-2"> Height</p>
            <input className="w-full border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
          </div>
          <div className="flex gap-1 w-full mt-3  flex-col">
            <p className="font-body text-sm font-medium px-2"> Height</p>
            <input className="w-full border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
          </div>
        </div>
        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2"> Height</p>
          <input className="w-full border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
        </div>
        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2"> Height</p>
          <input className="w-full border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
        </div>
        <div className="flex gap-1 w-full flex-col mt-3">
          <button className="w-full  bg-blue-500 text-white  rounded-2xl py-2 ">
            Generate Precautions
          </button>
        </div>
      </div>
    </div>
  );
}
