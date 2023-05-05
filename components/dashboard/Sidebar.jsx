import { ConnectWallet } from '@thirdweb-dev/react';
import React from 'react'
import Link from 'next/link';


export default function Sidebar() {
  return (
    <div className="w-full py-5 px-2 justify-between flex flex-col ml-4">
      <div className="">
        <div>
          <img src="/assets/logofull.png" className="h-14" />
        </div>
        <div className="mt-7">

        <Link href="/dashboard">
          <button
            type="button"
            class="text-gray-900 w-full gap-2 bg-blue-100 justify-start hover:bg-blue-100  focus:ring-gray-100 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-start  mr-2 mb-2"
          >
            <img src="https://img.icons8.com/fluency-systems-regular/24/2B92FF/home.png" />
            <p className="flex justify-center items-center content-center mt-1">
              Home
            </p>
          </button>
          </Link>

          <Link href="/precaution">
          <button
            type="button"
            class="text-gray-100 w-full  gap-2 hover:bg-blue-100 hover:text-gray-900 focus:ring-gray-100 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
          >
            <img src="https://img.icons8.com/?size=512&id=JOKQVP0Iztdu&format=png" class="w-5 h-5"/>
            <p className="flex justify-center items-center content-center mt-1">
            Precautions
            </p>
          </button>
          </Link>
          <Link href="/profile">          <button
            type="button"
            class="text-gray-100 w-full  gap-2  hover:bg-blue-100 hover:text-gray-900 focus:ring-gray-100 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
          >
            <img src="https://img.icons8.com/ios/24/2B92FF/user-male-circle--v1.png" alt="" />
            <p className="flex justify-center items-center content-center mt-1">
              Profile
            </p>
          </button>
          </Link>

      
         
        </div>
      </div>

      <div className=" justify-center items-center flex mb-4 rounded-3xl">
        <ConnectWallet theme="light" />
      </div>
    </div>
  );
}
