"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const techTopics = [
    'Cybersecurity', 'Software Development', 'Machine Learning', 'Robotics',
    'Automation', 'Web3 & Blockchain', 'Artificial Intelligence', 'Testing & QA',
    'Cloud Computing', 'DevOps', 'Product Management', 'Development',
    'UI/UX Designer', 'Data Science'
];

const careerTopics = [
    'Personal Branding', 'Leadership Skills', 'Remote Work', 'Freelancing',
    'Productivity', 'Workflow Optimization', 'Career Advice', 'Mentorship'
];

const Interests = () => {
    const [selected, setSelected] = useState<string[]>([]);
    const router = useRouter();

    const toggleSelect = (topic: string) => {
        setSelected((prev) =>
            prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
        );
    };

    const handleSubmit = () => {
        // Do something with selected topics, like send to backend or store in context
        console.log('Selected Topics:', selected);
        router.push('/'); // Navigate to home or next step
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8">
            <div className="max-w-3xl w-full bg-white rounded-xl p-6 shadow-md border">
                <h2 className="text-xl font-semibold text-center mb-1">Interest(s)</h2>
                <p className="text-sm text-center text-gray-500 mb-6">
                    Select the topics you'd like to see on your home feed.
                </p>

                <section className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">🧠 Tech & Innovation</h3>
                    <div className="flex flex-wrap gap-2">
                        {techTopics.map((topic) => (
                            <button
                                key={topic}
                                className={`px-4 py-2 text-sm rounded-full border transition ${selected.includes(topic)
                                    ? 'bg-orange-500 text-white border-orange-500'
                                    : 'bg-gray-100 text-gray-800 hover:bg-orange-100'
                                    }`}
                                onClick={() => toggleSelect(topic)}
                            >
                                {topic}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">💼 Career & Professional growth</h3>
                    <div className="flex flex-wrap gap-2">
                        {careerTopics.map((topic) => (
                            <button
                                key={topic}
                                className={`px-4 py-2 text-sm rounded-full border transition ${selected.includes(topic)
                                    ? 'bg-orange-500 text-white border-orange-500'
                                    : 'bg-gray-100 text-gray-800 hover:bg-orange-100'
                                    }`}
                                onClick={() => toggleSelect(topic)}
                            >
                                {topic}
                            </button>
                        ))}
                    </div>
                </section>

                <button
                    className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded font-semibold transition mt-4"
                    onClick={handleSubmit}
                >
                    Personalize
                </button>
            </div>
        </div>
    );
};

export default Interests;
