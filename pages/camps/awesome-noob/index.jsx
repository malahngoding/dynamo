/* eslint-disable prettier/prettier */
import { LayoutWrapper } from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { UnderConstruction } from '@/components/UnderConstruction'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useRouter } from 'next/router'
import { Introduction } from '@/components/page/awesome-noob/how-to-play'

export default function AwesomeNoobs() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const [activeState, setActiveState] = useState(1)

  function handleMulai() {
    router.push('/camps/awesome-noob/level-1')
  }

  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Awesome Noob')}
        description={siteMetadata.description}
      />
      {/* <UnderConstruction title="Awesome Noobs" subTitle="Penuh Semangat" /> */}
      <Image
        className="justify-center items-center opacity-30"
        src="/static/images/how-to-play-awsmnoob.jpg"
        alt="User"
        width="1286"
        height="586"
      />
      <Introduction title="Selamat Datang di Awesome Noob!" />
    </LayoutWrapper>
  )
}

const HowToPlay1 = () => {
  return (
    <div className="flex flex-col justify-center items-center fixed z-10 inset-0">
      <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3 border-2 border-gray-300">
        <div className="flex justify-between border-b border-gray-100 px-5 py-4">
          <div>
            <i className="fas fa-exclamation-circle text-blue-500"></i>
            <span className="font-bold text-gray-700 text-lg">Selamat Datang di Awesome Noob!</span>
          </div>
        </div>
        <div className="px-10 py-5 text-gray-600 font-semibold">
          Papan Komando <br></br>- Tempat Memasukkan Perintah
        </div>
        <div className="px-5 py-4 flex justify-end">
          <button className="text-md font-semibold py-2 px-3 bg-blue rounded-lg text-white hover:text-gray-600 transition duration-150">
            Lanjut
          </button>
        </div>
      </div>
    </div>
  )
}
const HowToPlay2 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3 border-2 border-gray-100">
        <div className="flex justify-between border-b border-gray-100 px-5 py-4">
          <div>
            <i className="fas fa-exclamation-circle text-blue-500"></i>
            <span className="font-bold text-gray-700 text-lg">Selamat Datang di Awesome Noob!</span>
          </div>
        </div>
        <div className="px-10 py-5 text-gray-600 font-semibold">
          Papan Permainan <br></br>- Disini Permainan Akan Berlangsung
        </div>
        <div className="px-5 py-4 flex justify-end">
          <button className="text-md font-semibold py-2 px-3 bg-blue rounded-lg text-white hover:text-gray-600 transition duration-150">
            Lanjut
          </button>
        </div>
      </div>
    </div>
  )
}
const HowToPlay3 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3 border-2 border-gray-100">
        <div className="flex justify-between border-b border-gray-100 px-5 py-4">
          <div>
            <i className="fas fa-exclamation-circle text-blue-500"></i>
            <span className="font-bold text-gray-700 text-lg">Selamat Datang di Awesome Noob!</span>
          </div>
        </div>
        <div className="px-10 py-5 text-gray-600 font-semibold">
          Command Center <br></br>- Tempat perintah yang sudah dimasukkan
        </div>
        <div className="px-5 py-4 flex justify-end">
          <button className="text-md font-semibold py-2 px-3 bg-green rounded-lg text-white hover:text-gray-600 transition duration-150">
            Mulai
          </button>
        </div>
      </div>
    </div>
  )
}
