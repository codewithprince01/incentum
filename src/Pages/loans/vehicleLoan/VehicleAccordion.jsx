import React, { useState } from "react";
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

function VehicleAccordion({ type, openAccordion, handleAccordionClick }) {
    const sections = {
        eligibility: [
            {
                heading: "Credit Score",
                content: "Your credit score is a critical factor in determining your eligibility. It reflects your financial history and reliability.",
                icon: <BsSpeedometer2 className="w-8 lg:w-8 h-7 lg:h-8" />,
            },
            {
                heading: "Income Details",
                content: "Stable income ensures you have the capacity to repay any financial commitments you make.",
                icon: <IoDocumentTextOutline className="w-8 lg:w-8 h-7 lg:h-8" />,
            },
            {
                heading: "Employment History",
                content: "Consistent employment history shows financial reliability and the ability to sustain regular payments.",
                icon: <IoMdContacts className="w-8 lg:w-8 h-7 lg:h-8" />,
            },
            {
                heading: "Personal Details",
                content: "This ratio measures your ability to manage debts. A lower ratio increases your chances of approval.",
                icon: <TbListDetails className="w-8 lg:w-8 h-7 lg:h-8" />,
            },
            {
                heading: "Debt-to-Income Ratio",
                content: "Your residency status and location may impact your eligibility based on local regulations.",
                icon: <MdOutlineDataExploration className="w-8 lg:w-8 h-7 lg:h-8" />,
            },
        ],
        documents: [
            {
                heading: "Proof Of Identity",
                content: "Government-issued identification like a passport, driver's license, or national ID.",
                icon: <BsSpeedometer2 className="w-8 lg:w-8 h-7 lg:h-8" />,
            },
            {
                heading: "Proof Of Address",
                content: "Documents like utility bills, rent agreements, or property tax receipts.",
                icon: <IoDocumentTextOutline className="w-8 lg:w-8 h-7 lg:h-8" />,
            },
            {
                heading: "Proof Of Employment",
                content: "Recent pay slips or an employment letter confirming your position and salary.",
                icon: <IoMdContacts className="w-8 lg:w-8 h-7 lg:h-8" />,
            },
            {
                heading: "Proof Of Income",
                content: "Bank statements, tax returns, or salary slips to verify your earnings.",
                icon: <TbListDetails className="w-8 lg:w-8 h-7 lg:h-8" />,
            },
            {
                heading: "Proof Of Liability",
                content: "Details about any existing loans or financial obligations.",
                icon: <MdOutlineDataExploration className="w-8 lg:w-8 h-7 lg:h-8" />,
            },
            {
                heading: "Vehicle Information",
                content: "Details of the vehicle to be financed, including make, model, and cost.",
                icon: <MdOutlineDataExploration className="w-8 lg:w-8 h-7 lg:h-8" />,
            },
        ],
        apply:[
            {
                heading: "Select Your Preference",
                content: "Your credit score is a critical factor in determining your eligibility. It reflects your financial history and reliability.",
                icon: (
                    <BsSpeedometer2 className='w-8 lg:w-8 h-7 lg:h-8' />
                ),
            },
            {
                heading: "Gateher Documents",
                content: "Stable income ensures you have the capacity to repay any financial commitments you make.",
                icon: (
                  <IoDocumentTextOutline className='w-8 lg:w-8 h-7 lg:h-8' />
                ),
            },
            {
                heading: "Complete Application",
                content: "Consistent employment history shows financial reliability and the ability to sustain regular payments.",
                icon: (
                  <IoMdContacts className='w-8 lg:w-8 h-7 lg:h-8' />
                ),
            },
            {
                heading: "Upload Documents",
                content: "This ratio measures your ability to manage debts. A lower ratio increases your chances of approval.",
                icon: (
                  <TbListDetails className='w-8 lg:w-8 h-7 lg:h-8' />
    
                ),
            },
            {
                heading: "Dont't Wait For Approval",
                content: "Your residency status and location may impact your eligibility based on local regulations.",
                icon: (
                  <MdOutlineDataExploration className='w-8 lg:w-8 h-7 lg:h-8'/>
                ),
            },
            {
                heading: "Review Loan Terms",
                content: "Your residency status and location may impact your eligibility based on local regulations.",
                icon: (
                  <MdOutlineDataExploration className='w-8 lg:w-8 h-7 lg:h-8'/>
                ),
            },
            {
                heading: "Sign The Agreement",
                content: "Your residency status and location may impact your eligibility based on local regulations.",
                icon: (
                  <MdOutlineDataExploration className='w-8 lg:w-8 h-7 lg:h-8'/>
                ),
            },
            {
                heading: "Finalize Your Purchase",
                content: "Your residency status and location may impact your eligibility based on local regulations.",
                icon: (
                  <MdOutlineDataExploration className='w-8 lg:w-8 h-7 lg:h-8'/>
                ),
            },
        ],
        offer:[
            {
                heading: "How Much Time It Will Take?",
                content: "Your credit score is a critical factor in determining your eligibility. It reflects your financial history and reliability.",
                icon: (
                    <BsSpeedometer2 className='w-8 lg:w-8 h-7 lg:h-8' />
                ),
            },
            {
                heading: "How Much Can You Borrow?",
                content: "Stable income ensures you have the capacity to repay any financial commitments you make.",
                icon: (
                  <IoDocumentTextOutline className='w-8 lg:w-8 h-7 lg:h-8' />
                ),
            },
            {
                heading: "What Will Be The Interest Rate?",
                content: "Consistent employment history shows financial reliability and the ability to sustain regular payments.",
                icon: (
                  <IoMdContacts className='w-8 lg:w-8 h-7 lg:h-8' />
                ),
            },
            {
                heading: "What Will Be Tje Repayment period?",
                content: "This ratio measures your ability to manage debts. A lower ratio increases your chances of approval.",
                icon: (
                  <TbListDetails className='w-8 lg:w-8 h-7 lg:h-8' />
    
                ),
            },
            {
                heading: "And The Processing Charges?",
                content: "Your residency status and location may impact your eligibility based on local regulations.",
                icon: (
                  <MdOutlineDataExploration className='w-8 lg:w-8 h-7 lg:h-8'/>
                ),
            },
            {
                heading: "Monthly Instalments?",
                content: "Your residency status and location may impact your eligibility based on local regulations.",
                icon: (
                  <MdOutlineDataExploration className='w-8 lg:w-8 h-7 lg:h-8'/>
                ),
            },
            {
                heading: "Any Extra Fees?",
                content: "Your residency status and location may impact your eligibility based on local regulations.",
                icon: (
                  <MdOutlineDataExploration className='w-8 lg:w-8 h-7 lg:h-8'/>
                ),
            },
        ],
    };

    const titles = {
        eligibility: "Eligibility",
        documents: "Documents Required",
        apply:"How To Apply",
        offer:"What's The Offer?",
    };

    const descriptions = {
        eligibility: [
            "Am I Eligible? Let's Find Out Together!",
            "We believe in making dreams come true, but let's make sure we're ready for the road.",
        ],
        documents: [
            "Documents You'll Need for Your Loan",
            "To make your car loan process quick and easy, make sure you have the following.",
        ],
        apply:[
            "Getting a car loan should be stress-free, and we're here to make sure of that. Just follow these simple steps:"
        ],
        offer:[
            "Before you drive away with your dream car, here are a few things to keep in mind:"
        ]
    };

    const images = {
        eligibility: "/vehicleloanimg/Eligibility.png",
        documents: "/commonloanimg/documentrequired.png",
        apply:"/vehicleloanimg/apply.png",
        offer:"/commonloanimg/offer.png"
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 mt-2" id={type}>
            <div className="mt-[50px] lg:mt-[80px] mx-6 lg:ml-[120px]">
                <h1 className="text-[40px] lg:text-[55px] font-bold heading">{titles[type]}</h1>
                <p className="text-[20px] lg:text-[20px] text-white font-medium mt-2 leading-[30px] lg:leading-[35px]">
                    {descriptions[type][0]}
                </p>
                <p className="text-[20px] text-white lg:text-[20px] font-medium leading-[30px] lg:leading-[30px]">
                    {descriptions[type][1]}
                </p>
                <div className="mt-8 lg:mt-12">
                    {sections[type].map((section, index) => {
                        const accordionKey = `${type}-${index + 1}`;
                        return (
                            <Accordion
                                key={accordionKey}
                                open={openAccordion === accordionKey}
                                className={`rounded-xl mb-6 pb-2 transition-all duration-500 ease-in-out ${openAccordion === accordionKey
                                    ? "border-b-[6px] border-auButtomColor"
                                    : "border-b-[6px] border-white"
                                    } bg-auColor`}
                            >
                                <AccordionHeader
                                    onClick={() => handleAccordionClick(accordionKey)}
                                    className="px-6 lg:px-10 pt-6 lg:pt-6 pb-3 font-medium cursor-pointer text-white flex justify-start items-center border-none"
                                >
                                    <div>{section.icon}</div>
                                    <h2 className="ml-4 lg:ml-5 text-[19px] lg:text-[26px] font-bold">
                                        {section.heading}
                                    </h2>
                                </AccordionHeader>
                                <div
                                    style={{
                                        maxHeight: openAccordion === accordionKey ? "500px" : "0",
                                        overflow: "hidden",
                                        transition: "max-height 0.5s ease-in-out",
                                    }}
                                >
                                    <AccordionBody className="px-6 lg:px-16 pb-6 lg:pb-4 text-white text-[20px] lg:text-[22px]">
                                        {section.content}
                                    </AccordionBody>
                                </div>
                            </Accordion>
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-center lg:justify-start">
                <img
                    src={images[type]}
                    alt={`${titles[type]} Illustration`}
                    className="mt-[30px] lg:mt-[90px] lg:ml-[130px] w-[370px] h-[320px] lg:w-[500px] lg:h-[400px]  imgBorder my-4 rounded-lg"
                />
            </div>
        </div>
    );
}

export default function App() { 
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionClick = (key) => {
        setOpenAccordion(openAccordion === key ? null : key);
    };

    return (
        <div>
            <VehicleAccordion type="eligibility" openAccordion={openAccordion} handleAccordionClick={handleAccordionClick} />
            <VehicleAccordion type="documents" openAccordion={openAccordion} handleAccordionClick={handleAccordionClick} />
            <VehicleAccordion type="apply" openAccordion={openAccordion} handleAccordionClick={handleAccordionClick} />
            <VehicleAccordion type="offer" openAccordion={openAccordion} handleAccordionClick={handleAccordionClick} />
        </div>
    );
}
