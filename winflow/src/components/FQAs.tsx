"use client";
import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Is Askwinflow beginner-friendly?",
    answer:
      "Yes, whether you’re just starting your career or have years of experience, Askwinflow is a safe space to ask, share and learn.",
  },
  {
    question: "Can i share projects or learning notes?",
    answer:
      "Absolutely. Askwinfow encourages sharing your process, half - finished ideas and lessons learned along the way.",
  },
  {
    question: "How do i get helpful answers",
    answer:
      "Be clear about wht you’re asking, add context, and share what you’ve tried so far. It helps others give you better answers.",
  },
  {
    question: "Is Askwinflow Free to use?",
    answer:
      "Yes. As freemium service, our users can enjoy some of our services completely free.",
  },
  {
    question: "What make Askwinflow different?",
    answer:
      "Askwinflow is begnner - friendly Q&A forum where talents can ask questions, get helpful answers, and learn from others who are ahead in the journey",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="fqs" className="max-w-2xl mx-auto my-4 px-6 space-x-6 space-y-6">
      <h2 className="text-2xl font-bold mt-4 mb-6 text-center text-gray-800 dark:text-white">
        Frequently Asked Questions
      </h2>
      <h4 className="text-center mb-10 text-sm text-gray-600 dark:text-gray-300">
        Have a question about winflow?
      </h4>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border p-4 rounded-2xl mt-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a2a2a] mb-4"
        >
          <button
            className="w-full text-left py-4 text-lg font-medium flex justify-between items-center text-gray-800 dark:text-white"
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span className="text-gray-600 dark:text-gray-300">
              {activeIndex === index ? "-" : "▿∨"}
            </span>
          </button>
          {activeIndex === index && (
            <div className="pb-4 text-gray-700 dark:text-gray-300">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
