import { FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi"
import Image from "next/image"

const trendingPosts = [
    {
        id: 1,
        user: {
            name: "Henry Jay",
            avatar: "/user-avatar.png",
        },
        time: "2 days ago",
        content: "Lorem ipsum nisl fermentum turpis nisi sed ipsum duis mauris.",
        image: "/thumbnail-1.png",
        likes: "1.5k",
        comments: "233",
    },
    {
        id: 2,
        user: {
            name: "Henry Jay",
            avatar: "/user-avatar.png",
        },
        time: "2 days ago",
        content: "Lorem ipsum nisl fermentum turpis nisi sed ipsum duis mauris.",
        image: "/thumbnail-2.png",
        likes: "1.5k",
        comments: "233",
    },
    {
        id: 3,
        user: {
            name: "Henry Jay",
            avatar: "/user-avatar.png",
        },
        time: "2 days ago",
        content: "Lorem ipsum nisl fermentum turpis nisi sed ipsum duis mauris.",
        image: "/thumbnail-3.png",
        likes: "1.5k",
        comments: "233",
    },
]

export function ActivityPanel() {
    return (
        <aside className="w-80 p-4 h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Trending</h2>
                <button className="text-sm text-gray-500 hover:text-gray-700">
                    See all
                </button>
            </div>

            {/* Trending posts */}
            <div className="space-y-4">
                {trendingPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 space-y-3"
                    >
                        {/* User info */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Image
                                    src={post.user.avatar}
                                    alt={post.user.name}
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">
                                        {post.user.name}
                                    </p>
                                    <p className="text-xs text-gray-500">{post.time}</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">⋮</button>
                        </div>

                        {/* Content */}
                        <div className="flex gap-3">
                            {post.image && (
                                <Image
                                    src={post.image}
                                    alt="Post thumbnail"
                                    width={48}
                                    height={48}
                                    className="rounded-md object-cover"
                                />
                            )}
                            <p className="text-sm text-gray-700 line-clamp-3">
                                {post.content}
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <FiHeart className="h-4 w-4" />
                                {post.likes}
                            </div>
                            <div className="flex items-center gap-1">
                                <FiMessageCircle className="h-4 w-4" />
                                {post.comments}
                            </div>
                            <div className="flex items-center gap-1">
                                <FiShare2 className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}
