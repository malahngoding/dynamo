import Image from '@/components/Image'
import { NavigationBar } from '@/components/NavBar'
import { Tags } from '@/components/backup/components/base-component-a/tags'
export default function DashPage() {
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

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight dark:text-yellow text-gray-800 sm:text-4xl leading-snug sm:leading-normal">
                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green to-blue">{`<HelloWorld/>`}</span>
                <br className="m-2 md:m-6" />
                Selamat datang di{' '}
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block font-black">Malah Ngoding</span>
                </span>
              </h2>
              <p className="text-base text-gray-800 dark:text-white md:text-lg">
                Belajar koding dan berlatih di platform yang di desain cocok untuk siapa saja.
                Membaca panduan dan update terbaru. Cocok untuk siapa saja yang bersemangat untuk{' '}
                <em>ngoding</em>. Semua dalam Bahasa Indonesia.{' '}
                <span role="img" aria-label="indonesian flag" className="text-xl">
                  🇮🇩
                </span>
              </p>
              <div>
                <p>Tes</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              className="max-w-full"
              src="/static/images/carbon-copy.webp"
              alt="Carbon Copy Code"
              width="828"
              height="686"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
