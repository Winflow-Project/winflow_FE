export default function ConversationSection() {
    const features = [
        "Ask and answer questions",
        "Create threads to share your learning journey",
        "Follow topics and interests that suit your personality",
        "Upvote and downvote on a thread"
    ];

    return (
        <section className='bg-purple-50 flex flex-col items-center text-center py-16 px-4'>
            {/* Title with horizontal lines */}
            <div className='flex items-center gap-4 w-full max-w-2xl mb-8'>
                <div className="flex-1 h-px bg-gray-300"></div>
                <h1 className='text-xl font-semibold text-gray-800 whitespace-nowrap'>Join the conversation</h1>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Subheading */}
            <p className='text-gray-600 mb-10'>On Windows, you can:</p>

            {/* Features list */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full'>
                {features.map((feature, index) => (
                    <div key={index} className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                        <p className='text-gray-800'>{feature}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}