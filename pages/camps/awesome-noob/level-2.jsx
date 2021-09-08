/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import Image from '@/components/Image'

export default function Level2() {
  const [commands, setCommands] = useState([])
  const [pion, setPion] = useState([])

  const array = [
    [
      { isPlayer: false, isStone: false, isFinish: false, tes: '1' },
      { isPlayer: false, isStone: false, isFinish: false, tes: '2' },
      { isPlayer: false, isStone: false, isFinish: true, tes: '3' },
    ],
    [
      { isPlayer: false, isStone: false, isFinish: false, tes: '4' },
      { isPlayer: false, isStone: true, isFinish: false, tes: '5' },
      { isPlayer: false, isStone: false, isFinish: false, tes: '6' },
    ],
    [
      { isPlayer: true, isStone: false, isFinish: false, tes: '7' },
      { isPlayer: false, isStone: false, isFinish: false, tes: '8' },
      { isPlayer: false, isStone: false, isFinish: false, tes: '9' },
    ],
  ]
  const [playerState, setPlayerState] = useState(array)
  const handleClick = () => {
    setPlayerState(
      [{ isPlayer: false }, { isPlayer: false }, { isPlayer: false }],
      [{ isPlayer: false }, { isPlayer: true }, { isPlayer: false }],
      [{ isPlayer: false }, { isPlayer: false }, { isPlayer: false }]
    )
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="grid grid-cols-3 mb-8">
          {playerState.map((item) =>
            item.map((itemx) => (
              <div
                className="grid justify-center items-center border-2 border-black w-[100px] h-[100px]"
                key={item}
              >
                {itemx.isPlayer ? (
                  <Image
                    className=""
                    src="/static/images/user.png"
                    alt="User"
                    width="50"
                    height="50"
                  />
                ) : null}
                {itemx.isStone ? (
                  <Image
                    className=""
                    src="/static/images/rock.png"
                    alt="Rock"
                    width="50"
                    height="50"
                  />
                ) : null}
                {itemx.isFinish ? (
                  <Image
                    className=""
                    src="/static/images/finish.png"
                    alt="Finish"
                    width="50"
                    height="50"
                  />
                ) : null}
                {itemx.tes}
              </div>
            ))
          )}
        </div>
        {commands.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <div className="flex flex-row">
          <button className="border-2 p-2 ml-2" onClick={() => setCommands([...commands, 'kiri'])}>
            Kiri
          </button>
          <button className="border-2 p-2 ml-2" onClick={() => setCommands([...commands, 'kanan'])}>
            Kanan
          </button>
          <button className="border-2 p-2 ml-2" onClick={() => setCommands([...commands, 'atas'])}>
            Atas
          </button>
          <button className="border-2 p-2 ml-2" onClick={() => setCommands([...commands, 'bawah'])}>
            Bawah
          </button>
          <button className="border-2 p-2 ml-2" onClick={() => alert(commands)}>
            Result
          </button>
        </div>
      </div>
    </>
  )
}
