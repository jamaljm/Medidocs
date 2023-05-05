import React, { useState } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
  useContractRead,
} from "@thirdweb-dev/react";

export default function Rightbar() {
  const address = useAddress();
    const [patientaddress, setPatientaddress] = useState("");

  const { contract } = useContract(
    "0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f"
  );
  const { mutateAsync: addPatient } = useContractWrite(contract, "addPatient");
  const { data, error } = useContractRead(contract, "getPatientInfo", [
    address,
  ]);
 const { docp } = useContractRead(contract, "getPatientDocuments", [
   patientaddress,
 ]);
  console.log(data);

  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    blood_group: "",
    age: "",
    gender: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const addPatientHandler = async () => {
    try {
      const result = await addPatient({
        args: [
          address,
          formData.height,
          formData.weight,
          formData.blood_group,
          formData.age,
          formData.gender,
        ],
      });
    } catch (error) {
      console.error("Failed to add patient: ", error);
    }
  };
  const handlePatientAddressChange = (event) => {
    setPatientaddress(event.target.value);
  };
  const connect = useMetamask();

  if (error) {
    console.error("Failed to read contract", error);
  }

  return (
    <div className="flex flex-col items-left py-6 px-7 mr-4 w-full justify-start">
      <h2 className="font-body text-lg font-semibold">Enter patient address</h2>
      <div
        className="flex gap-1 w-full mt-2
       flex-col"
      >
        <input
          className="w-full px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"
          type="text"
          name="weight"
          value={formData.weight}
          onChange={handlePatientAddressChange}
        />
      </div>
      <button
        onClick={addPatientHandler}
        className="w-full bg-blue-400 text-white mt-2  rounded-2xl py-2 "
      >
        Get doc
      </button>
      {docp?.map((doc, index) => (
        <div
          className="flex w-full px-4 py-3 border-2 rounded-2xl mt-0 bg-slate-50 justify-between gap-5"
          key={index}
        >
          <div className=" flex items-center gap-2 ">
            <img
              className="w-10"
              src="https://img.icons8.com/cute-clipart/64/null/file.png"
            />
            <h2 className="font-body font-semibold">{doc.name}</h2>
          </div>
          <div className="flex items-center justify-center ">
            <a
              href={doc.document}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white font-semibold items-center bg-blue-400 rounded-3xl text-xs"
            >
              View Doc
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
