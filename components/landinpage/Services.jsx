import React from 'react'

export default function Services() {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
        MEdDocs{" "}
      </p>
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
        Features{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-5 ">
          <img src="/assets/t1.svg" alt="v1" />
          <p className="text-2xl font-semibold">lorem</p>
          <div className="flex items-center gap-2">
            <img src="/assets/italy.svg" alt="itersfgjds" />
            <p className="text-gray-500">lorem</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/t2.svg" alt="v1" />
          <p className="text-2xl font-semibold">lorem</p>
          <div className="flex items-center gap-2">
            <img src="/assets/spain.svg" alt="itersfgjds" />
            <p className="text-gray-500">lorem</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/t3.svg" alt="v1" />
          <p className="text-2xl font-semibold">lorem</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
}
