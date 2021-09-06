/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import Image from '@/components/Image'

export default function Level2() {
  const [commands, setCommands] = useState([])
  const [pion, setPion] = useState([])

  // for (let index = 0; index < pion.length; index++) {
  //   setTimeout(() => {
  //     //
  //   }, 500)
  // }
  // handleKeKiri() {
  //   currentX ? currentY ?
  //     x = 1 ? cicing/diem
  // }
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-row">
          <div className={`border-black border-2 w-[100px] h-[100px]`}>1,1</div>
          <div className={`border-black border-2 w-[100px] h-[100px]`}>1,2</div>
          <div className={`border-black border-2 w-[100px] h-[100px]`}>
            <Image
              className={`max-w-full ${pion}`}
              src="/static/images/finish.png"
              alt="Finish"
              width="100"
              height="100"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className={`border-black border-2 w-[100px] h-[100px]`}>2,1</div>
          <div className={`border-black border-2 w-[100px] h-[100px]`}>
            <Image
              className="max-w-full"
              src="/static/images/rock.png"
              alt="Rock"
              width="100"
              height="100"
            />
          </div>
          <div className={`border-black border-2 w-[100px] h-[100px]`}>2,3</div>
        </div>
        <div className="flex flex-row mb-6">
          <div className={`border-black border-2 w-[100px] h-[100px]`}>
            <Image
              className="max-w-full"
              src="/static/images/user.png"
              alt="User"
              width="100"
              height="100"
            />
          </div>
          <div className={`border-black border-2 w-[100px] h-[100px]`}>3,2</div>
          <div className={`border-black border-2 w-[100px] h-[100px]`}>3,3</div>
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
