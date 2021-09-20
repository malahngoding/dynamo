/* eslint-disable prettier/prettier */
/* eslint-disable no-case-declarations */
/* eslint-disable prettier/prettier */
import { useCallback, useEffect, useState } from 'react'
import Image from '@/components/Image'
import { PrimaryButton } from '@/components/design/button'

export default function Level1() {
  // const array =
  //     [
  //         { isPlayer: false, isFinish: false, x: 3, y: 1, key: 1 },
  //         { isPlayer: false, isFinish: true, x: 3, y: 2, key: 2 },
  //         { isPlayer: false, isFinish: false, x: 3, y: 3, key: 3 },
  //         { isPlayer: false, isFinish: false, x: 2, y: 1, key: 4 },
  //         { isPlayer: false, isFinish: false, x: 2, y: 2, key: 5 },
  //         { isPlayer: true, isFinish: false, x: 2, y: 3, key: 6 },
  //         { isPlayer: false, isFinish: false, x: 1, y: 1, key: 7 },
  //         { isPlayer: false, isFinish: false, x: 1, y: 2, key: 8 },
  //         { isPlayer: false, isFinish: false, x: 1, y: 3, key: 9 },
  //     ]

  // const [playerState, setPlayerState] = useState(array)
  // const [commands, setCommands] = useState([])

  // const handleMovement = (event) => {
  //     setCommands([...commands, event])
  // }
  // const handleRunMovement = async () => {
  //     for (let index = 0; index < commands.length; index++) {
  //         setTimeout(() => {
  //             const element = commands[index];
  //             const search = (playerState) => playerState.isPlayer === true;
  //             const playerData = array.findIndex(search);
  //             // Didapat posisi X,Y dari pemain
  //             const xCurrent = playerState[playerData].x;
  //             const yCurrent = playerState[playerData].y;
  //             console.log(xCurrent, yCurrent)
  //             switch (element) {
  //                 case "kiri":
  //                     // Mencari Target Perpindahan ke kiri
  //                     const xTarget = xCurrent;
  //                     const yTarget = yCurrent - commands.length;
  //                     // Mencari target Perpindahan array
  //                     if (yTarget >= 0 && yTarget !== 0) {

  //                         // 1. Temukan Function untuk mencari index array yang memiliki nilai x dan y sesuai dengan xTarget dan yTarget
  //                         const searchh = (playerState) => playerState.y === yTarget && playerState.x === xTarget;
  //                         const playerDataa = array.findIndex(searchh);

  //                         // 2. Setelah didapatkan index array bentuk arrayPlayerState baru berdasarkan kondisi perpindahan

  //                         let temp_state = array;

  //                         console.log(playerDataa)
  //                         console.log(temp_state[playerDataa].x, temp_state[playerDataa].y)
  //                         console.log("Before update: ", playerState)

  //                         // const newState = playerState.map(obj =>
  //                         //     obj.y === yTarget && obj.x === xTarget ? { ...obj, isPlayer: true } : obj &&
  //                         //         obj.y === yCurrent && obj.x === xCurrent ? { ...obj, isPlayer: false } : obj

  //                         // );

  //                         setPlayerState((current) => {
  //                             const newState = current.map(obj =>
  //                                 obj.y === yTarget && obj.x === xTarget ? { ...obj, isPlayer: true } : obj &&
  //                                     obj.y === yCurrent && obj.x === xCurrent ? { ...obj, isPlayer: false } : obj
  //                             );
  //                             console.log(newState)
  //                             setPlayerState(newState)
  //                         })

  //                         // console.log("After update: ", newState)
  //                         console.log("Player State: ", playerState)
  //                         // setPlayerState(playerState)
  //                         break;
  //                     } else {
  //                         alert('KAMU GAGAL')
  //                     }

  //                     // 3. Ganti status di index playerData -> isPlayer menjadi false, dan ganti status di index target -> isPlayer menjadi true
  //                     break;
  //                 case "kanan":

  //                     // Mencari Target Perpindahan ke kiri
  //                     const xTargetRight = xCurrent;
  //                     const yTargetright = yCurrent + 1;
  //                     // Mencari target Perpindahan array
  //                     if (yTargetright <= 4 && yTargetright !== 4) {

  //                         // 1. Temukan Function untuk mencari index array yang memiliki nilai x dan y sesuai dengan xTarget dan yTarget
  //                         const searchh = (playerState) => playerState.y === yTargetright && playerState.x === xTargetRight;
  //                         const playerDataa = array.findIndex(searchh);

  //                         // 2. Setelah didapatkan index array bentuk arrayPlayerState baru berdasarkan kondisi perpindahan
  //                         let temp_state = array;

  //                         console.log(playerDataa)
  //                         console.log(temp_state[playerDataa].x, temp_state[playerDataa].y)
  //                         console.log("Before update: ", playerState)

  //                         const newState = playerState.map(obj =>
  //                             obj.y === yTarget && obj.x === xTarget ? { ...obj, isPlayer: true } : obj &&
  //                                 obj.y === yCurrent && obj.x === xCurrent ? { ...obj, isPlayer: false } : obj

  //                         );
  //                         setPlayerState(newState);
  //                         console.log("After update: ", newState)
  //                         break;

  //                     } else {
  //                         alert('KAMU GAGAL')
  //                     }
  //                     break;
  //                 case "atas":
  //                     break;
  //                 case "bawah":
  //                     break;

  //                 default:
  //                     break;
  //             }
  //         }, 1000 * (index + 1));
  //     }
  // };

  // return (
  //     <>
  //         <div className="flex flex-col justify-center items-center min-h-screen">
  //             <div className='flex flex-row'>
  //                 <div className="grid grid-cols-3 mb-8">
  //                     {playerState.map((item) =>
  //                     (
  //                         < div
  //                             className="grid justify-center items-center border-2 border-black w-[200px] h-[200px]"
  //                             key={item.key} >
  //                             {
  //                                 item.isPlayer === true ? (
  //                                     <Image
  //                                         className=""
  //                                         src="/static/images/user.png"
  //                                         alt="User"
  //                                         width="75"
  //                                         height="100"
  //                                         key={item.image}
  //                                     />
  //                                 ) : null
  //                             }
  //                             {
  //                                 item.isFinish ? (
  //                                     <Image
  //                                         className=""
  //                                         src="/static/images/finish.png"
  //                                         alt="Finish"
  //                                         width="99"
  //                                         height="100"
  //                                     />
  //                                 ) : null
  //                             }
  //                         </div>
  //                     )
  //                     )}
  //                 </div>
  //                 <div className='flex flex-col'>
  //                     <div className='mx-5 font-bold'>Action :</div>
  //                     <div className='mx-5'>
  //                         {commands.map((event, index) => (
  //                             <p key={index}>{event}</p>
  //                         ))}
  //                     </div>
  //                 </div>
  //             </div>
  //             <div className='flex flex-row'>
  //                 <PrimaryButton className='ml-2' variant='normal' onClick={() => handleMovement('kiri')}>KIRI</PrimaryButton>
  //                 <PrimaryButton className='ml-2' variant='normal' onClick={() => handleMovement('kanan')}>KANAN</PrimaryButton>
  //                 <PrimaryButton className='ml-2' variant='normal' onClick={() => handleMovement('atas')}>ATAS</PrimaryButton>
  //                 <PrimaryButton className='ml-2' variant='normal' onClick={() => handleMovement('bawah')}>BAWAH</PrimaryButton>
  //                 <PrimaryButton className='ml-2' variant='success' onClick={handleRunMovement}>RUN !</PrimaryButton>
  //             </div>
  //         </div>
  //     </>
  // )
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
            if (currentY === 1 && currentX === 2) {
              alert('Kamu Menang!')
            } else if (currentX > 1) {
              setPlayerIndex(functionGetIndexFromXY(currentX - 1, currentY))
            } else {
              alert('Kamu Kalah :)')
            }
            //
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
              alert('Kamu Kalah :)')
            }
            //
          })
          break
        case 'atas':
          setPlayerIndex((current) => {
            let currentX = maps[current].x
            let currentY = maps[current].y
            if (currentY === 2 && currentX === 1) {
              alert('Kamu Menang!')
            } else if (currentY > 1) {
              setPlayerIndex(functionGetIndexFromXY(currentX, currentY - 1))
            } else {
              alert('Kamu Kalah :)')
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
              alert('Kamu Kalah :)')
            }
          })
          break
      }
      currentInterval = currentInterval + 1
      // HANDLE MOVEMENT
      if (currentInterval === arrayOfCommand.length) {
        if (playerIndex === trophyIndex) {
          alert('win')
        }
        clearInterval(makeIntervalID)
      }
    }, 1000)
  }

  const reset = () => {
    setArrayOfCommand([])
    setPlayerIndex(5)
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
              <p className="font-mono">
                ({`${item.x},${item.y}`})-[{index}]
              </p>
              {playerIndex === index ? (
                <Image
                  className=""
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
