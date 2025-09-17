import { PostCard } from "./postcard"

const posts = [
    {
        id: 1,
        author: {
            name: "Anonymous",
            avatar: "/user-avatar-1.png",
        },
        content:
            "What's the difference of these Symbols? I can't tell the difference between these symbols in my code editor. Can someone help me understand?",
        image: "/fantasy-warrior.png",
        timestamp: "2h",
        likes: 24,
        comments: 8,
        shares: 3,
    },
    {
        id: 2,
        author: {
            name: "Anonymous",
            avatar: "/diverse-user-avatar-set-2.png",
        },
        content:
            "What's the difference of these Symbols? I can't tell the difference between these symbols in my code editor. Can someone help me understand?",
        image: "/fantasy-warrior.png",
        timestamp: "4h",
        likes: 18,
        comments: 12,
        shares: 5,
    },
    {
        id: 3,
        author: {
            name: "Anonymous",
            avatar: "/diverse-user-avatars-3.png",
        },
        content:
            "What's the difference of these Symbols? I can't tell the difference between these symbols in my code editor. Can someone help me understand?",
        image: "/fantasy-warrior.png",
        timestamp: "6h",
        likes: 32,
        comments: 15,
        shares: 7,
    },
    {
        id: 4,
        author: {
            name: "Anonymous",
            avatar: "/user-avatar-4.png",
        },
        content:
            "What's the difference of these Symbols? I can't tell the difference between these symbols in my code editor. Can someone help me understand?",
        image: "/fantasy-warrior.png",
        timestamp: "8h",
        likes: 45,
        comments: 20,
        shares: 9,
    },
]

export function MainFeed() {
    return (
        <main className="flex-1 max-w-2xl mx-auto p-6">
            <div className="space-y-6">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </main>
    )
}
