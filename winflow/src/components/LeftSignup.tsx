import Image from 'next/image'

export default function LeftSignup() {
    return (
        <div className="bg-white w-1/2 p-8 hidden md:flex flex-col justify-center ">
            <Image src="/Group1.png" alt="WinFlow Logo" width={150} height={40} className="mb-4" />

            <div className="flex items-center gap-3 mb-4 justify-start">
                <Image src="/Frame 1618868298.png" alt="WinFlow Logo" width={40} height={40} className="mb-2" />
                <p className="text-sm text-gray-600">Connect with like minded people</p>
            </div>
            <div className="flex items-center gap-3 mb-4 justify-start">
                <Image src="/Frame 1618868298 (1).png" alt="WinFlow Logo" width={40} height={40} className="mb-2" />
                <p className="text-sm text-gray-600">Ask questions and share ideas</p>
            </div>
        </div>
    )
}
