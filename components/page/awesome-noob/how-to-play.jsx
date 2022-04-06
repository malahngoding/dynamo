/* eslint-disable prettier/prettier */
import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'

export const Introduction = (props) => {
  console.log(props)
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const [activeState, setActiveState] = useState(1)

  function handleMulai() {
    router.push('/camps/awesome-noob/level-1')
  }
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      {/* Use the overlay to style a dim backdrop for your dialog */}
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <div
        className={`flex flex-col justify-center items-center fixed z-10 inset-0  animate__animated animate__backInLeft ${
          activeState < 4 ? 'ml-10 mt-12' : 'hidden '
        }`}
      >
        <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3 border-2 border-gray-300">
          <div className="flex justify-between border-b border-gray-100 px-5 py-4">
            <div>
              <i className="fas fa-exclamation-circle text-blue-500"></i>
              <span className="font-bold text-gray-700 text-lg">{props.title}</span>
            </div>
          </div>
          <div
            className={`px-10 py-5 text-gray-600 font-semibold ${
              activeState === 1 ? '' : 'hidden '
            }`}
          >
            Papan Komando <br></br>- Tempat Memasukkan Perintah
          </div>
          <div
            className={`px-10 py-5 text-gray-600 font-semibold ${
              activeState === 2 ? '' : 'hidden '
            }`}
          >
            Papan Permainan <br></br>- Disini Permainan Akan Berlangsung
          </div>
          <div
            className={`px-10 py-5 text-gray-600 font-semibold ${
              activeState === 3 ? '' : 'hidden '
            }`}
          >
            Command Center <br></br>- Tempat perintah yang sudah dimasukkan
          </div>
          <div className="px-5 py-4 flex justify-end">
            {activeState < 3 ? (
              <button
                onClick={() => setActiveState(activeState + 1)}
                className="text-md font-semibold py-2 px-3 bg-blue rounded-lg text-white hover:text-gray-600 transition duration-150"
              >
                Lanjut
              </button>
            ) : (
              <button
                onClick={handleMulai}
                className="text-md font-semibold py-2 px-3 bg-blue rounded-lg text-white hover:text-gray-600 transition duration-150"
              >
                Mulai
              </button>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export const HowToPlay = (props) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const [activeState, setActiveState] = useState(1)
  console.log(isOpen)
  function handleMulai() {
    router.push('/camps/awesome-noob/level-1')
  }
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      {/* Use the overlay to style a dim backdrop for your dialog */}
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <div className="flex flex-col justify-center items-center fixed z-10 inset-0  animate__animated animate__backInLeft">
        <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3 border-2 border-gray-300">
          <div className="flex justify-between border-b border-gray-100 px-5 py-4">
            <div>
              <i className="fas fa-exclamation-circle text-blue-500"></i>
              <span className="font-bold text-gray-700 text-lg">{props.title}</span>
            </div>
          </div>
          <div className="px-10 py-5 text-gray-600 font-semibold">
            Perintah yang tersedia <br></br>- {props.description1}
            <br></br>- {props.description2}
          </div>
          <div className="px-5 py-4 flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="text-md font-semibold py-2 px-3 bg-blue rounded-lg text-white hover:text-gray-600 transition duration-150"
            >
              Mulai
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
