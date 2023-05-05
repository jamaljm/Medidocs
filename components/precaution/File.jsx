import { data } from "autoprefixer";
import React from "react";
import { useState } from "react";

export default function File() {
  
  const [show, setShow] = useState(true);
  const [formValues, setFormValues] = useState({
    checkupPurpose: '',
    symptoms: '',
    appointmentDate: '',
    appointmentTime: '',
    previousMedications: '',
    questions: '',
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const generatePrecautions = () => {
    const precautions = `I am a 23 year old male with a weight of 76 and height 175cm.I am going to a  ${formValues.checkupPurpose}.I have the followong symptoms: ${formValues.symptoms}. I take these medications: ${formValues.previousMedications}. What are some things I should know and do before going. Would also like to know : ${formValues.questions}`;

    fetch('http://127.0.0.1:8000/chat/chatgpt/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"input_text": precautions})})
      .then(response => response.json())
      .then(data => setResponse(data))
      .catch(error => setError(error));
      setShow(false);
    console.log(response,"hisl");
    console.log(error) // output the precautions string to the console
 
  };


    



if (show) {
  return (



    <div className="flex justify-start flex-col w-full gap-4 items-center mt-6">
      <div className="gap-1 flex flex-col justify-start item-center">
        <h1 className="font-body font-bold text-2xl">
          Generate Precautions Before Checkup
        </h1>
        <p className="item-center content-center flex justify-center">
          Personalized health recommendations before your checkup
        </p>
      </div>
      <div className="flex flex-col w-1/2 px-4 py-3 border-2 rounded-2xl mt-0 bg-slate-50 justify-between gap-3">
        <div className=" flex items-center gap-2 ">
          <img
            className="w-10"
            src="https://img.icons8.com/color-glass/48/null/health-checkup.png"
          />
          <h2 className="font-body font-semibold">
            Enter your checkup details
          </h2>
        </div>
        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2"> What checkup are you going to?</p>
          <input
          name="checkupPurpose"
          value={formValues.checkupPurpose}
          onChange={handleInputChange}
           className="w-full border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
        </div>
        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2"> Current Symptoms(if any)</p>
          <input
          name="symptoms"
          value={formValues.symptoms}
          onChange={handleInputChange} className="w-full border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
        </div>


        <div className="flex gap-3">
          <div className="flex gap-1 w-full mt-3 flex-col">
            <p className="font-body text-sm font-medium px-2"> when are you going?</p>
            <div className="flex">

            <input
            name="appointmentDate"
            value={formValues.appointmentDate}
            onChange={handleInputChange} type="date" className="w-full border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
            <input 
            name="appointmentTime"
            value={formValues.appointmentTime}
            onChange={handleInputChange}
              type="time" className=" w-full border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}

            </div>
          </div>

        </div>
      
       
        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2"> Previous Medications</p>
          <input 
          name="previousMedications"
          value={formValues.previousMedications}
          onChange={handleInputChange}
          className="w-full border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
        </div>

        <div className="flex gap-1 w-full  flex-col">
          <p className="font-body text-sm font-medium px-2">Any particular questions</p>
          <input
          name="questions"
          value={formValues.questions}
          onChange={handleInputChange}
          className="w-full border px-4 py-[5px] rounded-xl focus:border-blue-300 focus:border-2"></input>{" "}
        </div>
        <div className="flex gap-1 w-full flex-col mt-3">
          <button className="w-full  bg-blue-500 text-white  rounded-2xl py-2 " onClick={generatePrecautions}>
            Generate Precautions
          </button>
        </div>
      </div>
    </div>
  );
}
  else {
  return(
    <>
     <div className="flex justify-start flex-col w-full gap-4 items-center mt-6">
      <div className="gap-1 flex flex-col justify-start item-center">
        <h1 className="font-body font-bold text-2xl">
          Generate Precautions Before Checkup
        </h1>
        <p className="item-center content-center flex justify-center">
          Personalized health recommendations before your checkup
        </p>
      </div>
      <div className="  flex flex-col w-2/3 indent-5 text-justify px-4 py-3 h-full border-2 rounded-2xl mt-0 bg-slate-50 justify-between gap-3">
        <h1 className="item-center fnt-semibold content-center flex justify-center font-sans text-xl mx-3 mt-10">
          {response?.response}
        
        
              </h1>
      </div>
    </div>
    </>
  )
}
}
