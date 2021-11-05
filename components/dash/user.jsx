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
  console.log(session, status)
  useEffect(() => {
    // Ini yang akan dilakukan diambil dari stand
    if (status === 'authenticated') {
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
          console.log(response.data[0].message)
          setFeedback(response.data[0].message)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
    // Ini yang akan dilakukan
  }, [])
  return (
    <div>
      {status === 'authenticated' && (
        <div className="p-4 rounded-xl flex flex-col justify-center items-center">
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
        </div>
      )}
    </div>
  )
}
