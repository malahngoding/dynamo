/* eslint-disable prettier/prettier */
/* eslint-disable no-case-declarations */
/* eslint-disable prettier/prettier */
import { useCallback, useEffect, useState } from 'react'
import Image from '@/components/Image'
import { PrimaryButton } from '@/components/design/button'

export default function Level1() {
  const [playerIndex, setPlayerIndex] = useState(4)
  const [trophyIndex] = useState(0)
  const [stoneIndex] = useState(8)
  const [arrayOfCommand, setArrayOfCommand] = useState([])
  const maps = [
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
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
    console.log(index)
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
            if (currentX > 1) {
              setPlayerIndex(functionGetIndexFromXY(currentX - 1, currentY))
            } else {
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
            }
          })
          break
        case 'kanan':
          setPlayerIndex((current) => {
            // if (current.x <= 4 && current.y !== 4) {
            let currentX = maps[current].x
            let currentY = maps[current].y
            if (currentX < 3) {
              setPlayerIndex(functionGetIndexFromXY(currentX + 1, currentY))
            } else {
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
            }
            //
          })
          break
        case 'atas':
          setPlayerIndex((current) => {
            let currentX = maps[current].x
            let currentY = maps[current].y
            if (currentY > 1) {
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY - 1))
            } else {
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
            }
            //
          })
          break
        case 'bawah':
          setPlayerIndex((current) => {
            let currentX = maps[current].x
            let currentY = maps[current].y
            if (currentY < 3) {
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
            alert('Kamu kalah')
            setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
          } else {
            alert('Selamat kamu menang')
            setPlayerIndex(functionGetIndexFromXY(currentX, currentY))
          }
          clearInterval(makeIntervalID)
        })
      }
    }, 1000)
  }

  const reset = () => {
    setArrayOfCommand([])
    setPlayerIndex(4)
  }

  return (
    <div className="flex flex-col flex-wrap justify-center items-center min-h-screen w-full">
      <div className="grid grid-cols-3">
        {maps.map((item, index) => (
          <div
            className="grid justify-center items-center h-[200px] w-[200px] border-2"
            key={`${item.x}_${item.y}`}
          >
            <div>
              {/* <p className="font-mono">
                                ({`${item.x},${item.y}`})-[{index}]
                            </p> */}
              {playerIndex === index ? (
                <Image
                  className="animate-bounce"
                  src="/static/images/user.png"
                  alt="User"
                  width="75"
                  height="100"
                  key={item.image}
                />
              ) : trophyIndex === index ? (
                <Image
                  className=""
                  src="/static/images/finish.png"
                  alt="Finish"
                  width="99"
                  height="100"
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div className="my-2">
        <ul>
          {arrayOfCommand.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="my-2">
        <PrimaryButton onClick={() => addArrayOfCommand('kiri')} className="border mx-2 p-2">
          Kiri
        </PrimaryButton>
        <PrimaryButton onClick={() => addArrayOfCommand('kanan')} className="border mx-2 p-2">
          Kanan
        </PrimaryButton>
        <PrimaryButton onClick={() => addArrayOfCommand('atas')} className="border mx-2 p-2">
          Atas
        </PrimaryButton>
        <PrimaryButton onClick={() => addArrayOfCommand('bawah')} className="border mx-2 p-2">
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
      </div>
    </div>
  )
}
