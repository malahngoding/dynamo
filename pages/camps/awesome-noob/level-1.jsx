/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import Image from '@/components/Image'
import { PrimaryButton } from '@/components/design/button'
import ConfettiGenerator from 'confetti-js'
import { useRouter } from 'next/router'
import { standService } from '@/lib/service'
import { getSession, useSession } from 'next-auth/react'
import { LayoutWrapper } from '@/components/LayoutWrapper'

export default function Level1(props) {
  const router = useRouter()
  const [playerIndex, setPlayerIndex] = useState(4)
  const [trophyIndex] = useState(0)
  const [stoneIndex] = useState(8)
  const [arrayOfCommand, setArrayOfCommand] = useState([])
  const [successModal, setSuccessModal] = useState(false)
  const [failureModal, setFailureModal] = useState(false)
  const [level, setLevel] = useState('')
  const commandlength = arrayOfCommand.length
  const { data: session, status } = useSession()
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

  const PostData = async () => {
    let res = await standService.post(
      `/api/awsm-noob-data`,
      {
        level: 1,
        steps: commandlength,
      },
      {
        headers: {
          Authorization: `Bearer ${session.dynamoToken}`,
        },
      }
    )
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
            setFailureModal(true)
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
    setPlayerIndex(4)
  }

  useEffect(() => {
    if (status === 'authenticated' && window !== null) {
      if (successModal === true) {
        const confettiSettings = { target: 'my-canvas' }
        const confetti = new ConfettiGenerator(confettiSettings)
        confetti.render()
        setTimeout(() => {
          router.push('/camps/awesome-noob/level-2')
          confetti.clear()
        }, 5000)
        setTimeout(() => {
          PostData()
          setSuccessModal(false)
        }, 2000)
      } else if (failureModal === true) {
        setTimeout(() => {
          setFailureModal(false)
        }, 2000)
      }
    }
  }, [successModal, failureModal, router])

  return (
    <LayoutWrapper>
      <canvas className="fixed w-full h-full z-10 pointer-events-none" id="my-canvas"></canvas>
      <div className="z-20">
        {/* <div className="hidden w-[200px] h-[50px] m-6 mb-0 md:mb-32"> */}
        {successModal === false ? null : <ToastSuccess setModals={setSuccessModal} />}
        {failureModal === false ? null : <ToastFailure setModals={setFailureModal} />}
        {/* </div> */}
        <div className="flex flex-col flex-wrap justify-center my-20 items-center w-full md:flex md:flex-row md:justify-center md:item-center">
          <div className="grid grid-cols-3">
            {maps.map((item, index) => (
              <div
                className="flex justify-center items-center h-[110px] w-[110px] md:h-32 md:w-32 border-2 border-black"
                key={`${item.x}_${item.y}`}
              >
                {/* <p className="font-mono">
              ({`${item.x},${item.y}`})-[{index}]
            </p> */}
                <div>
                  {playerIndex === index ? (
                    <img
                      className="animate-bounce z-10 overflow-visible"
                      src="/static/images/user.png"
                      alt="User"
                      width="50"
                      height="65"
                    />
                  ) : null}
                  {trophyIndex === index ? (
                    <Image
                      className=""
                      src="/static/images/wrench.png"
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
            <div className="flex flex-col justify-center items-center my-2 w-full h-full">
              <ul className="w-[150px] h-[100px] md:h-[300px] overflow-auto">
                {arrayOfCommand.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {commandlength < 3 ? (
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
                  className="border mx-2 p-2 my-2 md:my-0"
                >
                  RUN
                </PrimaryButton>
                <PrimaryButton
                  variant="normal"
                  onClick={reset}
                  className="border mx-2 p-2 my-2 md:my-0"
                >
                  RESET
                </PrimaryButton>
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
    </LayoutWrapper>
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
        <p className="text-xs font-bold text-white">Kamu kalah</p>
      </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (session === null) {
    return {
      redirect: {
        destination: '/',
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
