/* eslint-disable @next/next/no-img-element */
import { SignUpFormYellow } from "@/components/forms/form";

export default function SignUpPage() {
    return (
        <div className="flex flex-row justify-center md:justify-around items-center min-h-screen">
            <div className="w-0 md:w-1/2 h-screen bg-yellow-100 flex flex-col justify-end">
                <img
                    className="hidden md:block"
                    src="/assets/band-of-people.png"
                    alt="people band"
                />
            </div>
            <div className="w-full md:w-1/2 h-screen bg-yellow-100 md:bg-white flex flex-col justify-center items-center">
                <div className="border-custom md:border-none md:shadow-none bg-white z-10">
                    <SignUpFormYellow />
                </div>
            </div>
            <img
                className="fixed bottom-0 z-0 md:hidden"
                src="/assets/band-of-people.png"
                alt="people band"
            />
        </div>
    )
}
