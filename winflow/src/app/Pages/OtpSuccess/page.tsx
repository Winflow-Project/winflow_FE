import LeftSignup from "@/components/LeftSignup";
import Image from "next/image";
import Link from "next/link";

export default function OtpPage2() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-[#f8f8f8] p-4 rounded-lg">
            <div className="bg-white rounded-lg shadow-md flex max-w-4xl w-full overflow-hidden p-6">
                {/* left side  */}
                <LeftSignup />


                {/* right side  */}
                <div className="min-h-screen flex flex-col rounded-lg border border-gray-300 items-center justify-center">
                    <div className="bg-white p-8 rounded-lg  max-w-md w-full text-center flex flex-col items-center">
                        <Image src="/radio-check-circle-02-stroke.svg" alt="circle" width={50} height={50} />
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Congratulations</h1>
                        <p className="text-lg text-gray-700 mb-6">Your account has been successfully created</p>

                        <div className="flex flex-col">
                            <Link href="/Pages/Personalize" className=" text-green-600 py-2 px-4 rounded-md transition duration-300 text-center flex flex-row items-center">
                                Proceed to personalize <Image src="/left-arrow-stroke.svg" width={200} height={200} alt="left arrow" />
                            </Link>

                            <Link href="/home" className=" py-2 px-4 rounded-md text-black transition duration-300 text-center">
                                Skip to home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}