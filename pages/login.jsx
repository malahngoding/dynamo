import { FormLogin, ImageLogin } from '@/components/login/login'
export default function LoginPage() {
    return (
      <div className="flex flex-col-reverse w-screen min-h-screen bg-green-100 sm:bg-white sm:flex sm:flex-row sm:justify-around sm:items-center sm:w-screen sm:min-h-screen">
      <div className="-mt-14 z-0 h-full sm:mt-0 sm:flex sm:flex-col sm:justify-end sm:items-center sm:w-1/2 sm:min-h-screen sm:bg-green-100">
      <ImageLogin />
      </div>

      <div className=" sm:flex z-20 sm:flex-col sm:justify-center sm:items-center sm:w-1/2 sm:min-h-screen">
      <FormLogin />
      </div>
    </div>
    )
}
