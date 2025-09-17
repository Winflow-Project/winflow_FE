import { HiHeart, HiShare } from "react-icons/hi"
import { FiMessageCircle, FiMoreHorizontal } from "react-icons/fi"
// import { Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react"
import Button from "./Button"
import { Card, CardContent, CardFooter, CardHeader } from "./Card"

interface Post {
    id: number
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

interface PostCardProps {
    post: Post
}

export function PostCard({ post }: PostCardProps) {
    return (
        <Card className="bg-card border-border">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">

                        <div>
                            <p className="font-semibold text-card-foreground">{post.author.name}</p>
                            <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                        </div>
                    </div>
                    <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                        <FiMoreHorizontal className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="pb-3">
                <p className="text-card-foreground mb-4 leading-relaxed">{post.content}</p>
                <div className="rounded-lg overflow-hidden">
                    <img src={post.image || "/placeholder.svg"} alt="Post content" className="w-full h-48 object-cover" />
                </div>
            </CardContent>

            <CardFooter className="pt-3 border-t border-border">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-6">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500 gap-2">
                            <HiHeart className="h-4 w-4" />
                            {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-2">
                            <FiMessageCircle className="h-4 w-4" />
                            {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-2">
                            <HiShare className="h-4 w-4" />
                            {post.shares}
                        </Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
