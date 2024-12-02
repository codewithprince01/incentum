import React, { useState } from "react";


export default function LoanNav() {
  const [activeSection, setActiveSection] = useState("");


   const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <div className=" justify-center border navborder hidden lg:block font-bold max-w-[1000px] mx-auto rounded-full py-3 px-4 mt-[60px] no-underline ">
    <ul className="flex flex-wrap justify-center text-gray-500  lg:gap-10  xl:gap-10 text-lg lg:text-xl xl:text-2xl py-1 xl:p-1">
      <li>
        <a href="#eligibility" onClick={(e)=>{
          e.preventDefault();
          handleSectionClick("eligibility")
        }} 
        className={`${activeSection==="eligibility"? "text-white":""} hover:text-white `}>
          Eligibility
        </a>
      </li>
      <li>
        <a href="#documents" onClick={(e)=>{
          e.preventDefault();
          handleSectionClick("documents")
        }}  className={`${activeSection==="documents"? "text-white":""} hover:text-white `}>
          Documents Required
        </a>
      </li>
      <li>
        <a href="#apply" onClick={(e)=>{
          e.preventDefault();
          handleSectionClick("apply")
        }}  className={`${activeSection==="apply"? "text-white":""} hover:text-white `}>
          How to apply
        </a>
      </li>
      <li>
        <a href="#offer" onClick={(e)=>{
          e.preventDefault();
          handleSectionClick("offer")
        }}  className={`${activeSection==="offer"? "text-white":""} hover:text-white `}>
          What's the offer?
        </a>
      </li>
      <li>
        <a href="#Others" onClick={(e)=>{
          e.preventDefault();
          handleSectionClick("Others")
        }}  className={`${activeSection==="Others"? "text-white":""} hover:text-white `}>
          Others
        </a>
      </li>
    </ul>
  </div>
  );
}
