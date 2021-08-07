import { FormProfile, BottomBar } from '@/components/profile/ComponentProfile'
import { NavigationBar } from '@/components/NavBar'
import { Tags } from '@/components/backup/components/base-component-a/tags'
export default function LoginPage() {
  return (
    <div className="w-full h-screen">
      <div className="inset-x-0 bottom-0 visible h-auto sm:h-0 sm:invisible fixed ">
        <div className="flex flex-col justify-center items-center w-full h-[87px] bg-black-100 ">
          <div className="w-full h-[2px] bg-black mb-4"></div>
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center mr-10">
              <div className="mb-2">
                <Tags
                  width="w-[45px]"
                  height="h-[45px]"
                  color="bg-blue"
                  border="border-2 border-black"
                  rounded="rounded-full"
                />
              </div>
              <p>Profile</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="mb-2">
                <Tags
                  width="w-[45px]"
                  height="h-[45px]"
                  color="bg-white"
                  border="border-2 border-black"
                  rounded="rounded-lg"
                />
              </div>
              <p>Dash</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="h-0 invisible sm:h-auto sm:visible">
          <NavigationBar />
        </div>
      </div>
      <div>
        <div className="mb-2">
          <FormProfile />
        </div>
      </div>
    </div>
  )
}
