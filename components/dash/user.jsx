/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/react'
import Image from '../Image'
import { useEffect, useState } from 'react'
import { standService } from '@/lib/service'
import { getSession } from 'next-auth/react'

export default function User() {
  const { data: session, status } = useSession()
  const [feedback, setFeedback] = useState('')
  const [badge, setBadge] = useState('')
  const [loading, setLoading] = useState(false)
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
  // console.log(session.dynamoToken)

  const getBadge = async () => {
    let get = await standService
      .get(`/api/get-badge`, {
        headers: {
          Authorization: `Bearer ${session.dynamoToken}`,
        },
      })
      .then(function (response) {
        // handle success
        setBadge(response.data)
        setLoading(true)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }
  useEffect(() => {
    // Ini yang akan dilakukan diambil dari stand
    if (status === 'authenticated') {
      getBadge()
      standService
        .post(
          `/api/get-feedback`,
          {},
          {
            headers: {
              Authorization: `Bearer ${session.dynamoToken}`,
            },
          }
        )
        .then(function (response) {
          // handle success
          setFeedback(response.data[0].message)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
    // Ini yang akan dilakukan
  }, [loading, feedback])
  return (
    <div>
      {status === 'authenticated' && loading === true ? (
        <div className="p-4 rounded-xl flex flex-col justify-center items-center overflow-y-scroll overflow-visible">
          <Image
            height={128}
            width={128}
            className="rounded-full border-2 border-black"
            src={session.user.image}
            alt={`Sebuah gambar avatar dari pengguna ${session.user.name}`}
          />
          <h1 className="font-extrabold text-xl mt-4">{session.user.name}</h1>
          <p className="font-extrabold text-center text-md mt-2">Semangatku malahngoding karena:</p>
          <p className="font-extrabold text-center text-md mt-2">{feedback}</p>
          <div className="grid grid-cols-2  gap-4 border-2 border-white mt-2 pb-24">
            {badge.map((item, i) => (
              <div key={i} className="flex flex-col border-2 border-white ">
                {item.type === 'image' ? (
                  <>
                    <div className="border-2 border-">
                      <img src={`${baseURL}${item.media}`} alt="" className="h-[160px]"></img>
                    </div>
                    <p className="font-bold">{item.title}</p>
                    <p className="font-bold text-gray-600">{item.description}</p>
                  </>
                ) : (
                  <>
                    <div className="border-2 border-">
                      <video height={128} autoPlay>
                        <source src={`${baseURL}${item.media}`} type="video/mp4"></source>
                      </video>
                    </div>
                    <p className="font-bold">{item.title}</p>
                    <p className="font-bold text-gray-600">{item.description}</p>
                  </>
                )}
              </div>
            ))}
            {/* <div className='flex flex-col border-2 border-white'>
              <div className='border-2 border-'>
                <img src='/static/images/new-user.png'
                  alt=''
                  className='h-[160px]'>
                </img>
              </div>
              <p className='font-bold'>Indigo Yearning</p>
              <p className='font-bold text-gray-600'>Pluto</p>
            </div>
            <div className='flex flex-col border-2 border-white'>
              <div>
                <img src='https://lh3.googleusercontent.com/40slCeEppt5x_jQQXiDZqA6sZMVe7gzYpbTuVzQYsfewT91k-ExxqUi-24TaqUzZuNyv4nvxnbwRy48_wiirByw_vzHwqrWO0R80ww=s0'
                  alt=''
                  className='h-[160px]'>
                </img>
              </div>
              <p className='font-bold'>Lil Z</p>
              <p className='font-bold text-gray-600'>Lil Monki</p>
            </div>
            <div className='border-2 border-'>
              <video width="500" height="500" autoPlay>
                <source src="/static/videos/example.mp4" type="video/mp4" />
              </video>
            </div>
            <div className='border-2 border-black'>04</div> */}
          </div>
        </div>
      ) : (
        <h1 className="font-extrabold text-xl mt-4">Waiting...</h1>
      )}
    </div>
  )
}
