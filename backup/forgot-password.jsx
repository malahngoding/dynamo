/* eslint-disable @next/next/no-img-element */
import { ForgotPasswordForm } from '@/components/forms/form'

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col-reverse w-screen min-h-screen bg-pink-100 lg:bg-white lg:flex lg:flex-row lg:justify-around lg:items-center lg:w-screen lg:min-h-screen">
      <div className="flex flex-row justify-center items-center sm:-mt-0 z-0 h-full lg:mt-0 lg:flex lg:flex-col lg:justify-end lg:items-center lg:w-1/2 lg:min-h-screen lg:bg-pink-100">
        <img className="w-[240px]" src="/assets/afro.png" alt="people band" />
      </div>
      <div className="flex flex-row justify-center items-center w-screen h-full lg:flex z-20 lg:flex-col lg:justify-center lg:items-center lg:w-1/2 lg:min-h-screen lg:-ml-0">
        <ForgotPasswordForm />
      </div>
      {/* <img
                className="fixed bottom-0 z-0 md:hidden"
                src="/assets/afro.png"
                alt="people band"
            /> */}
    </div>
  )
}
