/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/client'
import Image from '../Image'

export default function User() {
  const [current] = useSession()
  return (
    <div>
      {current && (
        <div className="p-4 rounded-xl flex flex-col justify-center items-center">
          <Image
            height="210"
            width="210"
            className="rounded-full border-2 border-black"
            src={current.user.image}
            alt={`Sebuah gambar avatar dari pengguna ${current.user.name}`}
          />
          <h1 className="font-extrabold text-xl mt-4 dark:text-black">{current.user.name}</h1>
        </div>
      )}
    </div>
  )
}
