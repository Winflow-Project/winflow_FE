// import { TrendingUp, Users, Calendar } from "lucide-react"
import { FiTrendingUp, FiUser, FiCalendar } from "react-icons/fi"
import { Card, CardContent, CardHeader, CardTitle } from "./Card"
import Button from "./Button"
const trendingTopics = [
    { name: "#WebDevelopment", posts: "2.4k posts" },
    { name: "#ReactJS", posts: "1.8k posts" },
    { name: "#DesignSystems", posts: "1.2k posts" },
    { name: "#TypeScript", posts: "956 posts" },
]

const suggestedUsers = [
    { name: "Sarah Chen", username: "@sarahc", avatar: "/user-avatar-sarah.png" },
    { name: "Mike Johnson", username: "@mikej", avatar: "/user-avatar-mike.jpg" },
    { name: "Alex Rivera", username: "@alexr", avatar: "/user-avatar-alex.png" },
]

const upcomingEvents = [
    { name: "Design Workshop", date: "Dec 15", attendees: 24 },
    { name: "Tech Meetup", date: "Dec 18", attendees: 156 },
    { name: "Code Review", date: "Dec 20", attendees: 8 },
]

export function ActivityPanel() {
    return (
        <aside className="w-80 p-6 space-y-6 h-[calc(100vh-4rem)] overflow-y-auto">
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                        <FiTrendingUp className="h-5 w-5 text-primary" />
                        Trending Topics
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {trendingTopics.map((topic) => (
                        <div key={topic.name} className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-foreground">{topic.name}</p>
                                <p className="text-sm text-muted-foreground">{topic.posts}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                        <FiUser className="h-5 w-5 text-primary" />
                        Suggested Users
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {suggestedUsers.map((user) => (
                        <div key={user.username} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {/* <Avatar className="h-8 w-8">
                                    <AvatarImage src={user.avatar || "/placeholder.svg"} />
                                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                                </Avatar> */}
                                <div>
                                    <p className="font-medium text-foreground text-sm">{user.name}</p>
                                    <p className="text-xs text-muted-foreground">{user.username}</p>
                                </div>
                            </div>
                            <Button size="sm" variant="outline" className="text-xs bg-transparent">
                                Follow
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                        <FiCalendar className="h-5 w-5 text-primary" />
                        Upcoming Events
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {upcomingEvents.map((event) => (
                        <div key={event.name} className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-foreground text-sm">{event.name}</p>
                                <p className="text-xs text-muted-foreground">
                                    {event.date} • {event.attendees} attending
                                </p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </aside>
    )
}
