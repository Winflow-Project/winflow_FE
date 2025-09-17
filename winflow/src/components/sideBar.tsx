import { HiHome } from "react-icons/hi";
import { FiCompass, FiBookmark, FiUsers, FiSettings, FiCalendar, FiHash, FiTrendingUp } from "react-icons/fi";
import Button from "./Button"


const navigationItems = [
    { icon: HiHome, label: "Home", active: true },
    { icon: FiCompass, label: "Explore" },
    { icon: FiBookmark, label: "Bookmarks" },
    { icon: FiUsers, label: "Communities" },
    { icon: FiTrendingUp, label: "Trending" },
    { icon: FiCalendar, label: "Events" },
    { icon: FiHash, label: "Topics" },
    { icon: FiSettings, label: "Settings" },
]

export function Sidebar() {
    function cn(...classes: (string | boolean | undefined)[]): string {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <aside className="w-64 border-r border-sidebar-border bg-sidebar h-[calc(100vh-4rem)] sticky top-16">
            <nav className="p-4 space-y-2">
                {navigationItems.map((item) => (
                    <Button
                        key={item.label}
                        variant={item.active ? "secondary" : "ghost"}
                        className={cn(
                            "w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                            item.active && "bg-sidebar-primary text-sidebar-primary-foreground",
                        )}
                    >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                    </Button>
                ))}
            </nav>

            <div className="p-4 mt-8">
                <h3 className="text-sm font-semibold text-sidebar-foreground mb-3">Topics</h3>
                <div className="space-y-2">
                    {["Technology", "Design", "Business", "Science", "Art"].map((topic) => (
                        <Button
                            key={topic}
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-muted-foreground hover:text-sidebar-foreground"
                        >
                            #{topic}
                        </Button>
                    ))}
                </div>
            </div>
        </aside>
    )
}
