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
    const [open,setOpen] = useState()

    const handleClick=(value=>setOpen(open===value?0:value));



    const sections = [
        {
            heading: "How Much Time It Will Take?",
            content: "Your credit score is a critical factor in determining your eligibility. It reflects your financial history and reliability.",
            icon: (
                <BsSpeedometer2 className='w-8 lg:w-10 h-8 lg:h-10' />
            ),
        },
        {
            heading: "How Much Can You Borrow?",
            content: "Stable income ensures you have the capacity to repay any financial commitments you make.",
            icon: (
              <IoDocumentTextOutline className='w-8 lg:w-10 h-8 lg:h-10' />
            ),
        },
        {
            heading: "What Will Bw The interest Rate?",
            content: "Consistent employment history shows financial reliability and the ability to sustain regular payments.",
            icon: (
              <IoMdContacts className='w-8 lg:w-10 h-8 lg:h-10' />
            ),
        },
        {
            heading: "What Will Be The Repayment Period?",
            content: "This ratio measures your ability to manage debts. A lower ratio increases your chances of approval.",
            icon: (
              <TbListDetails className='w-8 lg:w-10 h-8 lg:h-10' />

            ),
        },
        {
            heading: "And The Processing Charges?",
            content: "Your residency status and location may impact your eligibility based on local regulations.",
            icon: (
              <MdOutlineDataExploration className='w-8 lg:w-10 h-8 lg:h-10' />
            ),
        },
        {
            heading: "Monthly Insralments?",
            content: "Your residency status and location may impact your eligibility based on local regulations.",
            icon: (
              <MdOutlineDataExploration className='w-8 lg:w-10 h-8 lg:h-10' />
            ),
        },
        {
            heading: "Any Extra Fees?",
            content: "Your residency status and location may impact your eligibility based on local regulations.",
            icon: (
              <MdOutlineDataExploration className='w-8 lg:w-10 h-8 lg:h-10' />
            ),
        },
    ];


    
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 mt-[110px]" id='offer'>
    <div className="mt-[50px] lg:mt-[90px] mx-6 lg:ml-[200px]">
        <h1 className="text-[40px] lg:text-[70px] font-bold heading" >What's The Offer</h1>
        <p className="text-[20px] lg:text-[30px] font-medium text-white leading-[30px] lg:leading-[40px]">
           Before you drive away with your dream car, here are a few things to keep in mind:
        </p>
        <div className="mt-10 lg:mt-14">
            {sections.map((section,index)=>(
                <Accordion key={index}
                           open={open===index+1}
                           className={`rounded-xl mb-6 py-[8px] transition-all duration-500 ease-in-out ${open === index + 1
                            ? "border-b-[6px] border-auButtomColor"
                            : "border-b-[6px] border-white"
                            } bg-auColor`}
                >
                    <AccordionHeader onClick={()=>handleClick(index+1)}
                    className='px-6 lg:px-10 pt-8 lg:pt-10 pb-6 font-medium cursor-pointer text-white flex justify-start items-center border-none'
                        >
                            <div>{section.icon}</div>
                            <h2 className='ml-4 lg:ml-6 text-[25px] lg:text-[37px] font-bold'>{section.heading}</h2>
                        </AccordionHeader>

                        <div  style={{ 
                                maxHeight:open===index+1?"500px":0,
                                overflow:"hidden",
                                transition:"max-height 0.5s ease-in-out",
                             }}>
                                  <AccordionBody className="px-6 lg:px-12 pb-6 lg:pb-8 text-white text-[18px] lg:text-[25px]">
                                    {section.content}
                                </AccordionBody>
                           
                        </div>

                </Accordion>
            ))}
        </div>
    </div>
    <div className="flex justify-center lg:justify-start">
        <img
            src="/offer.png"
            alt="Eligibility Illustration"
            className="mt-[50px] lg:mt-[90px]  sm:w-[700px] sm:[600px] lg:w-[800px] lg:h-[600px] lg:ml-[130px] imgBorder rounded-lg"
        />
    </div>
</div>
  )
}
