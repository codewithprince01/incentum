import React, { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineDataExploration } from "react-icons/md";





export default function Eligibility() {
    const [open, setOpen] = useState(0);

    const handleClick = (value) => setOpen(open === value ? 0 : value);

  
    const sections = [
        {
            heading: "Proof Of Identity",
            content: "Your credit score is a critical factor in determining your eligibility. It reflects your financial history and reliability.",
            icon: (
                <BsSpeedometer2 className='w-8 lg:w-8 h-7 lg:h-8' />
            ),
        },
        {
            heading: "Proof Of Address",
            content: "Stable income ensures you have the capacity to repay any financial commitments you make.",
            icon: (
              <IoDocumentTextOutline className='w-8 lg:w-8 h-7 lg:h-8' />
            ),
        },
        {
            heading: "Proof Of Employment",
            content: "Consistent employment history shows financial reliability and the ability to sustain regular payments.",
            icon: (
              <IoMdContacts className='w-8 lg:w-8 h-7 lg:h-8' />
            ),
        },
        {
            heading: "Proof Of Income",
            content: "This ratio measures your ability to manage debts. A lower ratio increases your chances of approval.",
            icon: (
              <TbListDetails className='w-8 lg:w-8 h-7 lg:h-8' />

            ),
        },
        {
            heading: "Proof Of Liability",
            content: "Your residency status and location may impact your eligibility based on local regulations.",
            icon: (
              <MdOutlineDataExploration className='w-8 lg:w-8 h-7 lg:h-8'/>
            ),
        },
        {
            heading: "Vehicle Information",
            content: "Your residency status and location may impact your eligibility based on local regulations.",
            icon: (
              <MdOutlineDataExploration className='w-8 lg:w-8 h-7 lg:h-8'/>
            ),
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 mt-2" id='Eligibility'>
            <div className="mt-[50px] lg:mt-[80px] mx-6 lg:ml-[120px]">
                <h1 className="text-[40px] lg:text-[55px] font-bold heading" >Documents Required</h1>
                <p className="text-[20px] lg:text-[20px]  text-white font-medium mt-2 leading-[30px] lg:leading-[35px]">
                    Document You'll Need for Your Loan
                </p>
                <p className="text-[20px] text-white lg:text-[20px] font-medium leading-[30px] lg:leading-[30px]">
                  To make your car loan process quick and easy, make sure you have the following
                </p>
                <div className="mt-8 lg:mt-12">
                    {sections.map((section, index) => (
                        <Accordion
                            key={index}
                            open={open === index + 1}
                            className={`rounded-xl mb-6 pb-2     transition-all duration-500 ease-in-out ${open === index + 1
                                ? "border-b-[6px] border-auButtomColor"
                                : "border-b-[6px] border-white"
                                } bg-auColor`}
                        >
                            <AccordionHeader
                                onClick={() => handleClick(index + 1)}
                                className="px-6 lg:px-10 pt-6 lg:pt-6 pb-3 font-medium cursor-pointer text-white flex justify-start items-center border-none"
                            >
                                <div>{section.icon}</div>
                                <h2 className="ml-4 lg:ml-5 text-[25px]lg:text-[26px] font-bold">
                                    {section.heading}
                                </h2>
                            </AccordionHeader>
                            <div
                                style={{
                                    maxHeight: open === index + 1 ? "500px" : "0",
                                    overflow: "hidden",
                                    transition: "max-height 0.5s ease-in-out",
                                }}
                            >
                                <AccordionBody className="px-6 lg:px-16 pb-6 lg:pb-4 text-white text-[250px] lg:text-[22px]">
                                    {section.content}
                                </AccordionBody>
                            </div>
                        </Accordion>
                    ))}
                </div>
            </div>
            <div className="flex justify-center lg:justify-start">
                <img
                    src="/vehicleLoan/documentrequired.png"
                    alt="Eligibility Illustration"
                    className="mt-[50px] lg:mt-[90px]  sm:w-[500px] sm:[400px] lg:w-[500px] lg:h-[400px] lg:ml-[130px] imgBorder rounded-lg"
                />
            </div>
        </div>
    );
}
