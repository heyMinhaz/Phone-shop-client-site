/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';

const Addproducts = () => {
    return (
      <div>
        <form>
          <section className="bg-white dark:bg-gray-900">
            <div className="flex justify-center min-h-screen">
              <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div className="w-full">
                  <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                    Add Products Details.
                  </h1>

                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Let’s get you all set up so you can verify your personal
                    account and begin setting up your profile.
                  </p>

                  <section className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Brand name
                      </label>
                      <input
                        type="text"
                        name="brandname"
                        placeholder="Brand Name"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className=" flex flex-row">
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Price $
                        </label>
                        <input
                          type="text"
                          placeholder="Price"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div className="mt-7 ml-20">
                        <select className="select select-info w-full max-w-xs">
                          <option disabled selected>
                            Select Type
                          </option>
                          <option>Phone</option>
                          <option>Computer</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Photo Url
                      </label>
                      <input
                        type="text"
                        placeholder="Photo Url"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <link
                      rel="stylesheet"
                      href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
                    />

                    <div className="max-w-2xl mx-auto">
                      <label
                        for="message"
                        className=" text-sm block text-gray-600 dark:text-gray-200"
                      >
                        Product Short Description
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="  Product Description..."
                      ></textarea>

                      <p className="mt-5">
                        Provide information about your product's specialties,
                        pricing, readability warranty, and after-sales services.
                        <a
                          className="text-blue-600 hover:underline"
                          href="#"
                          target="_blank"
                        ></a>
                        .
                      </p>
                      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
                    </div>

                    <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      <span>Add </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 rtl:-scale-x-100"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
};

export default Addproducts;