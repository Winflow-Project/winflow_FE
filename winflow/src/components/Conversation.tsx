import Image from "next/image";

export default function ConversationSection() {
  const features = [
    {
      text: "Ask and answer questions",
      icon: "/ask.png",
    },
    {
      text: "Create threads to share your learning journey",
      icon: "/follow.png",
    },
    {
      text: "Follow topics and interests that suit your personality",
      icon: "/create.png",
    },
    {
      text: "Upvote and downvote on a thread",
      icon: "/upvote.png",
    },
  ];

  return (
    <section className="bg-purple-50 dark:bg-[#1a1a1a] flex flex-col items-center text-center py-16 px-4">
      {/* Title with horizontal lines */}
      <div className="flex items-center gap-4 w-full max-w-2xl mb-8">
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white whitespace-nowrap">
          Join the conversation
        </h1>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
      </div>

      {/* Subheading */}
      <p className="text-gray-600 dark:text-gray-300 mb-10">
        On Windows, you can:
      </p>

      {/* Features list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {features.map(({ text, icon }, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#2a2a2a] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
          >
            <Image
              src={icon}
              alt={text}
              width={40}
              height={40}
              className="w-8 h-8 object-contain"
            />
            <p className="text-gray-800 dark:text-white">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
