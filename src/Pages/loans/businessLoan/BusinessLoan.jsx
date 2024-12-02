import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmiCalculator from "../../homePage/homecomponents/EmiCalculator";
import BusinessAccordion from "./BusinessAccordion";
import LoanNav from "../../../components/loanSec/LoanNav";
import Button from "../../../components/loanSec/Button";



export default function BusinessLoan() {



  return (
    <>
  <div className=" scroll-smooth focus:scroll-auto"
>
     <div className="landingheader">
      <div className="  grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-0">
        <div className="mt-6 lg:mt-[55px] lg:ml-[120px]">
          <button className="mb-4 lg:mb-8">
            <Link className="bg-primary text-white text-md sm:text-md px-4 py-3 md:px-6  md:py-4 rounded-full font-medium">
             BUSINESS LOAN
            </Link>
          </button>
          <h2 className="font-bold text-[26px] sm:text-[48px] lg:text-[55px] leading-[44px] sm:leading-[60px] lg:leading-[60px]">
            Drive The Car You've Always Dreamed Of, With Ease
          </h2>
          <div className="flex lg:hidden justify-center items-center mt-12 lg:mt-[310px]">
            <img
              src="/businessloanimg/busenessLoan.gif"
              alt=""
              className="h-auto max-w-full w-[300px] sm:w-[500px] lg:w-[788px] lg:h-[549px]"
            />
          </div>
          <p className="text-lg sm:text-lg lg:text-[15px] leading-[20px] sm:leading-[25px] lg:leading-[29px] text-gray-800 mt-4 lg:mt-3">
           We know owning you dream car isn't about the ride, it's about the freedom and joy that comes with is. Our AI driven consultantion is here to make that happen, without the stress. Whether you're eyeing a aleek sports car, a family-friendly SUV, or a reliable everyday vehicle, we,ve got you covered.{" "}
          </p>
   
          <p className="text-lg sm:text-lg lg:text-[15px]  leading-[20px] sm:leading-[25px] lg:leading-[29px] text-gray-800">
            We bring you any and every feature of car loan being offered by indian financial institution. Be it flexible repayment options, competitive rate, and quick approval, we take care of the complicated stuff so you can focus on what matters most-enjoying the road ahead.
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-2xl  mt-4 lg:mt-6">
            And yes, we will incentivise you too.
          </h2>
          <h2 className="text-2xl sm:text-3xl lg:text-2xl ">
            You are a click away from your dream car. Are you ready for the
            drive of your dreams?
          </h2>
          <Button/>
        </div>
        <div className=" justify-center hidden lg:block items-center  lg:mt-[70px]">
          <img
            src="/businessloanimg/busenessLoan.gif" 
            alt=""
            className="h-auto max-w-full w-[300px] sm:w-[350px] lg:w-[650px] lg:ml-[50px] lg:h-[549px]"
          />
        </div>
      </div>
      </div>
       
       <div className="landingfooter">
      <LoanNav/>
       <BusinessAccordion/>
      <EmiCalculator/>
      </div>
      </div>
    </>
  );
}
