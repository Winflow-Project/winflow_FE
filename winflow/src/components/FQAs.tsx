"use client";
import React, { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
};

const faqData: FAQItem[] = [
    {
        question: "Is Askwinflow beginner-friendly?",
        answer: "This service helps you build modern web interfaces quickly.",
    },
    {
        question: "Can i share projects or learning notes?",
        answer: "Typically, projects are delivered within 1 week.",
    },
    {
        question: "How do i get helpful answer?",
        answer: "I use Next.js, React, Tailwind CSS, and other modern frontend tools.",
    },
    {
        question: "Is Askwinflow Free to use?",
        answer: "You can ask questions, share knowledge, and learn from others in a community-driven environment.",
    },
    {
        question: "What make Askwinflow different?",
        answer: "You can start by signing up and exploring the community.",
    },
];

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="max-w-2xl mx-auto my-4 px-6 space-x-6 space-y-6">
            <h2 className="text-2xl font-bold mt-4 mb-6 text-center">Frequently Asked Questions</h2>
            <h4 className="text-center mb-10 text-sm">Have a question about winflow?</h4>
            {faqData.map((item, index) => (
                <div key={index} className="border p-4 rounded-2xl mt-2 border-gray-300 mb-4">
                    <button
                        className="w-full text-left py-4 text-lg font-medium flex justify-between items-center"
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.question}
                        <span>{activeIndex === index ? "-" : "v"}</span>
                    </button>
                    {activeIndex === index && (
                        <div className="pb-4 text-gray-700">{item.answer}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
