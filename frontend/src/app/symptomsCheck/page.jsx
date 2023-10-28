"use client";
import React, { useState } from "react";
import LeftMenu from '../components/LeftMenu';
import Button from "../components/Button";

const initialSymptoms = [
  "Fever",
  "Cough",
  "Shortness of breath",
  "Fatigue",
  "Headache"
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
      ? leftSymptoms.filter(symptom => !selectedSymptoms.includes(symptom))
      : [...leftSymptoms, ...selectedSymptoms];

    const updatedRightSymptoms = isMovingToRight
      ? [...rightSymptoms, ...selectedSymptoms]
      : rightSymptoms.filter(symptom => !selectedSymptoms.includes(symptom));

    setLeftSymptoms(updatedLeftSymptoms);
    setRightSymptoms(updatedRightSymptoms);
    setSelectedSymptoms([]);
  }

  function handleMoveToLeft() {
    const updatedRightSymptoms = rightSymptoms.filter(symptom => !selectedSymptoms.includes(symptom));
    
    const updatedLeftSymptoms = [
      ...leftSymptoms,
      ...selectedSymptoms.filter(symptom => !leftSymptoms.includes(symptom))
    ];
  
    setLeftSymptoms(updatedLeftSymptoms);
    setRightSymptoms(updatedRightSymptoms);
    setSelectedSymptoms([]);
  }

  function handleMoveToRight() {
    const updatedLeftSymptoms = leftSymptoms.filter(symptom => !selectedSymptoms.includes(symptom));
    
    const updatedRightSymptoms = [
      ...rightSymptoms,
      ...selectedSymptoms.filter(symptom => !rightSymptoms.includes(symptom))
    ];
  
    setLeftSymptoms(updatedLeftSymptoms);
    setRightSymptoms(updatedRightSymptoms);
    setSelectedSymptoms([]);
  }

  return (
    <div className="symptoms-check__wrapper flex">
      <LeftMenu className={isHidden ? "hidden animated w-1/6" : "visible animated w-1/6"} />
      <div className="flex flex-col flex-1">
        <Button isHidden={isHidden} handleClick={() => setIsHidden(!isHidden)} />
        <div className='border-2 border-indigo-600 flex-1'>
          <h1 className='text-6xl text-center my-5'>Symptom Checker</h1>
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
            <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleMoveToLeft}>
              Move Left
            </button>
            <button className="bg-green-500 hover-bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleMoveToRight}>
              Move Right
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SymptomsCheck;
