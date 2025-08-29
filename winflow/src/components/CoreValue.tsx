import Image from "next/image";

export default function CoreValue() {
  const values = [
    {
      icon: "/clarity.svg",
      title: "Clarity",
      description:
        "We value clear, structured communication and helpful knowledge..",
    },
    {
      icon: "/collaboration.png",
      title: "Collaboration",
      description:
        "We believe everyone has something valuable to offer. Everyone contributes everyone wins.",
    },
    {
      icon: "/credibility.png",
      title: "Credibility",
      description: "Insight from real experience, not fluff",
    },
    {
      icon: "/accessibility.svg",
      title: "Accessibility",
      description: "Easy to navigate, open to diverse professionals.",
    },
    {
      icon: "/empowerment.png",
      title: "Empowerment",
      description: "Equip users to grow their craft, career, and confidence.",
    },
    {
      icon: "/respect.png",
      title: "Respect",
      description:
        "Winflow is built to be a safe, inclusive environment for everyone.",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#1a1a1a] py-12">
      <section className="flex flex-col items-center text-center mb-12 px-4">
        <div className="flex items-center gap-4 my-4">
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Core Values
          </h1>
          <div className="flex-1 h-px bg-gray-400 dark:bg-gray-600"></div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto leading-snug">
          The guiding principles that define how we work and interact with our{" "}
          <br /> community.
        </p>
      </section>

      {/* Card section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-center text-gray-600 dark:text-gray-300 mx-auto leading-snug max-w-xl mt-2">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
