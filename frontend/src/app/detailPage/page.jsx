"use client";

import LeftMenu from "../components/LeftMenu";
import Button from "../components/Button";
import React, { useState } from "react";


function page() {
    const [isHidden, setIsHidden] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    function handleClick() {
      setIsHidden(!isHidden);
    }
  
    return (
      <div className="detailPage-wrapper flex">
        <LeftMenu className={isHidden ? "hidden animated" : "visible animated"} />
        <Button isHidden={isHidden} handleClick={handleClick} />
        <div className="flex-1 main-content flex flex-col items-center">
          <h1 className="text-4xl my-5">Details about appointment#</h1>
          <div className="details">
            <p>name of the patient: <span></span></p>
            <p>name of the doctor: <span></span></p>
            <p>Date of the appointment: <span></span></p>
            <p>Status of the appointment: <span></span></p>
            <p>Time: <span></span></p>
            <div className="grid grid-cols-1">
                  <label for="symptoms"
                    class="block mt-5 text-sm font-medium text-gray-900 dark:text-white">
                    Symptoms
                  </label>
                  <textarea
                    id="symptoms"
                    disabled="true"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
                <div className="grid grid-cols-1">
                  <label for="diagnosis"
                    class="block mt-5 text-sm font-medium text-gray-900 dark:text-white">
                    Diagnosis
                  </label>
                  <textarea
                    id="diagnosis"
                    rows="4"
                    disabled="true"

                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
                <div className="grid grid-cols-1">
                  <label for="treatment"
                    class="block mt-5 text-sm font-medium text-gray-900 dark:text-white">
                    Treatment
                  </label>
                  <textarea
                    id="treatment"
                    rows="4"
                    disabled="true"

                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default page;
  
  
  
  
  
  