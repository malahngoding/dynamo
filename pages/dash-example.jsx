/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from '@/components/Image'
import { NavigationBar } from '@/components/NavBar'
import { FormDash } from '@/components/dash/DashComponents'
import { CircleButtonNextChevron } from '@/components/backup/components/base-component-a/circlebutton'
import { Tags } from '@/components/backup/components/base-component-a/tags'

import { ToggleOff, ToggleOn } from '@/components/backup/components/base-component-a/toggle'
import { useState } from 'react'

export default function DashPage() {
  const [var_ToggleOff, setToggleOff] = useState('visible')
  const [var_ToggleOn, setToggleOn] = useState('hidden')
  const [var_Test1, setTest1] = useState('hidden')
  const [var_Test2, setTest2] = useState('visible')
  const [var_DashMenu, setDashMenu] = useState('hidden')
  const [var_NavBar, setNavBar] = useState('visible')

  const handleClickSmallScreen = () => {
    if (
      var_ToggleOff === 'visible' &&
      var_ToggleOn === 'hidden' &&
      var_DashMenu === 'hidden' &&
      var_NavBar === 'visible'
    ) {
      setToggleOff('hidden')
      setToggleOn('visible')
      setDashMenu('visible')
      setNavBar('visible')
    } else {
      setToggleOff('visible')
      setToggleOn('hidden')
      setDashMenu('hidden')
      setNavBar('visible')
    }
  }
  const handleClickLargeScreen = () => {
    if (var_Test1 === 'hidden' && var_Test2 === 'visible') {
      setTest2('visible')
      setTest1('visible')
    } else {
      setTest2('visible')
      setTest1('hidden')
    }
  }
  return (
    <div className="w-full h-screen">
      <div>
        <div className={`block lg:h-0 lg:invisible ${var_ToggleOff}`}>
          <NavigationBar />
        </div>
        <div className={`invisible h-0 lg:h-auto lg:visible ${var_Test2}`}>
          <NavigationBar />
        </div>
      </div>

      <div
        className={`px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ${
          var_ToggleOff === 'visible' ? 'visible' : 'hidden'
        }`}
      >
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

              <div
                className={`block lg:hidden pb-4 pl-6 ${var_ToggleOff}`}
                onClick={handleClickSmallScreen}
              >
                <ToggleOff color="bg-black-400" />
              </div>
              <div
                className={`block lg:hidden pb-4 pl-6 ${var_ToggleOn}`}
                onClick={handleClickSmallScreen}
              >
                <ToggleOn color="bg-yellow" />
              </div>

              <div className={`invisible lg:visible`} onClick={handleClickLargeScreen}>
                <Tags
                  width="w-[45px]"
                  height="h-[45px]"
                  color="bg-white"
                  tittle="Click"
                  border="border-2 border-black"
                  rounded="rounded-lg"
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              className="max-w-full z-10"
              src="/static/images/carbon-copy.webp"
              alt="Carbon Copy Code"
              width="828"
              height="686"
            />
          </div>
        </div>
      </div>

      <div>
        <div className={`h-0 ${var_ToggleOn} `}>
          <div className="h-screen bg-white border-2 border-black z-10 lg:h-0 lg:invisible">
            <div className={`block lg:hidden m-6`} onClick={handleClickSmallScreen}>
              <CircleButtonNextChevron
                width="w-[45px] lg:w-[50px]"
                height="h-[45px] lg:h-[50px]"
                color="bg-white"
                border="border-2 border-black"
                rounded="rounded-full"
              />
            </div>
            <div className={`hidden lg:block m-6`} onClick={handleClickLargeScreen}>
              <CircleButtonNextChevron
                width="w-[45px] lg:w-[50px]"
                height="h-[45px] lg:h-[50px]"
                color="bg-white"
                border="border-2 border-black"
                rounded="rounded-full"
              />
            </div>
            <div className="ml-6 mb-2 text-xl font-medium">
              <p>Welcome</p>
            </div>
            <div className="ml-6 text-2xl font-extrabold">
              <p>Denny Rismanto</p>
            </div>

            <div className="absolute inset-x-0 bottom-0">
              <div className="flex flex-col justify-center items-center border-r-2 border-l-2 border-black md:border-0 w-full h-[100px] bg-black-100 ">
                <div className="w-full h-[2px] bg-black mb-2"></div>
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
          </div>
        </div>
      </div>

      <div>
        <div className={`h-0 ${var_Test1}`}>
          <div className="invisible h-0 lg:visible lg:flex lg:flex-col lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/4 lg:h-auto lg:bg-white lg:border-2 lg:border-black lg:z-10">
            <div className={`block lg:hidden m-6`} onClick={handleClickSmallScreen}>
              <CircleButtonNextChevron
                width="w-[45px] lg:w-[50px]"
                height="h-[45px] lg:h-[50px]"
                color="bg-white"
                border="border-2 border-black"
                rounded="rounded-full"
              />
            </div>
            <div className={`hidden lg:block m-6`} onClick={handleClickLargeScreen}>
              <CircleButtonNextChevron
                width="w-[45px] lg:w-[50px]"
                height="h-[45px] lg:h-[50px]"
                color="bg-white"
                border="border-2 border-black"
                rounded="rounded-full"
              />
            </div>
            <div className="ml-6 mb-2 text-xl font-medium">
              <p>Welcome</p>
            </div>
            <div className="ml-6 text-2xl font-extrabold">
              <p>Denny Rismanto</p>
            </div>

            <div className="absolute inset-x-0 bottom-0">
              <div className="flex flex-col justify-center items-center border-r-2 border-l-2 border-black md:border-0 w-full h-[100px] bg-black-100 ">
                <div className="w-full h-[2px] bg-black mb-2"></div>
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
          </div>
        </div>
      </div>
    </div>
  )
}
