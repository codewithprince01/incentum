import React from "react";
import Input from "../../../components/form/Input.jsx";
import Dropdown from "../../../components/form/Dropdown.jsx";
import Button from "../../../components/form/Button.jsx";

export default function PageOne() {
  const handleOptionSelect = (option) => {
    console.log("Selected:", option);
  };

  return (
    <div className="form-bg-image ">
      <div className="grid grid-cols-12 pt-14">
        <div className="col-span-4 form-slidebar ml-[80px]"></div>
        <div className="col-span-8 border border-none mr-[60px] max-w-full w-[92%] m-auto rounded-3xl bg-white ">
          <h1 className="text-4xl font-bold mt-8 ml-14 text-gray-700">
            Account Set Up
          </h1>
          <h3 className="text-xl font-medium mt-4 ml-14">
            Set up your account for your loan Application
          </h3>
          <div>
            <h1 className="text-2xl font-bold mt-14 text-gray-900 ml-14 mb-10">
              1. Personal Details
            </h1>
            <div className="mx-12">
              <div className="grid grid-cols-2  w-full gap-6">
                <Input placeholder="Full Name as per Pan card" />
                <Input placeholder="Father Name" />
              </div>
              <div className="grid grid-cols-2 w-full gap-6">
                <Input placeholder="Mobile number" />
                <Input placeholder="Email ID" />
              </div>
              <div className="grid grid-cols-2 w-full gap-6">
                <Input placeholder="DOB" />
                <Input placeholder="Gender" />
              </div>
              <div className="grid grid-cols-2 w-full gap-6">
                <Dropdown
                  options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                  placeholder="Qualification"
                  onSelect={handleOptionSelect}
                />
                <Input placeholder="Employment Type" />
              </div>
              <div className="grid grid-cols-2 w-full gap-6">
                <Dropdown
                  options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                  placeholder="Marital Status"
                  onSelect={handleOptionSelect}
                />
                <Input placeholder="Spouse Employment Type" />
              </div>
              <div className="grid grid-cols-2 w-full gap-6">
                <Dropdown
                  options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                  placeholder="No of Dependents"
                  onSelect={handleOptionSelect}
                />
                <Input placeholder="pan Number" />
              </div>
              <div className="grid grid-cols-2 w-full gap-6">
                <Dropdown
                  options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                  placeholder="Residence Type"
                  onSelect={handleOptionSelect}
                />
                <Input placeholder="Citizenship" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mt-6 text-gray-900 ml-14 mb-10">
              Permanent Address Details
            </h1>
             <div className="mx-12">
             <div className="grid grid-cols-2 w-full gap-6">
                <Dropdown
                  options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                  placeholder="Select State"
                  onSelect={handleOptionSelect}
                />
                <Input placeholder="District" />
              </div>
              <div className="grid grid-cols-2  w-full gap-6">
                <Input placeholder="Enter Your Present Address" />
                <Input placeholder="Pin Code" />
              </div>
             </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mt-6 text-gray-900 ml-14 mb-10">
              Present Address Details
            </h1>
             <div className="mx-12">
             <div className="grid grid-cols-2 w-full gap-6">
                <Dropdown
                  options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                  placeholder="Select State"
                  onSelect={handleOptionSelect}
                />
                <Input placeholder="District" />
              </div>
              <div className="grid grid-cols-2  w-full gap-6">
                <Input placeholder="Enter Your Present Address" />
                <Input placeholder="Pin Code" />
              </div>
             </div>
          </div>
          <Button/>
        </div>
      </div>
    </div>
  );
}
