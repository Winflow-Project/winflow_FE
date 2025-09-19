"use client"

import { FiSearch } from "react-icons/fi"
import Button from "./Button"
import Input from "./input"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function Header() {
    const router = useRouter()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/Group1.png"
                        alt="Winflow Logo"
                        width={100}
                        height={30}
                        className="w-24 sm:w-28 md:w-32 h-auto"
                    />
                </div>

                {/* Middle: Search (hidden on small screens) */}
                <div className="hidden md:flex flex-1 max-w-md mx-4">
                    <div className="relative w-full">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            placeholder="Search..."
                            className="pl-10 bg-muted/50 rounded-3xl border-border w-full"
                            name="search"
                            value="header"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                console.log(e.target.value)
                            }}
                        />
                    </div>
                </div>

                {/* Right: Button */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <Button
                        onClick={() => router.push("/auth/signup")}
                        className="cursor-pointer px-3 sm:px-5 py-1 sm:py-2 text-sm sm:text-base"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    )
}
