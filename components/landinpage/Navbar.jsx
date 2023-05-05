import React from "react";
import Link from 'next/link';
import { ConnectWallet } from '@thirdweb-dev/react';



export default function Navbar() {
  return (
    <div className="">
      <div className="bg-[#161618] flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
        <img src="/assets/logofull.png" alt="logo" className="h-20"/>
        <div className="text-white flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-10">
          <p>About Us</p>
          <p>FAQ</p> 
          <Link href = "/dashboard">Dashboard</Link>
          <p>Doctor</p>
        </div>
        {/* <button className="btn bg-[#161618] py-2 px-3 text-white border border-white hover:bg-[#7270dd] hover:text-white capitalize rounded-full">
          Get Started
        </button> */}
         <ConnectWallet theme="light"/>
      </div>
    </div>
  );
}
