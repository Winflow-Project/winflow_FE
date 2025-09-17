"use client"

import { FiSearch } from "react-icons/fi"
import Button from "./Button"
import Input from "./input"
import Image from "next/image"
import router from "next/router"

export function Header() {

    const handleGetStarted = () => {
        router.push('/auth/signup');
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Image src="/Group1.png" alt="Winflow Logo" width={100} height={30} />
                    </div>
                </div>

                <div className="flex-1 max-w-md mx-8">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input placeholder="Search..." className="pl-10 bg-muted/50 rounded-3xl border-border" name={"search"} value={"header"} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                            throw new Error("Function not implemented.")
                        }} />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Button onClick={handleGetStarted} className="cursor-pointer">
                        Get Started
                    </Button>

                </div>
            </div>
        </header>
    )
}
