import React from "react";

export default function File() {
  return (
    <div className="flex justify-start flex-col w-full gap-4 items-center mt-12">
      <div className="gap-2 flex flex-col justify-start item-center">
        <h1 className="font-body font-bold text-2xl">
          Generate Precautions Before Checkup
        </h1>
        <p className="item-center content-center flex justify-center">
          Personalized health recommendations before your checkup
        </p>
      </div>
      <div className="flex w-1/2 px-4 py-3 border-2 rounded-2xl mt-5 bg-slate-50 justify-between gap-5">
        <div className=" flex items-center gap-2 ">
          <img
            className="w-10"
            src="https://img.icons8.com/cute-clipart/64/null/file.png"
          />
          <h2 className="font-body font-semibold">MRI scan</h2>
        </div>
        <div className="flex items-center justify-center ">
          <button className="px-4 py-2 text-white font-semibold items-center bg-blue-400 rounded-3xl text-xs">
            View Doc
          </button>
        </div>
      </div>

      <div className="flex w-1/2 px-4 py-3 border-2 rounded-2xl bg-slate-50 justify-between gap-5">
        <div className=" flex items-center gap-2 ">
          <img
            className="w-10"
            src="https://img.icons8.com/cute-clipart/64/null/file.png"
          />
          <h2 className="font-body font-semibold">MRI scan</h2>
        </div>
        <div className="flex items-center justify-center ">
          <button className="px-4 py-2 text-white font-semibold items-center bg-blue-400 rounded-3xl text-xs">
            View Doc
          </button>
        </div>
      </div>

      <div className="flex w-1/2 px-4 py-3 border-2 rounded-2xl bg-slate-50 justify-between gap-5">
        <div className=" flex items-center gap-2 ">
          <img
            className="w-10"
            src="https://img.icons8.com/cute-clipart/64/null/file.png"
          />
          <h2 className="font-body font-semibold">MRI scan</h2>
        </div>
        <div className="flex items-center justify-center ">
          <button className="px-4 py-2 text-white font-semibold items-center bg-blue-400 rounded-3xl text-xs">
            View Doc
          </button>
        </div>
      </div>

      <div className="flex w-1/2 px-4 py-3 border-2 rounded-2xl bg-slate-50 justify-between gap-5">
        <div className=" flex items-center gap-2 ">
          <img
            className="w-10"
            src="https://img.icons8.com/cute-clipart/64/null/file.png"
          />
          <h2 className="font-body font-semibold">MRI scan</h2>
        </div>
        <div className="flex items-center justify-center ">
          <button className="px-4 py-2 text-white font-semibold items-center bg-blue-400 rounded-3xl text-xs">
            View Doc
          </button>
        </div>
      </div>

      <div className="w-2/3 mt-8">
        <label className="cursor-pointer">
          <input
            className="text-sm cursor-pointer w-36 hidden"
            type="file"
            multiple
          />{" "}
          <div className="file_upload p-5 flex border-4 justify-between items-center w-full border-dotted border-gray-300 rounded-lg">
            <div className=" flex items-center justify-center gap-3">
              {" "}
              <svg
                className="text-indigo-500 w-10 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>{" "}
              <div className=" text-indigo-500">Select or drop files here</div>
            </div>
            <div className="input_field justify-end items-end flex flex-row mr-2 text-center">
              <div className="text bg-indigo-600 text-white border font-body border-gray-300 rounded-2xl font-semibold cursor-pointer p-1 px-4  hover:bg-indigo-500">
                Select
              </div>
            </div>
          </div>{" "}
        </label>
      </div>
    </div>
  );
}
