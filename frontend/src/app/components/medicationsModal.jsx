import React from 'react'

function medicationsModal({ isOpen, onClose }) {

    if (!isOpen) {
        return null;
      }

  return (
    <div className="modal-wrapper">
      <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div class="relative max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        <a href="#" className="absolute close-btn" onClick={onClose}>X</a>
          <div class="w-full">
            <div class="m-8 my-20 max-w-[400px] mx-auto">
              <div class="mb-8">
                <h1 class="mb-4 text-3xl font-extrabold">Add an appointment</h1>
              </div>
              <div className="mb-8">
                <div class="grid grid-cols-2 gap-4">
                  <div class="mb-6">
                    <label
                      for="firstname"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="lastname"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div class="relative mt-6">
                    <label
                      for="departments"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Department
                    </label>
                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="d1">Department1</option>
                      <option value="d2">Department2</option>
                      <option value="d2">Department3</option>
                      <option value="d2">Department4</option>
                      <option value="d2">Department5</option>
                      <option value="d2">Department6</option>
                      <option value="d2">Department7</option>
                    </select>
                  </div>

                  <div class="relative mt-6">
                    <label
                      for="doctors"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Doctor
                    </label>
                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="d1">Doctor1</option>
                      <option value="d2">Doctor2</option>
                      <option value="d2">Doctor3</option>
                      <option value="d2">Doctor4</option>
                      <option value="d2">Doctor5</option>
                      <option value="d2">Doctor6</option>
                      <option value="d2">Doctor7</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div class="relative mt-6">
                    <div class="relative max-w-sm">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"></div>
                      <label
                        for="doctors"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Date
                      </label>
                      <input
                        for="date"
                        type="date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                        placeholder="Select date"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div class="times-container mt-5">
                    <label
                      for="doctors"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Time
                    </label>
                    <ul className="times flex flex-wrap m-0">
                      <li>
                        <a href="#">08:00</a>
                      </li>
                      <li>
                        <a href="#">08:30</a>
                      </li>
                      <li>
                        <a href="#">09:00</a>
                      </li>
                      <li>
                        <a href="#">09:30</a>
                      </li>
                      <li>
                        <a href="#">10:00</a>
                      </li>
                      <li>
                        <a href="#">10:30</a>
                      </li>
                      <li>
                        <a href="#">11:00</a>
                      </li>
                      <li>
                        <a href="#">11:30</a>
                      </li>
                      <li>
                        <a href="#">12:00</a>
                      </li>
                      <li>
                        <a href="#">12:30</a>
                      </li>
                      <li>
                        <a href="#">13:00</a>
                      </li>
                      <li>
                        <a href="#">13:30</a>
                      </li>
                      <li>
                        <a href="#">14:00</a>
                      </li>
                      <li>
                        <a href="#">14:30</a>
                      </li>
                      <li>
                        <a href="#">15:00</a>
                      </li>
                      <li>
                        <a href="#">15:30</a>
                      </li>
                      <li>
                        <a href="#">16:00</a>
                      </li>
                      <li>
                        <a href="#">16:30</a>
                      </li>
                      <li>
                        <a href="#">17:00</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <label
                    for="message"
                    class="block mt-5 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div class="flex items-center mb-4 mt-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Is this an examination
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <button
                    class="middle none center rounded-lg bg-blue-500 mt-5 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-auto"
                    data-ripple-light="true"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default medicationsModal