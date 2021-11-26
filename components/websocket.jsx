import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { PrimaryButton } from '@/components/design/button'

const Websocket = () => {
  const [message, setMessage] = useState('')
  const socket = io('ws://localhost:6001')
  socket.on('ChatEvent', (...args) => {
    console.log(args)
  })
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="mb-6">
            <input
              className="border-2 border-black rounded-lg text-sm font-bold text-left w-[300px] h-[139px] break-words"
              type="text"
              onChange={(e) => {
                socket.emit('ChatEvent', e.target.value)
                setMessage(e.target.value)
              }}
            />
          </div>
          <PrimaryButton
            onClick={() => {
              socket.emit('ChatEvent', {
                hello: message,
              })
            }}
            className="border mx-2 p-2"
          >
            Submit
          </PrimaryButton>
        </div>
      </div>
    </>
  )
}

export default Websocket
