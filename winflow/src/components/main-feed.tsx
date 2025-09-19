import { FiHeart, FiMessageCircle, FiShare2, FiMoreHorizontal } from "react-icons/fi"
import Image from "next/image"
import { useState } from "react"

type Post = {
    author: {
        name: string
        avatar: string
    }
    content: string
    image: string
    timestamp: string
    likes: number
    comments: number
    shares: number
}

export function MainFeed({ posts }: { posts: Post[] }) {
    const [activeTab, setActiveTab] = useState<"ask" | "answer">("ask")

    return (
        <div className="flex flex-col gap-6 w-full mt-6 md:mt-4">
            {/* === Tab Bar / Input Box === */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-6">
                <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <Image
                        src="/placeholder-avatar.png"
                        alt="User avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />

                    {/* Input */}
                    <input
                        type="text"
                        placeholder="What's on your mind?"
                        className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-6 mt-4 border-t border-gray-100 pt-3 text-sm font-medium text-gray-500">
                    <button
                        onClick={() => setActiveTab("ask")}
                        className={`pb-2 border-b-2 ${activeTab === "ask" ? "border-primary text-primary" : "border-transparent hover:text-gray-700"
                            }`}
                    >
                        Ask
                    </button>
                    <button
                        onClick={() => setActiveTab("answer")}
                        className={`pb-2 border-b-2 ${activeTab === "answer" ? "border-primary text-primary" : "border-transparent hover:text-gray-700"
                            }`}
                    >
                        Answer
                    </button>
                </div>
            </div>

            {/* === Posts === */}
            {posts.map((post, index) => {
                const safePost = {
                    author: {
                        name: post?.author?.name || "Anonymous",
                        avatar: post?.author?.avatar || "/placeholder-avatar.png",
                    },
                    content: post?.content || "This is a placeholder post content.",
                    image: post?.image || "/placeholder-image.png",
                    timestamp: post?.timestamp || "Just now",
                    likes: post?.likes ?? 0,
                    comments: post?.comments ?? 0,
                    shares: post?.shares ?? 0,
                }

                return (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden w-full"
                    >
                        {/* Image */}
                        <div className="relative w-full h-56 sm:h-72 md:h-80">
                            <Image
                                src={safePost.image}
                                alt="Post image"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-6 space-y-4">
                            {/* Header */}
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={safePost.author.avatar}
                                        alt={safePost.author.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-gray-900 truncate">
                                            {safePost.author.name}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                                            <span>April 23rd, 2025</span>
                                            <span>•</span>
                                            <span>{safePost.timestamp}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <FiMoreHorizontal className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Title + Content */}
                            <div>
                                <h3 className="font-medium text-gray-900 mb-1 break-words">
                                    {safePost.content}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum placeholder text until real API integration.
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-wrap items-center gap-6 pt-3 text-sm text-gray-500 border-t border-gray-100">
                                <button className="flex items-center gap-1 hover:text-red-500">
                                    <FiHeart className="h-4 w-4" />
                                    {safePost.likes}
                                </button>
                                <button className="flex items-center gap-1 hover:text-blue-500">
                                    <FiMessageCircle className="h-4 w-4" />
                                    {safePost.comments}
                                </button>
                                <button className="flex items-center gap-1 hover:text-green-500">
                                    <FiShare2 className="h-4 w-4" />
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
