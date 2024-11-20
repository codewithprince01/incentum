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





export default function DocumentRequired() {
    const [open, setOpen] = useState(0);

    const handleClick = (value) => setOpen(open === value ? 0 : value);

  
    const sections = [
        {
            heading: "Credit Score",
            content: "Your credit score is a critical factor in determining your eligibility. It reflects your financial history and reliability.",
            icon: (
                <BsSpeedometer2 className='w-8 lg:w-8 h-7 lg:h-8' />
            ),
        },
        {
            heading: "Income Details",
            content: "Stable income ensures you have the capacity to repay any financial commitments you make.",
            icon: (
              <IoDocumentTextOutline className='w-8 lg:w-8 h-7 lg:h-8' />
            ),
        },
        {
            heading: "Employment History",
            content: "Consistent employment history shows financial reliability and the ability to sustain regular payments.",
            icon: (
              <IoMdContacts className='w-8 lg:w-8 h-7 lg:h-8' />
            ),
        },
        {
            heading: "Personal Details",
            content: "This ratio measures your ability to manage debts. A lower ratio increases your chances of approval.",
            icon: (
              <TbListDetails className='w-8 lg:w-8 h-7 lg:h-8' />

            ),
        },
        {
            heading: "Debt-to-Income Ratio",
            content: "Your residency status and location may impact your eligibility based on local regulations.",
            icon: (
              <MdOutlineDataExploration className='w-8 lg:w-8 h-7 lg:h-8'/>
            ),
        },
        {
            heading: "Debt-to-Income Ratio",
            content: "Your residency status and location may impact your eligibility based on local regulations.",
            icon: (
              <MdOutlineDataExploration className='w-8 lg:w-8 h-7 lg:h-8'/>
            ),
        },
        {
            heading: "Debt-to-Income Ratio",
            content: "Your residency status and location may impact your eligibility based on local regulations.",
            icon: (
              <MdOutlineDataExploration className='w-8 lg:w-8 h-7 lg:h-8'/>
            ),
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 mt-2" id='Eligibility'>
            <div className="mt-[50px] lg:mt-[90px] mx-6 lg:ml-[120px]">
                <h1 className="text-[40px] lg:text-[60px] font-bold heading" >Eligibility</h1>
                <p className="text-[20px] lg:text-[25px]  text-white font-medium mt-2 leading-[30px] lg:leading-[35px]">
                    <span>Am I Eligible?</span> Let's Find Out Together!
                </p>
                <p className="text-[20px] text-white lg:text-[25px] font-medium leading-[30px] lg:leading-[35px]">
                    We believe in making dreams come true, but let's make sure we're
                    ready for the road:
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
                                <h2 className="ml-4 lg:ml-5 text-[25px] lg:text-[33px] font-bold">
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
                                <AccordionBody className="px-6 lg:px-16 pb-6 lg:pb-4 text-white text-[18px] lg:text-[21px]">
                                    {section.content}
                                </AccordionBody>
                            </div>
                        </Accordion>
                    ))}
                </div>
            </div>
            <div className="flex justify-center lg:justify-start">
                <img
                    src="/vehicleLoan/Eligibility.png"
                    alt="Eligibility Illustration"
                    className="mt-[50px] lg:mt-[90px]  sm:w-[500px] sm:[400px] lg:w-[500px] lg:h-[400px] lg:ml-[130px] imgBorder rounded-lg"
                />
            </div>
        </div>
    );
}
