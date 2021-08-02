/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'

export default function Test() {
  const [state, setState] = useState(1)
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <div className="w-screen h-[64px] border-b z-10 flex flex-row justify-between items-center">
        <div></div>
        <div className="font-black">Login Page</div>
        <div />
      </div>
      <div>
        {state === 1 ? (
          <ContentA />
        ) : state === 2 ? (
          <ContentB />
        ) : state === 3 ? (
          <ContentC />
        ) : (
          'Errror'
        )}
      </div>
      <div className="flex flex-row justify-evenly items-center w-screen h-[64px] bg-red-100 -mt-40 z-0 md:mt-0 xs:mt-0">
        <div onClick={() => setState(1)}>Icon 1</div>
        <div onClick={() => setState(2)}>Icon 1</div>
        <div onClick={() => setState(3)}>Icon 1</div>
      </div>
    </div>
  )
}

const ContentA = () => {
  // tambahin ngambal data
  return <div>Ngeeeng</div>
}

const ContentB = () => {
  return <div>Ngeeeng 1</div>
}

const ContentC = () => {
  return <div>Ngeeeng 2</div>
}
