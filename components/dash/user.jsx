/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/react'
import Image from '../Image'

export default function User() {
  const { data: session, status } = useSession()
  return (
    <div className="overflow-y-scroll" style={{ height: 'calc(100vh - 148px)' }}>
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
        </div>
      )}
    </div>
  )
}
