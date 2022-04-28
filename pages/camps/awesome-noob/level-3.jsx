/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react'
import Image from '@/components/Image'
import { PrimaryButton } from '@/components/design/button'
import ConfettiGenerator from 'confetti-js'
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/react'
import { standService } from '@/lib/service'
import { LayoutWrapper } from '@/components/LayoutWrapper'
import { Dialog } from '@headlessui/react'

export default function Level3() {
  return (
    <LayoutWrapper>
      <Landing3 />
      <Modal />
    </LayoutWrapper>
  )
}
const Landing3 = () => {
  const router = useRouter()
  const [successModal, setSuccessModal] = useState(false)
  const [failureModal, setFailureModal] = useState(false)
  const [hideButtonModal, setHideButtonModal] = useState(true)
  const [level, setLevel] = useState('')
  const { data: session, status } = useSession()

  const PostData = async () => {
    let res = await standService.post(
      `/api/awsm-noob-data`,
      {
        level: 3,
        steps: commandlength,
      },
      {
        headers: {
          Authorization: `Bearer ${session.dynamoToken}`,
        },
      }
    )
  }
  const [gameState, setGameState] = useState({
    playerIndex: 0,
    trophyIndex: 8,
    stoneIndex1: 3,
    stoneIndex2: 4,
    stoneIndex3: 5,
  })
  const [arrayOfCommand, setArrayOfCommand] = useState([])
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
  const commandlength = arrayOfCommand.length

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

  const checkStoneTarget = (item, batu) => {
    if (item === batu) {
      return true
    } else {
      return false
    }
  }

  const handleRun = (item) => {
    setHideButtonModal(false)
    let currentInterval = 0

    let makeIntervalID = setInterval(() => {
      // HANDLE MOVEMENT
      switch (arrayOfCommand[currentInterval]) {
        case 'kiri':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentX === 1) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
              })
            } else if (
              currentX === 2 &&
              currentY === 2 &&
              checkStoneTarget(functionGetIndexFromXY(currentX - 1, currentY), current.stoneIndex1)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 3 &&
              currentY === 2 &&
              checkStoneTarget(functionGetIndexFromXY(currentX - 1, currentY), current.stoneIndex2)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX - 1, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
              })
            }
          })
          break
        case 'kanan':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentX === 3) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 1 &&
              currentY === 2 &&
              checkStoneTarget(functionGetIndexFromXY(currentX + 1, currentY), current.stoneIndex2)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 2 &&
              currentY === 2 &&
              checkStoneTarget(functionGetIndexFromXY(currentX + 1, currentY), current.stoneIndex3)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX + 1, currentY),
              })
            }
          })
          break
        case 'atas':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentY === 1) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 1 &&
              currentY === 3 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY - 1), current.stoneIndex1)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 2 &&
              currentY === 3 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY - 1), current.stoneIndex2)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 3 &&
              currentY === 3 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY - 1), current.stoneIndex3)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY - 1),
              })
            }
          })
          break
        case 'bawah':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentY === 3) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 1 &&
              currentY === 1 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY + 1), current.stoneIndex1)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 2 &&
              currentY === 1 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY + 1), current.stoneIndex2)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 3 &&
              currentY === 1 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY + 1), current.stoneIndex3)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY + 1),
              })
            }
          })
          break
        case 'tembak-bawah':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentX === 1 && currentY === 1) {
              setGameState({
                stoneIndex1: 100,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (currentX === 2 && currentY === 1) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: 100,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (currentX === 3 && currentY === 1) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: 100,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            }
          })
          break
        case 'tembak-kanan':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentX === 1 && currentY === 2) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: 100,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (currentX === 2 && currentY === 2) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: 100,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            }
          })
          break
        case 'tembak-kiri':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentX === 2 && currentY === 2) {
              setGameState({
                stoneIndex1: 100,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (currentX === 3 && currentY === 2) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: 100,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            }
          })
          break
        case 'tembak-atas':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentX === 1 && currentY === 3) {
              setGameState({
                stoneIndex1: 100,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (currentX === 2 && currentY === 3) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: 100,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            }
          })
          break
      }
      currentInterval = currentInterval + 1

      // HANDLE MOVEMENT
      if (currentInterval === arrayOfCommand.length) {
        setGameState((current) => {
          let currentX = maps[current.playerIndex].x
          let currentY = maps[current.playerIndex].y
          if (current.playerIndex == current.trophyIndex) {
            setSuccessModal(true)
            setGameState({
              stoneIndex1: current.stoneIndex1,
              stoneIndex2: current.stoneIndex2,
              stoneIndex3: current.stoneIndex3,
              trophyIndex: current.trophyIndex,
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          } else {
            setFailureModal(true)
            setGameState({
              stoneIndex1: current.stoneIndex1,
              stoneIndex2: current.stoneIndex2,
              stoneIndex3: current.stoneIndex3,
              trophyIndex: current.trophyIndex,
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          }
        })
        clearInterval(makeIntervalID)
      }
    }, 1000)
  }

  const reset = () => {
    setArrayOfCommand([])
    setGameState({
      playerIndex: 0,
      trophyIndex: 8,
      stoneIndex1: 3,
      stoneIndex2: 4,
      stoneIndex3: 5,
    })
    setHideButtonModal(true)
  }

  useEffect(() => {
    if (successModal === true) {
      const confettiSettings = { target: 'my-canvas' }
      const confetti = new ConfettiGenerator(confettiSettings)
      confetti.render()
      setTimeout(() => {
        router.push('/camps/awesome-noob/level-4')
        confetti.clear()
      }, 5000)
      setTimeout(() => {
        setSuccessModal(false)
        PostData()
      }, 2000)
    } else if (failureModal === true) {
      setTimeout(() => {
        setFailureModal(false)
      }, 2000)
    }
  }, [successModal, failureModal, router])

  return (
    <>
      <canvas className="fixed w-full h-full z-10 pointer-events-none " id="my-canvas"></canvas>
      <div>
        {/* <div className="w-[200px] h-[50px] m-6 mb-0 md:mb-32"> */}
        {successModal === false ? null : <ToastSuccess setModals={setSuccessModal} />}
        {failureModal === false ? null : <ToastFailure setModals={setFailureModal} />}
        {/* </div> */}
        <div className="flex flex-col my-20 flex-wrap justify-center items-center w-full md:flex md:flex-row md:justify-center md:item-center overflow-hidden">
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
                  {gameState?.playerIndex === index ? (
                    <img
                      className="animate-bounce z-10 overflow-visible"
                      src="/static/images/user.png"
                      alt="User"
                      width="50"
                      height="65"
                    />
                  ) : null}
                  {gameState?.trophyIndex === index ? (
                    <Image
                      className=""
                      src="/static/images/laser-gun.png"
                      alt="User"
                      width="50"
                      height="50"
                    />
                  ) : null}{' '}
                  {gameState?.stoneIndex1 === index ? (
                    <Image
                      className=""
                      src="/static/images/rock.png"
                      alt="User"
                      width="50"
                      height="50"
                    />
                  ) : null}{' '}
                  {gameState?.stoneIndex2 === index ? (
                    <Image
                      className=""
                      src="/static/images/rock.png"
                      alt="User"
                      width="50"
                      height="50"
                    />
                  ) : null}{' '}
                  {gameState?.stoneIndex3 === index ? (
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
            <div className="flex flex-col flex-wrap justify-center items-center my-2 w-full h-full">
              <ul className="w-[150px] h-[100px] md:h-[125px] overflow-auto">
                {arrayOfCommand.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {commandlength < 5 ? (
              <>
                <div className="flex flex-row justify-center items-center ml-2 mb-2">
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('kiri')}
                    className="border-2 border-black-800 rounded-xl   mx-2 py-2 px-4"
                  >
                    kiri
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('kanan')}
                    className="border-2 border-black-800 rounded-xl   mx-2 p-2"
                  >
                    kanan
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('atas')}
                    className="border-2 border-black-800 rounded-xl   mx-2 p-2"
                  >
                    atas
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('bawah')}
                    className="border-2 border-black-800 rounded-xl   mx-2 p-2"
                  >
                    bawah
                  </PrimaryButton>
                </div>
                <div className="grid grid-cols-2 justify-center items-center ml-2 mb-2">
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('tembak-kiri')}
                    className="border-2 border-black-800 rounded-xl   mx-2 my-2 py-2 px-4"
                  >
                    tembak kiri
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('tembak-kanan')}
                    className="border-2 border-black-800 rounded-xl   mx-2 p-2"
                  >
                    tembak kanan
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('tembak-atas')}
                    className="border-2 border-black-800 rounded-xl   mx-2 my-2 p-2"
                  >
                    tembak atas
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('tembak-bawah')}
                    className="border-2 border-black-800 rounded-xl   mx-2 p-2"
                  >
                    tembak bawah
                  </PrimaryButton>
                  <PrimaryButton
                    variant="success"
                    onClick={() => handleRun('RUN')}
                    className="border rounded-xl  mx-2 py-2 px-4"
                  >
                    Run
                  </PrimaryButton>
                  <PrimaryButton variant="normal" onClick={reset} className="rounded-xl  mx-2 p-2">
                    Reset
                  </PrimaryButton>
                </div>
              </>
            ) : (
              <>
                <PrimaryButton
                  variant="success"
                  onClick={() => handleRun('RUN')}
                  className={`border mx-2 p-2 ${hideButtonModal === true ? `block` : `hidden`}`}
                >
                  Run
                </PrimaryButton>
                <PrimaryButton variant="normal" onClick={reset} className="rounded-xl  mx-2 p-2">
                  Reset
                </PrimaryButton>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
const Modal = () => {
  const [nextPages, setNextPages] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  const handleClick = () => {
    setIsOpen(false)
  }
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="">
      <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-400 p-4 z-30 ${
          nextPages === 1 ? '' : 'hidden'
        }`}
      >
        <button onClick={() => setNextPages(nextPages + 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute top-2 right-2 feather feather-x rounded-full border-2 border-black"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="opacity-100 text-black">
          <p className="font-black">Perintah yang tersedia</p>
          <p>1. Kanan untuk jalan 1 blok ke arah kanan</p>
          <p>2. Kiri untuk jalan 1 blok ke arah kiri</p>
          <p>3. Atas untuk jalan 1 blok ke arah atas</p>
          <p>4. Bawah untuk jalan 1 blok ke arah bawah</p>
          <p>5. Tembak Kanan untuk menhancurkan batu di sebelah kanan</p>
          <p>6. Tembak Kiri untuk menhancurkan batu di sebelah kiri</p>
          <p>7. Tembak Atas untuk menhancurkan batu di sebelah atas</p>
          <p>8. Tembak Bawah untuk menhancurkan batu di sebelah bawah</p>
        </div>
      </div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black-400 p-4 z-30 ${
          nextPages === 2 ? '' : 'hidden'
        }`}
      >
        <div className="opacity-100 text-black">
          <p className="font-black">MISI KALI INI EMANG AKAN MENGAMBIL LASERGUN</p>
        </div>
        <div className="flex justify-center items-center">
          <PrimaryButton
            variant={`success`}
            children={`Mulai`}
            onClick={handleClick}
            parentClassName={`mt-6`}
          />
        </div>
      </div>
    </Dialog>
  )
}
const ToastSuccess = () => {
  return (
    <div className="w-[200px] m-5 flex flex-row justify-center items-center border-2 border-black bg-black rounded-lg p-1">
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
    <div className="w-[200px] m-5 flex flex-row justify-start items-center border-2 border-black bg-black rounded-lg p-1">
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
        <p className="text-xs font-bold text-white ">Kamu kalah</p>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (session === null) {
    return {
      redirect: {
        destination: '/camps/awesome-noob/login',
      },
    }
  } else {
    const session = await getSession(context)
    const url_location = context.resolvedUrl
    let ids = url_location.split('-')

    let res = await standService.post(
      `/api/check-awsm-noob`,
      {},
      {
        headers: {
          Authorization: `Bearer ${session.dynamoToken}`,
        },
      }
    )
    if (res !== null) {
      let user_position = res.data + 1
      if (parseInt(ids[2]) > user_position) {
        return {
          redirect: {
            destination: `/camps/awesome-noob/level-${user_position}`,
          },
        }
      }
    }
    return {
      props: {
        isAuthenticated: true,
        dynamoToken: session.dynamoToken,
        test: res.data,
        sesi: ids[2],
      }, // will be passed to the page component as props
    }
  }
}
