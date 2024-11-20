// src/sections/FAQSection.js
import React, { useState } from "react";



const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { id: 1, 
      question: "How long my application process took", 
      answer: "Around 30 days" },
    {
      id: 2,
      question: "What we like to do & what we don’t like to do",
      answer:
        "ETC",
    },
    {
      id: 3,
      question:
        "Your charges.",
      answer: "nil",
    },
    {
      id: 4,
      question: "CIBIL score Required",
      answer: "700+",
    },
    {
      id: 5,
      question: "Salary required",
      answer: "20000",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-blue-900 to-black py-12 ">
      <div className="container rounded-3xl py-16 px-72
       max-w-auto  h-auto mx-auto">
        <h2 className="text-white text-3xl font-bold text-center mb-8">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`border rounded-lg transition-colors ${
                activeIndex === index
                  ? "bg-blue-500 border-blue-500"
                  : "border-blue-400"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left text-white font-medium focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transition-transform ${
                    activeIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-sm text-gray-200">
                  {faq.answer || "Answer content goes here."}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;