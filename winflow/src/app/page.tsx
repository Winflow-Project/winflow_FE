'use client'

import Link from 'next/link'
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Winflow</h1>
      <div className="space-x-4">
        <Link href="/auth/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        </Link>
        <Link href="/auth/signup">
          <button className="bg-green-600 text-white px-4 py-2 rounded">Sign Up</button>
        </Link>
      </div>
    </main>
  )
}