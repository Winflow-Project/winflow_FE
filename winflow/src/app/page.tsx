'use client'

import { Header } from "@/components/header"
import { Sidebar } from "../components/sideBar"
import { MainFeed } from "@/components/main-feed"
import { ActivityPanel } from "@/components/activity-panel"
import { Footer } from "@/components"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <MainFeed />
        <ActivityPanel />

      </div>
      <Footer />
    </div>
  )
}
