import { ConnectWallet } from '@thirdweb-dev/react';
import React from 'react'

export default function Sidebar() {
  return (
    <div className="w-full py-5 px-2 justify-between flex flex-col ml-4">
      <div className="">
        <div>
          <img src="/assets/logofull.png" className="h-14" />
        </div>
        <div className="mt-7">
          <button
            type="button"
            class="text-gray-900 w-full  bg-blue-100 hover:bg-blue-100  focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1 text-[#626890]"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="ethereum"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
              ></path>
            </svg>
            Home
          </button>

          <button
            type="button"
            class="text-gray-100 w-full  hover:bg-blue-100 focus:ring-4 hover:text-gray-900 focus:ring-gray-100 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1 text-[#626890]"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="ethereum"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
              ></path>
            </svg>
            Home
          </button>

          <button
            type="button"
            class="text-gray-100 w-full   hover:bg-blue-100 focus:ring-4 hover:text-gray-900 focus:ring-gray-100 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1 text-[#626890]"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="ethereum"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
              ></path>
            </svg>
            Home
          </button>

          <button
            type="button"
            class="text-gray-100 w-full   hover:bg-blue-100 focus:ring-4 hover:text-gray-900 focus:ring-gray-100 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1 text-[#626890]"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="ethereum"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
              ></path>
            </svg>
            Home
          </button>

          <button
            type="button"
            class="text-gray-100 w-full   hover:bg-blue-100 focus:ring-4 hover:text-gray-900 focus:ring-gray-100 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1 text-[#626890]"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="ethereum"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
              ></path>
            </svg>
            Home
          </button>
        </div>
      </div>

      <div className=" justify-center items-center flex mb-4 rounded-3xl">
        <ConnectWallet theme="light" />
      </div>
    </div>
  );
}
