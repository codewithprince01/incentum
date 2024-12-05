import React, { useState } from "react";
import Input from "../../../components/form/Input.jsx";
import Dropdown from "../../../components/form/Dropdown.jsx";
import Button from "../../../components/form/Button.jsx";
import StepBar from "../../../components/form/Step.jsx";

export default function PageTwo() {
    return (
    <div className="flex flex-col lg:flex-row p-7 py-10 rounded-lg shadow-md form-bg-image bg-[#C0F7FB] ">
     {/* Left Section */}
        <div className="p-7 lg:w-1/3 flex flex-col items-center">
          <div className="form-slidebar "></div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 bg-white mt-8 p-8 py-11 mx-4 rounded-3xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Account Set Up
          </h1>

          <h3 className="text-xl font-medium mt-4 ml-14">
            Set up your account for your loan Application
          </h3>

          {/* Steps */}
          <div>
            <h1 className="text-2xl font-bold mt-14 text-gray-900 ml-14 mb-10">
              1. Personal Details
            </h1>
            <div className="mx-12">           
          <p className="text-gray-600 mb-6">
            Set up your account for your loan application
          </p>

          <h1 className="text-xl font-bold mt-10 text-gray-900 mb-5">
            1. Personal Details
          </h1>
        </div>
      </div>
     </div>
     </div>
  );
}
