import React from 'react'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <div className="bg-[#161618] container h-screen ">
      <div className=" px-6 lg:px-16 py-10 rounded-3xl">
        <Navbar />
        <div className="bg-[#161618] flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            THE FUTURE OF
            <br className="lg:flex hidden" />  HEALTHCARE IS HERE!
              {/* <br className="lg:flex hidden" /> consectetur adipisicin */}
            </p>
            <p className="text-white text-sm sm:text-base lg:text-lg text-gray-500">
              Unlocking the power of personalized medicine with blockchain technology
              <br className="lg:flex hidden" />
              - revolutionizing healthcare, one patient at a time.
            </p>
            
          </div>
         
          <img src="/assets/hero-img.png" alt=""  className='w-1/2 '/>
        </div>
      </div>
    </div>
  );
};
