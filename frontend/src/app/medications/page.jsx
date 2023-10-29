"use client";

import LeftMenu from "../components/LeftMenu";
import React, { useState } from "react";
import Button from "../components/Button";
import MedicationsModal from "../components/MedicationsModal";

function Page() {
  const [isHidden, setIsHidden] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    setIsHidden(!isHidden);
  }

  function addAppointmentHandleClick() {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div className="dashboard-wrapper flex">
      <LeftMenu className={isHidden ? "hidden animated" : "visible animated"} />
      <Button isHidden={isHidden} handleClick={handleClick} />
      <div className="apointments-content w-9/12">
        <div className="actions flex justify-end">
          <button
            class="middle none center rounded-lg bg-blue-500 mt-5 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-auto"
            data-ripple-light="true"
            onClick={addAppointmentHandleClick}
          >
            Add treatment
          </button>
        </div>
        <div className="upcoming-appointments">
          <div class="container mx-auto px-4 sm:px-8">
            <div>
              <div>
                <h2 class="text-2xl font-semibold leading-tight">
                  Medications
                </h2>
              </div>
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table class="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Patient
                        </th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Doctor
                        </th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Instructions
                        </th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Time
                        </th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Ongoing
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div class="flex items-center">
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Vera Carpenter
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nostrum quod iste ad doloribus odio
                            voluptatibus non aut corporis soluta. Magni?
                          </p>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                            15:30
                          </p>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                            Yes
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div class="flex items-center">
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Blake Bowman
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">Editor</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nostrum quod iste ad doloribus odio
                            voluptatibus non aut corporis soluta. Magni?
                          </p>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                            15:30
                          </p>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                            Yes
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div class="flex items-center">
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Dana Moore
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">Editor</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nostrum quod iste ad doloribus odio
                            voluptatibus non aut corporis soluta. Magni?
                          </p>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                            15:30
                          </p>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                            Yes
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-5 py-5 bg-white text-sm">
                          <div class="flex items-center">
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Alonzo Cox
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nostrum quod iste ad doloribus odio
                            voluptatibus non aut corporis soluta. Magni?
                          </p>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                            15:30
                          </p>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                            Yes
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                    <span class="text-xs xs:text-sm text-gray-900">
                      Showing 1 to 4 of 50 Entries
                    </span>
                    <div class="inline-flex mt-2 xs:mt-0">
                      <button class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                        Prev
                      </button>
                      <button class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MedicationsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Page;
