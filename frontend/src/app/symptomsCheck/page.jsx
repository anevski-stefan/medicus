"use client";
import React, { useState } from "react";
import LeftMenu from "../components/LeftMenu";
import Button from "../components/Button";

const initialSymptoms = [
  "Fever",
  "Cough",
  "Shortness of breath",
  "Fatigue",
  "Headache",
];

function SymptomsCheck() {
  const [isHidden, setIsHidden] = useState(false);
  const [leftSymptoms, setLeftSymptoms] = useState(initialSymptoms);
  const [rightSymptoms, setRightSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  function handleCheckboxChange(symptom) {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  }

  function handleMoveToLeftOrRight(isMovingToRight) {
    const updatedLeftSymptoms = isMovingToRight
      ? leftSymptoms.filter((symptom) => !selectedSymptoms.includes(symptom))
      : [...leftSymptoms, ...selectedSymptoms];

    const updatedRightSymptoms = isMovingToRight
      ? [...rightSymptoms, ...selectedSymptoms]
      : rightSymptoms.filter((symptom) => !selectedSymptoms.includes(symptom));

    setLeftSymptoms(updatedLeftSymptoms);
    setRightSymptoms(updatedRightSymptoms);
    setSelectedSymptoms([]);
  }

  function handleMoveToLeft() {
    const updatedRightSymptoms = rightSymptoms.filter(
      (symptom) => !selectedSymptoms.includes(symptom)
    );

    const updatedLeftSymptoms = [
      ...leftSymptoms,
      ...selectedSymptoms.filter((symptom) => !leftSymptoms.includes(symptom)),
    ];

    setLeftSymptoms(updatedLeftSymptoms);
    setRightSymptoms(updatedRightSymptoms);
    setSelectedSymptoms([]);
  }

  function handleMoveToRight() {
    const updatedLeftSymptoms = leftSymptoms.filter(
      (symptom) => !selectedSymptoms.includes(symptom)
    );

    const updatedRightSymptoms = [
      ...rightSymptoms,
      ...selectedSymptoms.filter((symptom) => !rightSymptoms.includes(symptom)),
    ];

    setLeftSymptoms(updatedLeftSymptoms);
    setRightSymptoms(updatedRightSymptoms);
    setSelectedSymptoms([]);
  }

  function handleSubmit() {
    // Make an HTTP POST request to your backend API with the selected symptoms data
    axios
      .post("/api/submit-symptoms", { symptoms: selectedSymptoms })
      .then((response) => {
        // Handle the response from the backend if needed
        console.log("Symptoms data submitted successfully:", response.data);
      })
      .catch((error) => {
        // Handle errors if the request fails
        console.error("Error submitting symptoms data:", error);
      });

      const disclaimerText = `
    <p>
      <b>Disclaimer:</b> This symptom checker is for informational purposes only and should not be considered a substitute for professional medical advice. Consult a qualified healthcare provider for accurate diagnosis and treatment. The tool's accuracy depends on user input, and it does not cover all medical conditions. In case of a medical emergency, call emergency services immediately. Use of this tool implies understanding and acceptance of these limitations. The developers do not assume liability for any damages resulting from its use.
    </p>
  `;
  }

  return (
    
    <div className="symptoms-check__wrapper flex">
      <LeftMenu
        className={
          isHidden ? "hidden animated w-1/6" : "visible animated w-1/6"
        }
      />
      <div className="flex flex-col flex-1">
        <Button
          isHidden={isHidden}
          handleClick={() => setIsHidden(!isHidden)}
        />
        <div className="flex-1">
          <h1 className="text-6xl text-center my-5">Symptom Checker</h1>
          <div className="w-10/12 mx-auto mb-20">
            <p>
              <b className="text-3xl">Disclaimer:</b><br />
              <i>This symptom checker is for informational purposes only and should not be considered a substitute for professional medical advice. Consult a qualified healthcare provider for accurate diagnosis and treatment. The tool's accuracy depends on user input, and it does not cover all medical conditions.<br />
              In case of a medical emergency, call emergency services immediately. Use of this tool implies understanding and acceptance of these limitations. The developers do not assume liability for any damages resulting from its use.</i>
            </p>
          </div>
          <div className="flex justify-center my-4">
            <div className="w-1/3 p-2 border mr-2">
              {leftSymptoms.map((symptom, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedSymptoms.includes(symptom)}
                    onChange={() => handleCheckboxChange(symptom)}
                  />
                  <span className="ml-2">{symptom}</span>
                </div>
              ))}
            </div>
            <div className="w-1/3 p-2 border ml-2">
              {rightSymptoms.map((symptom, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedSymptoms.includes(symptom)}
                    onChange={() => handleCheckboxChange(symptom)}
                  />
                  <span className="ml-2">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleMoveToLeft}
            >
              {`<`}
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleMoveToRight}
            >
              {`>`}
            </button>
          </div>
          <div className="flex justify-center my-3">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="results-wrapper">
          <h1 className="text-4xl">Results:</h1>
        </div>
      </div>
    </div>
  );
}

export default SymptomsCheck;
