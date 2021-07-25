/* eslint-disable @next/next/no-img-element */
import { SignUpFormYellow } from "@/components/forms/form";

export default function SignUpPage() {
    return (
        // <div className="flex flex-col-reverse w-screen md:min-h-screen md:h-screen md:flex md:flex-row sm:justify-around sm:items-center sm:w-screen sm:min-h-screen">
        //     <div className="w-screen z-0 sm:h-full bg-yellow-100 sm:flex sm:flex-col sm:justify-end sm:items-center sm:w-1/2 sm:min-h-screen ">
        //         <img src="/assets/band-of-people.png" alt="people" />
        //     </div>
        //     <div className="bg-yellow-100 sm:bg-white sm:flex z-0 sm:flex-col sm:justify-center sm:items-center sm:w-1/2 sm:min-h-screen">
        //         <div className="z-10 flex flex-row justify-center items-center">
        //             <div className="border-custom">
        //                 <SignUpFormYellow />
        //             </div>
        //         </div>
        //     </div>
        // </div>

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
