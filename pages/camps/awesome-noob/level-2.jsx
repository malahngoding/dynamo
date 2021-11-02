/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import Image from '@/components/Image'

export default function Level2() {
  const [playerIndex, setPlayerIndex] = useState(6)
  const [trophyIndex] = useState(2)
  const [stoneIndex] = useState(4)
  const [arrayOfCommand, setArrayOfCommand] = useState([])
  const [successModal, setSuccessModal] = useState(false)
  const [failureModal, setFailureModal] = useState(false)
  const commandlength = arrayOfCommand.length
  const maps = [
    { isPlayer: false, isStone: false, isFinish: false, x: 1, y: 1 },
    { isPlayer: false, isStone: false, isFinish: false, x: 2, y: 1 },
    { isPlayer: false, isStone: false, isFinish: true, x: 3, y: 1 },
    { isPlayer: false, isStone: false, isFinish: false, x: 1, y: 2 },
    { isPlayer: false, isStone: true, isFinish: false, x: 2, y: 2 },
    { isPlayer: false, isStone: false, isFinish: false, x: 3, y: 2 },
    { isPlayer: true, isStone: false, isFinish: false, x: 1, y: 3 },
    { isPlayer: false, isStone: false, isFinish: false, x: 2, y: 3 },
    { isPlayer: false, isStone: false, isFinish: false, x: 3, y: 3 },
  ]

  const addArrayOfCommand = (item) => {
    setArrayOfCommand([...arrayOfCommand, item])
  }

  const functionGetIndexFromXY = (x, y) => {
    let index = maps.findIndex((element) => {
      if (element.x === x && element.y == y) {
        return true
      }
    })

    return index
  }

  const handleRun = (item) => {
    let currentInterval = 0

    let makeIntervalID = setInterval(() => {
      // HANDLE MOVEMENT
      switch (arrayOfCommand[currentInterval]) {
        case 'kiri':
          setPlayerIndex((current) => {
            let currentX = maps[current].x
            let currentY = maps[current].y
            if (currentX === 3 && currentY === 2) {
              alert('Ups, kamu tidak bisa melewati batu')
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
            } else if (currentX > 1) {
              setPlayerIndex(functionGetIndexFromXY(currentX - 1, currentY))
            } else {
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
            }
          })
          break
        case 'kanan':
          setPlayerIndex((current) => {
            let currentX = maps[current].x
            let currentY = maps[current].y
            if (currentX === 1 && currentY === 2) {
              alert('Ups, kamu tidak bisa melewati batu')
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
            } else if (currentX < 3) {
              setPlayerIndex(functionGetIndexFromXY(currentX + 1, currentY))
            } else {
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
            }
          })
          break
        case 'atas':
          setPlayerIndex((current) => {
            let currentX = maps[current].x
            let currentY = maps[current].y
            if (currentX === 2 && currentY === 3) {
              alert('Ups, kamu tidak bisa melewati batu')
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
            } else if (currentY > 1) {
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY - 1))
            } else {
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
            }
          })
          break
        case 'bawah':
          setPlayerIndex((current) => {
            let currentX = maps[current].x
            let currentY = maps[current].y
            if (currentX === 2 && currentY === 1) {
              alert('Ups, kamu tidak bisa melewati batu')
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
            } else if (currentY < 3) {
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY + 1))
            } else {
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
            }
          })
          break
      }
      currentInterval = currentInterval + 1

      // HANDLE MOVEMENT
      if (currentInterval === arrayOfCommand.length) {
        setPlayerIndex((current) => {
          let currentX = maps[current].x
          let currentY = maps[current].y
          if (functionGetIndexFromXY(currentX, currentY) !== trophyIndex) {
            setFailureModal(true)
            setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
          } else if (functionGetIndexFromXY(currentX, currentY) === stoneIndex) {
            setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
          } else {
            setSuccessModal(true)
            setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
          }
          clearInterval(makeIntervalID)
        })
      }
    }, 1000)
  }

  const reset = () => {
    setArrayOfCommand([])
    setPlayerIndex(6)
  }
  useEffect(() => {
    if (successModal === true) {
      setTimeout(() => {
        setSuccessModal(false)
      }, 2000)
    } else if (failureModal === true) {
      setTimeout(() => {
        setFailureModal(false)
      }, 2000)
    }
  }, [successModal, failureModal])
  return (
    <div>
      <div className="w-[200px] h-[50px] m-6">
        {successModal === false ? null : <ToastSuccess setModals={setSuccessModal} />}
        {failureModal === false ? null : <ToastFailure setModals={setFailureModal} />}
      </div>
      <div className="flex flex-col flex-wrap justify-center items-center min-h-screen w-full md:flex md:flex-row md:justify-center md:item-center">
        <div className="grid grid-cols-3">
          {maps.map((item, index) => (
            <div
              className="flex justify-center items-center h-[100px] w-[100px] md:h-32 md:w-32 border-2 border-black"
              key={`${item.x}_${item.y}`}
            >
              {/* <p className="font-mono">
              ({`${item.x},${item.y}`})-[{index}]
            </p> */}
              <div>
                {playerIndex === index ? (
                  <Image
                    className="animate-bounce z-10"
                    src="/static/images/user.png"
                    alt="User"
                    width="50"
                    height="65"
                  />
                ) : null}
                {trophyIndex === index ? (
                  <Image
                    className=""
                    src="/static/images/finish.png"
                    alt="User"
                    width="50"
                    height="50"
                  />
                ) : null}{' '}
                {stoneIndex === index ? (
                  <Image
                    className=""
                    src="/static/images/rock.png"
                    alt="User"
                    width="50"
                    height="50"
                  />
                ) : null}{' '}
              </div>
            </div>
          ))}
        </div>

        <div className="my-2">
          <div className="flex flex-col justify-center items-center my-2">
            <ul>
              {arrayOfCommand.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {commandlength < 4 ? (
            <>
              <button
                onClick={() => addArrayOfCommand('kiri')}
                className="border-2 border-black-800 rounded-xl bg-yellow text-white mx-2 py-2 px-4"
              >
                kiri
              </button>
              <button
                onClick={() => addArrayOfCommand('kanan')}
                className="border-2 border-black-800 rounded-xl bg-yellow text-white mx-2 p-2"
              >
                kanan
              </button>
              <button
                onClick={() => addArrayOfCommand('atas')}
                className="border-2 border-black-800 rounded-xl bg-yellow text-white mx-2 p-2"
              >
                atas
              </button>
              <button
                onClick={() => addArrayOfCommand('bawah')}
                className="border-2 border-black-800 rounded-xl bg-yellow text-white mx-2 p-2"
              >
                bawah
              </button>
              <button
                onClick={() => handleRun('RUN')}
                className="border-2 border-black-800 rounded-xl bg-green text-white mx-2 py-2 px-4"
              >
                Run
              </button>
              <button
                onClick={reset}
                className="border-2 border-black-800 rounded-xl bg-red-600 text-white mx-2 p-2"
              >
                Reset
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleRun('RUN')}
                className="border-2 border-black-800 rounded-xl bg-green text-white mx-2 py-2 px-4"
              >
                Run
              </button>
              <button
                onClick={reset}
                className="border-2 border-black-800 rounded-xl bg-red-600 text-white mx-2 p-2"
              >
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
const ToastSuccess = () => {
  return (
    <div className="flex flex-row justify-center items-center border-2 border-black bg-black rounded-lg p-1">
      <div>
        <div className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-green mr-2">
          <svg
            width="15"
            height="10"
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1L6 12L1 7"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <p className="text-xs font-bold text-white">Selamat kamu menang</p>
      </div>
    </div>
  )
}
const ToastFailure = () => {
  return (
    <div className="flex flex-row justify-start items-center border-2 border-black bg-black rounded-lg p-1">
      <div>
        <div className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-red ml-1 mr-10">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#18191F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#18191F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <p className="text-xs font-bold text-white">Kamu kalah</p>
      </div>
    </div>
  )
}
