/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import Image from '@/components/Image'
import { PrimaryButton } from '@/components/design/button'

export default function Level2() {
  const [playerIndex, setPlayerIndex] = useState(6)
  const [trophyIndex] = useState(0)
  const [gameState, setGameState] = useState({
    playerIndex: 6,
    trophyIndex: 0,
    stoneIndex1: 1,
    stoneIndex2: 3,
    stoneIndex3: 4,
    stoneIndex4: 5,
  })
  const [arrayOfCommand, setArrayOfCommand] = useState([])
  const [successModal, setSuccessModal] = useState(false)
  const [failureModal, setFailureModal] = useState(false)
  const maps = [
    { isPlayer: false, isStone: false, isFinish: false, x: 1, y: 1 },
    { isPlayer: false, isStone: true, isFinish: false, x: 2, y: 1 },
    { isPlayer: false, isStone: false, isFinish: true, x: 3, y: 1 },
    { isPlayer: false, isStone: true, isFinish: false, x: 1, y: 2 },
    { isPlayer: false, isStone: true, isFinish: false, x: 2, y: 2 },
    { isPlayer: false, isStone: true, isFinish: false, x: 3, y: 2 },
    { isPlayer: false, isStone: false, isFinish: false, x: 1, y: 3 },
    { isPlayer: false, isStone: false, isFinish: false, x: 2, y: 3 },
    { isPlayer: true, isStone: false, isFinish: false, x: 3, y: 3 },
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
  const destroyTarget = (current, target) => {
    console.log(current)
    if (current === target) {
      return 100
    } else {
      return current
    }
  }

  const sandungBatuTarget = (item, batu1, batu2, batu3, batu4) => {
    if (item === batu1 || item === batu2 || item === batu3 || item === batu4) {
      return true
    } else {
      return false
    }
  }

  const handleRun = (item) => {
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
                stoneIndex4: current.stoneIndex4,
              })
            } else if (
              currentX === 3 &&
              currentY === 2 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX - 1, currentY), current.stoneIndex3)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
              })
            } else if (
              currentX === 2 &&
              currentY === 2 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX - 1, currentY), current.stoneIndex2)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
              })
            } else if (
              currentX === 3 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX - 1, currentY), current.stoneIndex1)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
              })
            } else {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX - 1, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
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
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 1 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX + 1, currentY), current.stoneIndex1)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
              })
            } else if (
              currentX === 1 &&
              currentY === 2 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX + 1, currentY), current.stoneIndex3)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
              })
            } else if (
              currentX === 2 &&
              currentY === 2 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX + 1, currentY), current.stoneIndex4)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
              })
            } else {
              setGameState({
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
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
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 1 &&
              currentY === 3 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 1), current.stoneIndex2)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
              })
            } else if (
              currentX === 2 &&
              currentY === 3 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 1), current.stoneIndex3)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
              })
            } else if (
              currentX === 3 &&
              currentY === 3 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 1), current.stoneIndex4)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
              })
            } else if (
              currentX === 2 &&
              currentY === 2 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY - 1), current.stoneIndex1)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
              })
            } else {
              setGameState({
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
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
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 1 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY + 1), current.stoneIndex2)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
              })
            } else if (
              currentX === 3 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY + 1), current.stoneIndex4)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
              })
            } else if (
              currentX === 2 &&
              currentY === 1 &&
              sandungBatuTarget(functionGetIndexFromXY(currentX, currentY + 1), current.stoneIndex3)
            ) {
              setGameState({
                playerIndex: functionGetIndexFromXY(currentX, currentY),
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
              })
            } else {
              sandungBatuTarget(
                functionGetIndexFromXY(currentX, currentY + 1),
                current.stoneIndex1,
                current.stoneIndex2,
                current.stoneIndex3,
                current.stoneIndex4
              )
              setGameState({
                trophyIndex: current.trophyIndex,
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                stoneIndex4: current.stoneIndex4,
                playerIndex: functionGetIndexFromXY(currentX, currentY + 1),
              })
            }
          })
          break
        case 'tembak-bawah':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            const search = maps.findIndex((obj) => obj.x === currentX && obj.y === currentY + 1)
            setGameState({
              trophyIndex: current.trophyIndex,
              stoneIndex1: destroyTarget(current.stoneIndex1, search),
              stoneIndex2: destroyTarget(current.stoneIndex2, search),
              stoneIndex3: destroyTarget(current.stoneIndex3, search),
              stoneIndex4: destroyTarget(current.stoneIndex4, search),
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          })
          break
        case 'tembak-atas':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            const search = maps.findIndex((obj) => obj.x === currentX && obj.y === currentY - 1)
            setGameState({
              trophyIndex: current.trophyIndex,
              stoneIndex1: destroyTarget(current.stoneIndex1, search),
              stoneIndex2: destroyTarget(current.stoneIndex2, search),
              stoneIndex3: destroyTarget(current.stoneIndex3, search),
              stoneIndex4: destroyTarget(current.stoneIndex4, search),
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          })
          break
        case 'tembak-kiri':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            const search = maps.findIndex((obj) => obj.x === currentX - 1 && obj.y === currentY)
            setGameState({
              trophyIndex: current.trophyIndex,
              stoneIndex1: destroyTarget(current.stoneIndex1, search),
              stoneIndex2: destroyTarget(current.stoneIndex2, search),
              stoneIndex3: destroyTarget(current.stoneIndex3, search),
              stoneIndex4: destroyTarget(current.stoneIndex4, search),
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          })
          break
        case 'tembak-kanan':
          setGameState((current) => {
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            const search = maps.findIndex((obj) => obj.x === currentX + 1 && obj.y === currentY)
            setGameState({
              trophyIndex: current.trophyIndex,
              stoneIndex1: destroyTarget(current.stoneIndex1, search),
              stoneIndex2: destroyTarget(current.stoneIndex2, search),
              stoneIndex3: destroyTarget(current.stoneIndex3, search),
              stoneIndex4: destroyTarget(current.stoneIndex4, search),
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
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
              stoneIndex4: current.stoneIndex4,
              trophyIndex: current.trophyIndex,
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          } else {
            setFailureModal(true)
            setGameState({
              stoneIndex1: current.stoneIndex1,
              stoneIndex2: current.stoneIndex2,
              stoneIndex3: current.stoneIndex3,
              stoneIndex4: current.stoneIndex4,
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
      playerIndex: 6,
      trophyIndex: 0,
      stoneIndex1: 1,
      stoneIndex2: 3,
      stoneIndex3: 4,
      stoneIndex4: 5,
    })
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
      <div className="flex flex-col flex-wrap justify-center items-center min-h-screen w-full">
        <div className="grid grid-cols-3">
          {maps.map((item, index) => (
            <div
              className="flex justify-center items-center h-[200px] w-[200px] border-2 border-black"
              key={`${item.x}_${item.y}`}
            >
              <div>
                {gameState?.playerIndex === index ? (
                  <Image
                    className="animate-bounce z-10"
                    src="/static/images/user.png"
                    alt="User"
                    width="75"
                    height="100"
                  />
                ) : null}
                {gameState?.trophyIndex === index ? (
                  <Image
                    className=""
                    src="/static/images/finish.png"
                    alt="User"
                    width="99"
                    height="100"
                  />
                ) : null}{' '}
                {gameState?.stoneIndex1 === index ? (
                  <Image
                    className=""
                    src="/static/images/rock.png"
                    alt="User"
                    width="75"
                    height="100"
                  />
                ) : null}{' '}
                {gameState?.stoneIndex2 === index ? (
                  <Image
                    className=""
                    src="/static/images/rock.png"
                    alt="User"
                    width="75"
                    height="100"
                  />
                ) : null}{' '}
                {gameState?.stoneIndex3 === index ? (
                  <Image
                    className=""
                    src="/static/images/rock.png"
                    alt="User"
                    width="75"
                    height="100"
                  />
                ) : null}{' '}
                {gameState?.stoneIndex4 === index ? (
                  <Image
                    className=""
                    src="/static/images/rock.png"
                    alt="User"
                    width="75"
                    height="100"
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
          <div className="flex flex-col">
            <div>
              {commandlength < 6 ? (
                <>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('kiri')}
                    className="border mx-2 p-2"
                  >
                    Kiri
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('kanan')}
                    className="border mx-2 p-2"
                  >
                    Kanan
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('atas')}
                    className="border mx-2 p-2"
                  >
                    Atas
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('bawah')}
                    className="border mx-2 p-2"
                  >
                    Bawah
                  </PrimaryButton>
                  <PrimaryButton
                    variant="success"
                    onClick={() => handleRun('RUN')}
                    className="border mx-2 p-2"
                  >
                    RUN
                  </PrimaryButton>
                  <PrimaryButton variant="normal" onClick={reset} className="border mx-2 p-2">
                    RESET
                  </PrimaryButton>
                  <div className="mt-2">
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('tembak-kiri')}
                      className="border mx-2 p-2"
                    >
                      Tembak Kiri
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('tembak-kanan')}
                      className="border mx-2 p-2"
                    >
                      Tembak Kanan
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('tembak-atas')}
                      className="border mx-2 p-2"
                    >
                      Tembak Atas
                    </PrimaryButton>
                    <PrimaryButton
                      onClick={() => addArrayOfCommand('tembak-bawah')}
                      className="border mx-2 p-2"
                    >
                      Tembak Bawah
                    </PrimaryButton>
                  </div>
                </>
              ) : (
                <>
                  <PrimaryButton
                    variant="success"
                    onClick={() => handleRun('RUN')}
                    className="border mx-2 p-2"
                  >
                    RUN
                  </PrimaryButton>
                  <PrimaryButton variant="normal" onClick={reset} className="border mx-2 p-2">
                    RESET
                  </PrimaryButton>
                </>
              )}
            </div>
          </div>
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
