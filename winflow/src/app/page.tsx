"use client";

import Button from "@/components/Button";
import ConversationSection from "@/components/Conversation";
import CoreValue from "@/components/CoreValue";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FQAs";
import Navbar from "@/components/Navbar";
import Start from "@/components/Start";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/auth/signup");
  };
  return (
    <>
      <Navbar />

      <main className="bg-purple-50 dark:bg-[#1a1a1a] px-4 md:px-12 py-16 text-center">
        {/* Hero Section */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white max-w-3xl mx-auto leading-snug">
          Where Knowledge Flows, Innovation Thrives, and Expertise Connects.
        </h1>

        <Button
          onClick={handleSubmit}
          className="mt-6 bg-[#F6A63B] hover:bg-[#E59535] text-white px-10 py-2 rounded shadow"
        >
          Join Winflow
        </Button>

        {/* Dashboard Image */}
        <div className="mt-12 flex justify-center">
          <Image
            src="/Image.png"
            alt="WinFlow Dashboard"
            width={1000}
            height={600}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Core Values Section */}
      </main>
      <CoreValue />

      {/* Join the conversation */}
      <ConversationSection />
      <FAQAccordion />
      <Start />
      <Footer />
    </>
  );
}
