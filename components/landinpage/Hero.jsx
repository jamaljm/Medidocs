import React from 'react'
import Navbar from './Navbar'
import { ConnectWallet } from '@thirdweb-dev/react';

export default function Hero() {
  return (
    <div className="container mx-auto my-10 ">
      <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
              Lorem ipsum dolor <br className="lg:flex hidden" /> sit amet
              <br className="lg:flex hidden" /> consectetur adipisicin
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              Lorem ipsum dolor sit amet
              <br className="lg:flex hidden" />
              dolor sit amet
            </p>
            <ConnectWallet />
          </div>
          <img src="/assets/hero.pn" alt="" />
        </div>
      </div>
    </div>
  );
};
