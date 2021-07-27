/* eslint-disable @next/next/no-img-element */
import { ForgotPasswordForm } from "@/components/forms/form";

export default function ForgotPasswordPage() {
    return (
        <div className="flex flex-row justify-center md:justify-around items-center min-h-screen">
            <div className="w-[240px] md:w-1/2 h-screen bg-red-100 flex flex-col justify-end items-center">
                <img
                    className="hidden md:block w-[240px]"
                    src="/assets/afro.png"
                    alt="people band"
                />
            </div>
            <div className="w-full md:w-1/2 h-screen bg-yellow-100 md:bg-white flex flex-col justify-around items-center">
                <div className="border-custom md:border-none md:shadow-none bg-white z-10">
                    <ForgotPasswordForm />
                </div>
            </div>
            <img
                className="fixed bottom-0 z-0 md:hidden"
                src="/assets/afro.png"
                alt="people band"
            />
        </div>
    )
}