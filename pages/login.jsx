import { FormLogin, ImageLogin } from '@/components/login/login'
export default function LoginPage() {
    return (
      <div className="flex flex-col-reverse w-screen min-h-screen bg-green-100 lg:bg-white lg:flex lg:flex-row lg:justify-around lg:items-center lg:w-screen lg:min-h-screen">
      <div className="flex flex-row justify-center items-center -mt-6 xs:-mt-14 sm:-mt-0 z-0 h-full lg:mt-0 lg:flex lg:flex-col lg:justify-end lg:items-center lg:w-1/2 lg:min-h-screen lg:bg-green-100">
      <ImageLogin />
      </div>

      <div className="flex flex-row justify-center items-center w-screen h-full lg:flex z-20 lg:flex-col lg:justify-center lg:items-center lg:w-1/2 lg:min-h-screen lg:-ml-0">
      <FormLogin />
      </div>
    </div>
    )
}
