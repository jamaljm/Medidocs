import React, { useCallback, useState } from "react";
import Qr from "../qrcode/Qr";
import { useStorageUpload } from "@thirdweb-dev/react";
import { Web3Storage } from "web3.storage";
import { saveAs } from "file-saver";
import Link from "next/link";
import Image from "../dashboard/Image";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
  useContractRead,
} from "@thirdweb-dev/react";

const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZDQTI3YmI5NkFlMzNlODJjQTZEMWIzMTgwMjcxNTBmMmEwODA0OTkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODMyNjY4NjIyODYsIm5hbWUiOiJqYW1hbCJ9.TTK1HcObAQ7tEVxnzeuF5ryfIeS253dRBXvc8iRuV_Y";

const client = new Web3Storage({ token: apiToken });

export default function File() {
  const [send, setSend] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [patientaddress, setPatientaddress] = useState("");
  const address = useAddress();
  console.log(address);
  const { contract } = useContract(
    "0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f"
  );
  const { mutateAsync: addPatientDocument } = useContractWrite(
    contract,
    "addPatientDocument"
  );
    
  const handlePatientAddressChange = (event) => {
    setPatientaddress(event.target.value);
  };
  const handlePatientNameChange = (event) => {
    setName(event.target.value);
  };

  const [file, setFile] = useState("");
  const handleUpload = async () => {
    console.log(document.getElementById("input").files[0]);
    var fileInput = document.getElementById("input");

    const rootCid = await client.put(fileInput.files, {
      name: "record",
      maxRetries: 3,
    });

    console.log(rootCid);

    const res = await client.get(rootCid);
    const files = await res.files();
    console.log(files);
    const url = URL.createObjectURL(files[0]);
    console.log(url);
    setFile(url);
    localStorage.setItem("file", url);

    console.log(patientaddress, name, file);

    try {
      const result = await addPatientDocument({
        args: [patientaddress, name, file],
      });
    } catch (error) {
      console.error("Failed to add patient: ", error);
    }
  };
  const handleClick = () => {
    setSend(!send);
  };

  const addPatientHandler = async () => {
    try {
      const result = await addPatientDocument({
        args: [patientaddress, name, file],
      });
    } catch (error) {
      console.error("Failed to add patient: ", error);
    }
  };

  return (
    <div className="flex justify-start flex-col w-full gap-4 items-center mt-12">
      <div className="gap-2 flex flex-col justify-start item-center">
        <h1 className="font-body font-bold text-3xl">
          Upload patient medical record
        </h1>
        <p className="item-center content-center flex justify-center">
          Securely store your medical records on the blockchain
        </p>
      </div>
      <h2 className="font-body text-lg font-semibold">Enter patient address</h2>
      <div
        className="flex justify-center items-center gap-1 w-full mt-2
       flex-col"
      >
        <input
          className="w-1/2 border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"
          type="text"
          name="weight"
          placeholder="address"
          onChange={handlePatientAddressChange}
        />
      </div>{" "}
      <div
        className="flex justify-center items-center gap-1 w-full mt-2
       flex-col"
      >
        <input
          className="w-1/2 border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"
          type="text"
          name="weight"
          placeholder="record name"
          onChange={handlePatientNameChange}
        />
      </div>
      <div className="w-2/3 mt-8">
        <label className="cursor-pointer">
          <input
            className="text-sm cursor-pointer w-36 hidden"
            type="file"
            id="input"
            name="file"
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
        <button
          onClick={handleUpload}
          className="w-full mt-4 bg-blue-500 text-white  rounded-2xl py-2 "
        >
          Upload{" "}
        </button>

        <button
          onClick={handleUpload}
          className="w-full mt-4 bg-blue-500 text-white  rounded-2xl py-2 "
        >
          Save
        </button>
      </div>
    </div>
  );
}

function Qrcode() {
  return (
    <div className="flex flex-col py-4 w-1/2  justify-center mt-5 bg-slate-200 rounded-2xl border-2 items-center">
      <h2 className="font-bold ">Scan the qr code</h2>
      <Qr obj="fgfdgdgdfgdf" style="h-44 w-44 m-5 bg-white p-3 rounded-3xl" />
    </div>
  );
}
