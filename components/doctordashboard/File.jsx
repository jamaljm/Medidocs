import React, { useCallback, useState } from "react";
import Qr from '../qrcode/Qr'
import { useStorageUpload } from "@thirdweb-dev/react";

export default function File() {

  const [send, setSend] = useState(false);
  
  const { mutateAsync: upload } = useStorageUpload();
  


  const onDrop = useCallback(
    async (acceptedFiles) => {
      
      const uris = await upload({ data: acceptedFiles });
      console.log(uris);
    },
    [upload]
  );

  
  
    const handleFileUpload = async (file) => {
      try {
        const result = await upload(file);

        const ipfsLink = result.cid.toString();

        // Handle the successful upload and retrieve the IPFS link
        console.log("Upload complete. IPFS link:", ipfsLink);
      } catch (error) {
        // Handle the upload error
        console.error("Upload error:", error);
      }
  };
  
  const handleClick = () => {
    setSend(!send);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { mutateAsync: upload } = useStorageUpload();

  
  };

  return (
    <div className="flex justify-start flex-col w-full gap-4 items-center mt-12">
      <div className="gap-2 flex flex-col justify-start item-center">
        <h1 className="font-body font-bold text-3xl">
          Upload your medical record
        </h1>
        <p className="item-center content-center flex justify-center">
          Securely store your medical records on the blockchain
        </p>
      </div>
      <Qrcode />
      <div className="flex gap-1 w-1/2 flex-col mt-3">
        <button
          onClick={handleFileUpload}
          className="w-full bg-blue-500 text-white  rounded-2xl py-2 "
        >
          Share to a doctor
        </button>
      </div>

      <div className="w-2/3 mt-8">
        <label className="cursor-pointer">
          <input
            className="text-sm cursor-pointer w-36 hidden"
            type="file"
            onChange={onDrop}
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
          </div>
        </label>
      </div>
    </div>
  );
}


function Qrcode() {
    return (
        <div className="flex flex-col py-4 w-1/2  justify-center mt-5 bg-slate-200 rounded-2xl border-2 items-center">
            <h2 className="font-bold ">Scan the qr code</h2>
            <Qr obj="fgfdgdgdfgdf" style="h-44 w-44 m-5 bg-white p-3 rounded-3xl"/>
            </div>
        )
}

