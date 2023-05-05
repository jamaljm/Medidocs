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
  const { contract } = useContract(
    "0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f"
  );
  const { mutateAsync: addPatient } = useContractWrite(contract, "addPatient");
  const { data, error } = useContractRead(contract, "getPatientInfo", [
    address,
  ]);

  console.log(data)

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

  const connect = useMetamask();

  if (error) {
    console.error("Failed to read contract", error);
  }

  return (
    <div className="flex flex-col items-left py-6 px-7 mr-4 w-full justify-start">
      <h2 className="font-body text-lg font-semibold">Enter your Details</h2>

      <div className="w-full flex justify-center flex-col gap-3 items-start ">
        <div className="flex gap-1 w-full mt-5 flex-col">
          <p className="font-body text-sm font-medium px-2"> Blood Group</p>
          <input
            className="w-full px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"
            type="text"
            name="blood_group"
            value={formData.blood_group}
            onChange={handleInputChange}
            
          />
        </div>
        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2"> Age</p>
          <input
            className="w-full px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2"> Gender</p>
          <input
            className="w-full px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2"> Height</p>
          <input
            className="w-full px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"
            type="text"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2"> Weight</p>
          <input
            className="w-full px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-1 w-full flex-col mt-3">
          <button
            onClick={addPatientHandler}
            className="w-full bg-blue-400 text-white  rounded-2xl py-2 "
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
