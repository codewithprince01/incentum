import React, { useState } from "react";
import { Link } from "react-router-dom";
import Eligibility from "./vehicalLoancomponents/Eligibility";
import DocumentRequired from "./vehicalLoancomponents/DocumentRequired";
import Offer from "./vehicalLoancomponents/Offer";
import Apply from "./vehicalLoancomponents/Apply";

export default function VehicelLoanPage() {
  const [activeSection, setActiveSection] = useState("");


   const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


 
  

  return (
    <>
  <div className="landing scroll-smooth focus:scroll-auto"
>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-0">
        <div className="mt-6 lg:mt-[70px] lg:ml-[120px]">
          <button className="mb-4 lg:mb-10">
            <Link className="bg-primary text-white text-md sm:text-md px-2 sm:px-6 py-2 sm:py-4 rounded-full font-medium">
              VEHICLE LOAN
            </Link>
          </button>
          <h2 className="font-bold text-[26px] sm:text-[48px] lg:text-[58px] leading-[44px] sm:leading-[60px] lg:leading-[70px]">
            Drive The Car You've Always Dreamed Of, With Ease
          </h2>
          <div className="flex lg:hidden justify-center items-center mt-12 lg:mt-[310px]">
            <img
              src="/carVehicle.png"
              alt=""
              className="h-auto max-w-full w-[300px] sm:w-[500px] lg:w-[788px] lg:h-[549px]"
            />
          </div>
          <p className="text-lg sm:text-lg lg:text-lg leading-[20px] sm:leading-[25px] lg:leading-[29px] text-gray-800 mt-4 lg:mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            ullam, asperiores, aspernatur accusantium nostrum nam ducimus
            possimus ipsum delectus ad suscipit beatae, tenetur vel corrupti
            porro veniam quaerat quis numquam magni. Et minus veritatis eius
            dolorem cum dolores dolorum animi vel ea, beatae{" "}
          </p>
   
          <p className="text-lg sm:text-lg lg:text-md leading-[20px] sm:leading-[25px] lg:leading-[29px] text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            repellendus ratione dolor ipsa corporis eveniet nihil quis quia quam
            magnam aliquam commodi, consectetur aut vel! Qui, nam eligendi rem
            similique cum ratione
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mt-4 lg:mt-6">
            And yes, we will incentivise you too.
          </h2>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mt-2">
            You are a click away from your dream car. Are you ready for the
            drive of your dreams?
          </h2>
          <div className="flex flex-wrap gap-4 lg:gap-12 mt-6 lg:mt-8">
            <button>
              <Link className="flex text-black text-lg sm:text-2xl border-[2px] sm:border-[3px] border-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold items-center">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-7 sm:h-7 pl-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </button>
            <button>
              <Link className="flex text-white text-lg sm:text-2xl bg-primary px-4 sm:px-6 py-2 sm:py-4 rounded-xl font-bold items-center">
                Contact Sales
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-7 sm:h-7 pl-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </div>
        <div className=" justify-center hidden lg:block items-center  lg:mt-[70px]">
          <img
            src="/vehicleLoan/carVehicle.png"
            alt=""
            className="h-auto max-w-full w-[300px] sm:w-[350px] lg:w-[650px] lg:ml-[50px] lg:h-[549px]"
          />
        </div>
      </div>

      <div className=" justify-center border navborder hidden lg:block font-bold max-w-[1000px] mx-auto rounded-full mt-[90px] py-3 px-4 no-underline ">
        <ul className="flex flex-wrap justify-center text-gray-500  lg:gap-10  xl:gap-10 text-lg lg:text-xl xl:text-2xl py-1 xl:p-1">
          <li>
            <a href="#Eligibility" onClick={(e)=>{
              e.preventDefault();
              handleSectionClick("Eligibility")
            }} 
            className={`${activeSection==="Eligibility"? "text-white":""}`}>
              Eligibility
            </a>
          </li>
          <li>
            <a href="#Documents" onClick={(e)=>{
              e.preventDefault();
              handleSectionClick("Documents")
            }}  className={`${activeSection==="Documents"? "text-white":""}`}>
              Documents required
            </a>
          </li>
          <li>
            <a href="#apply" onClick={(e)=>{
              e.preventDefault();
              handleSectionClick("apply")
            }}  className={`${activeSection==="apply"? "text-white":""}`}>
              How to apply
            </a>
          </li>
          <li>
            <a href="#offer" onClick={(e)=>{
              e.preventDefault();
              handleSectionClick("offer")
            }}  className={`${activeSection==="offer"? "text-white":""}`}>
              What's the offer?
            </a>
          </li>
          <li>
            <a href="#Others" onClick={(e)=>{
              e.preventDefault();
              handleSectionClick("Others")
            }}  className={`${activeSection==="Others"? "text-white":""}`}>
              Others
            </a>
          </li>
        </ul>
      </div>

      <Eligibility id="Eligibility"/>
      <DocumentRequired id="Documents"/>
      <Apply id="apply"/>
      <Offer id="offer"/>
      </div>
    </>
  );
}
