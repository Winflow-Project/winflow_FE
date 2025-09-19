'use client'

import { Header } from "@/components/header"
import { Sidebar } from "../components/sideBar"
import { MainFeed } from "@/components/main-feed"
import { ActivityPanel } from "@/components/activity-panel"
import { Footer } from "@/components"

export default function Home() {
  return (
    <div className="bg-background mb-2">
      <Header />

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row mb-32 w-full gap-4">
        {/* Sidebar - visible from md and above */}
        <aside className="hidden md:block md:w-64 lg:w-72 flex-shrink-0">
          <Sidebar />
        </aside>

        {/* MainFeed - takes remaining space */}
        <main className="flex-1 min-w-0">
          <MainFeed
            posts={[
              {
                author: { name: "Jane Doe", avatar: "/placeholder-avatar.png" },
                content: "Just finished building my portfolio! 🚀",
                image: "/placeholder-image.png",
                timestamp: "2h ago",
                likes: 12,
                comments: 3,
                shares: 1,
              },
              {
                author: { name: "John Smith", avatar: "/placeholder-avatar.png" },
                content: "Beautiful day for coding ☀️",
                image: "/placeholder-image.png",
                timestamp: "5h ago",
                likes: 45,
                comments: 10,
                shares: 5,
              },
            ]}
          />
        </main>

        {/* ActivityPanel - visible only from lg */}
        <aside className="hidden lg:block lg:w-80 flex-shrink-0">
          <ActivityPanel />
        </aside>
      </div>

      <Footer />
    </div>
  )
}
