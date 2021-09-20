/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import Image from '@/components/Image'
import { getSession, useSession } from 'next-auth/client'
import axios from 'axios'

export default function Level2() {
  // const [commands, setCommands] = useState([])
  // const [playerIndex, setPlayerIndex] = useState(5)
  // const array = [
  //   { isPlayer: false, isStone: false, isFinish: false, y: 3, x: 1 },
  //   { isPlayer: false, isStone: false, isFinish: false, y: 3, x: 2 },
  //   { isPlayer: false, isStone: false, isFinish: true, x: 3, y: 3 },
  //   { isPlayer: false, isStone: false, isFinish: false, x: 1, y: 2 },
  //   { isPlayer: false, isStone: true, isFinish: false, x: 2, y: 2 },
  //   { isPlayer: false, isStone: false, isFinish: false, x: 3, y: 2 },
  //   { isPlayer: false, isStone: false, isFinish: false, x: 1, y: 1 },
  //   { isPlayer: false, isStone: false, isFinish: false, x: 2, y: 1 },
  //   { isPlayer: true, isStone: false, isFinish: false, x: 3, y: 1 },
  // ]
  // const [playerState, setPlayerState] = useState(array)
  // const search = (playerState) => playerState.isPlayer === true
  // const playerData = array.findIndex(search)
  // const xCurrent = playerState[playerData].x
  // const yCurrent = playerState[playerData].y
  // const [currentSetPlayer, setcurrentSetPlayer] = useState(0)
  // const handleClick = () => {
  //   const object = playerState
  //   for (let index = 0; index < commands.length; index++) {
  //     setTimeout(() => {
  //       const element = commands[index]
  //       switch (element) {
  //         case 'bawah':
  //           break
  //         case 'kiri':
  //           if (xCurrent >= 1 && xCurrent > -1 && xCurrent != 0) {
  //             const xTarget = xCurrent - commands.length
  //             const yTarget = yCurrent
  //             const newState = playerState.map((obj) =>
  //               obj.y === yTarget && obj.x === xTarget
  //                 ? { ...obj, isPlayer: true }
  //                 : obj && obj.y === yCurrent && obj.x === xCurrent
  //                 ? { ...obj, isPlayer: false }
  //                 : obj
  //             )
  //             console.log(newState)
  //             setPlayerState(newState)
  //             console.log('yes')
  //           } else {
  //             alert('no')
  //           }
  //           break
  //         case 'kanan':
  //           break
  //         case 'atas':
  //           break
  //         default:
  //           break
  //       }
  //     }, 1000 * (index + 1))
  //   }
  // }
  // return (
  //   <>
  //     <div className="flex flex-col justify-center items-center min-h-screen">
  //       <div className="grid grid-cols-3 mb-8">
  //         {playerState.map((item, index) => (
  //           <div
  //             className="grid justify-center items-center border-2 border-black w-[100px] h-[100px]"
  //             key={index}
  //           >
  //             {item.isPlayer ? (
  //               <Image
  //                 className=""
  //                 src="/static/images/user.png"
  //                 alt="User"
  //                 width="50"
  //                 height="50"
  //               />
  //             ) : null}
  //             {item.isStone ? (
  //               <Image
  //                 className=""
  //                 src="/static/images/rock.png"
  //                 alt="Rock"
  //                 width="50"
  //                 height="50"
  //               />
  //             ) : null}
  //             {item.isFinish ? (
  //               <Image
  //                 className=""
  //                 src="/static/images/finish.png"
  //                 alt="Finish"
  //                 width="50"
  //                 height="50"
  //               />
  //             ) : null}
  //             {item.tes}
  //           </div>
  //         ))}
  //       </div>
  //       {commands.map((item, index) => (
  //         <p key={index}>{item}</p>
  //       ))}
  //       <div className="flex flex-row">
  //         <button className="border-2 p-2 ml-2" onClick={() => setCommands([...commands, 'kiri'])}>
  //           Kiri
  //         </button>
  //         <button className="border-2 p-2 ml-2" onClick={() => setCommands([...commands, 'kanan'])}>
  //           Kanan
  //         </button>
  //         <button className="border-2 p-2 ml-2" onClick={() => setCommands([...commands, 'atas'])}>
  //           Atas
  //         </button>
  //         <button className="border-2 p-2 ml-2" onClick={() => setCommands([...commands, 'bawah'])}>
  //           Bawah
  //         </button>
  //         <button className="border-2 p-2 ml-2" onClick={handleClick}>
  //           Result
  //         </button>
  //       </div>
  //     </div>
  //   </>
  // )
  const [playerIndex, setPlayerIndex] = useState(6)
  const [trophyIndex] = useState(2)
  const [stoneIndex] = useState(4)
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

  console.log(functionGetIndexFromXY(4, 4))

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
              alert('Ups, game over !!')
              setPlayerIndex(functionGetIndexFromXY(currentX - 1, currentY))
            } else if (currentX > 1) {
              setPlayerIndex(functionGetIndexFromXY(currentX - 1, currentY))
            } else {
              alert('Game over !!')
            }
          })
          break
        case 'kanan':
          setPlayerIndex((current) => {
            let currentX = maps[current].x
            let currentY = maps[current].y
            if (currentX === 1 && currentY === 2) {
              alert('Ups, game over !!')
              setPlayerIndex(functionGetIndexFromXY(currentX + 1, currentY))
            } else if (currentX === 2 && currentY === 1) {
              alert('Kamu menang !!')
              setPlayerIndex(functionGetIndexFromXY(currentX + 1, currentY))
            } else if (currentX < 3) {
              setPlayerIndex(functionGetIndexFromXY(currentX + 1, currentY))
            } else {
              alert('Game over !!')
            }
          })
          break
        case 'atas':
          setPlayerIndex((current) => {
            let currentX = maps[current].x
            let currentY = maps[current].y
            if (currentX === 2 && currentY === 3) {
              alert('Ups, game over !!')
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY - 1))
            } else if (currentX === 3 && currentY === 2) {
              alert('Kamu menang !!')
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY - 1))
            } else if (currentY > 1) {
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY - 1))
            } else {
              alert('Game over !!')
            }
          })
          break
        case 'bawah':
          setPlayerIndex((current) => {
            let currentX = maps[current].x
            let currentY = maps[current].y
            if (currentX === 2 && currentY === 1) {
              alert('Ups, game over !!')
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY + 1))
            } else if (currentY < 3) {
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY + 1))
            } else {
              alert('Game over !!')
            }
          })
          break
      }
      currentInterval = currentInterval + 1
      // HANDLE MOVEMENT
      if (currentInterval === arrayOfCommand.length) {
        // if (playerIndex === trophyIndex) {
        //   alert('win')
        // } else if (playerIndex === stoneIndex) {
        //   alert('ups, game over !!')
        // }
        clearInterval(makeIntervalID)
      }
    }, 1000)
  }

  const reset = () => {
    setArrayOfCommand([])
    setPlayerIndex(5)
  }
  return (
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
                  className=""
                  src="/static/images/user.png"
                  alt="User"
                  width="50"
                  height="50"
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
      </div>
    </div>
  )
}
