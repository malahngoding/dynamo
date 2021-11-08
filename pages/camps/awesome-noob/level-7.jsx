/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react'
import Image from '@/components/Image'
import { PrimaryButton } from '@/components/design/button'

export default function Level7() {
  const [successModal, setSuccessModal] = useState(false)
  const [failureModal, setFailureModal] = useState(false)
  const [gameState, setGameState] = useState({
    playerIndex: 6,
    trophyIndex: 0,
    stoneIndex1: 1,
    stoneIndex2: 2,
    stoneIndex3: 4,
    keys: 5,
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

  const handleRun = () => {
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
                keys: current.keys,
              })
            } else if (
              currentX === 2 &&
              currentY === 1 &&
              current.keys !== 10 &&
              checkStoneTarget(functionGetIndexFromXY(currentX - 1, currentY), current.trophyIndex)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 2 &&
              currentY === 1 &&
              current.keys === 10 &&
              checkStoneTarget(functionGetIndexFromXY(currentX - 1, currentY), current.trophyIndex)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                playerIndex: functionGetIndexFromXY(currentX - 1, currentY),
              })
            } else if (
              currentX === 3 &&
              currentY === 1 &&
              checkStoneTarget(functionGetIndexFromXY(currentX - 1, currentY), current.stoneIndex1)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 3 &&
              currentY === 2 &&
              checkStoneTarget(functionGetIndexFromXY(currentX - 1, currentY), current.stoneIndex3)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX - 1, currentY),
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
                keys: current.keys,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 1 &&
              currentY === 1 &&
              checkStoneTarget(functionGetIndexFromXY(currentX + 1, currentY), current.stoneIndex1)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 1 &&
              currentY === 2 &&
              checkStoneTarget(functionGetIndexFromXY(currentX + 1, currentY), current.stoneIndex3)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 2 &&
              currentY === 1 &&
              checkStoneTarget(functionGetIndexFromXY(currentX + 1, currentY), current.stoneIndex2)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 2 &&
              currentY === 2 &&
              checkStoneTarget(functionGetIndexFromXY(currentX + 1, currentY), current.keys)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: 10,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX + 1, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX + 1, currentY),
              })
            }
          })
          break
        case 'atas':
          setGameState((current) => {
            console.log(current.keys)
            let currentX = maps[current.playerIndex].x
            let currentY = maps[current.playerIndex].y
            if (currentY === 1) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 3 &&
              currentY === 3 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY - 1), current.keys)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: 10,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY - 1),
              })
            } else if (
              currentX === 2 &&
              currentY === 3 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY - 1), current.stoneIndex3)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 1 &&
              currentY === 2 &&
              current.keys !== 10 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY - 1), current.trophyIndex)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 1 &&
              currentY === 2 &&
              current.keys === 10 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY - 1), current.trophyIndex)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY - 1),
              })
            } else if (
              currentX === 2 &&
              currentY === 2 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY - 1), current.stoneIndex1)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 3 &&
              currentY === 2 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY - 1), current.stoneIndex2)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
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
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 3 &&
              currentY === 1 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY + 1), current.keys)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: 10,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (
              currentX === 2 &&
              currentY === 1 &&
              checkStoneTarget(functionGetIndexFromXY(currentX, currentY + 1), current.stoneIndex3)
            ) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
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
            if (currentX === 2 && currentY === 1) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: 10,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
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
            if (currentX === 1 && currentY === 1) {
              setGameState({
                stoneIndex1: 100,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (currentX === 1 && currentY === 2) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: 100,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (currentX === 2 && currentY === 1) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: 100,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
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
            if (currentX === 3 && currentY === 1) {
              setGameState({
                stoneIndex1: 100,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (currentX === 3 && currentY === 2) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: 100,
                keys: current.keys,
                trophyIndex: current.trophyIndex,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                keys: current.keys,
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
            if (currentX === 2 && currentY === 3) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: 100,
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (currentX === 2 && currentY === 2) {
              setGameState({
                stoneIndex1: 100,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else if (currentX === 3 && currentY === 2) {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: 100,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                playerIndex: functionGetIndexFromXY(currentX, currentY),
              })
            } else {
              setGameState({
                stoneIndex1: current.stoneIndex1,
                stoneIndex2: current.stoneIndex2,
                stoneIndex3: current.stoneIndex3,
                trophyIndex: current.trophyIndex,
                keys: current.keys,
                thornIndex1: current.thornIndex1,
                thornIndex2: current.thornIndex2,
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
          if (current.playerIndex === current.trophyIndex) {
            setSuccessModal(true)
            setGameState({
              stoneIndex1: current.stoneIndex1,
              stoneIndex2: current.stoneIndex2,
              stoneIndex3: current.stoneIndex3,
              keys: current.keys,
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
              trophyIndex: current.trophyIndex,
              playerIndex: functionGetIndexFromXY(currentX, currentY),
            })
          } else {
            setFailureModal(true)
            setGameState({
              stoneIndex1: current.stoneIndex1,
              stoneIndex2: current.stoneIndex2,
              stoneIndex3: current.stoneIndex3,
              keys: current.keys,
              thornIndex1: current.thornIndex1,
              thornIndex2: current.thornIndex2,
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
      stoneIndex2: 2,
      stoneIndex3: 4,
      keys: 5,
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
      <div className="w-[200px] h-[50px] m-6 mb-0 md:mb-32">
        {successModal === false ? null : <ToastSuccess setModals={setSuccessModal} />}
        {failureModal === false ? null : <ToastFailure setModals={setFailureModal} />}
      </div>
      <div className="flex flex-col flex-wrap justify-center items-center w-full md:flex md:flex-row md:justify-center md:item-center">
        <div className="grid grid-cols-3">
          {maps.map((item, index) => (
            <div
              className="flex justify-center items-center h-[110px] w-[100px] md:h-32 md:w-32 border-2 border-black"
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
                    src="/static/images/chess.png"
                    alt="User"
                    width="50"
                    height="50"
                  />
                ) : null}{' '}
                {gameState?.keys === index ? (
                  <Image
                    className=""
                    src="/static/images/keys.png"
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

          {commandlength < 9 ? (
            <>
              <div className="overflow-scroll h-[100px] md:overflow-auto md:h-full">
                <div className="flex flex-row justify-center items-center ml-2 mb-2">
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('kiri')}
                    className="border-2 border-black-800 rounded-xl  mx-1 md:mx-2 md:py-2 md:px-4"
                  >
                    kiri
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('kanan')}
                    className="border-2 border-black-800 rounded-xl  md:mx-2 md:p-2"
                  >
                    kanan
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('atas')}
                    className="border-2 border-black-800 rounded-xl mx-1  md:mx-2 md:p-2"
                  >
                    atas
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('bawah')}
                    className="border-2 border-black-800 rounded-xl mx-1  md:mx-2 md:p-2"
                  >
                    bawah
                  </PrimaryButton>
                </div>
                <div className="grid grid-cols-2 justify-center items-center md:ml-2 md:mb-2">
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('tembak-kiri')}
                    className="border-2 border-black-800 rounded-xl mx-1 my-1 md:mx-2 md:my-2 md:py-2 md:px-4"
                  >
                    tembak kiri
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('tembak-kanan')}
                    className="border-2 border-black-800 rounded-xl my-1 md:mx-2 md:p-2"
                  >
                    tembak kanan
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('tembak-atas')}
                    className="border-2 border-black-800 rounded-xl mx-1 my-1 md:mx-2 md:my-2 md:p-2"
                  >
                    tembak atas
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => addArrayOfCommand('tembak-bawah')}
                    className="border-2 border-black-800 rounded-xl my-1  md:mx-2 md:p-2"
                  >
                    tembak bawah
                  </PrimaryButton>
                  <PrimaryButton
                    variant="success"
                    onClick={() => handleRun('RUN')}
                    className="border rounded-xl  md:mx-2 mx-1 md:py-2 md:px-4"
                  >
                    Run
                  </PrimaryButton>
                  <PrimaryButton
                    variant="normal"
                    onClick={reset}
                    className="rounded-xl  md:mx-2 md:p-2"
                  >
                    Reset
                  </PrimaryButton>
                </div>
              </div>
            </>
          ) : (
            <>
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
