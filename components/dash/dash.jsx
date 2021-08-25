/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/client'

export default function Dash() {
  const [current] = useSession()
  return (
    <div>
      {current && (
        <div>
          <h1 className="font-black text-4xl mb-2">Selamat Datang!</h1>
          <h2 className="font-bold text-lg">{current.user.name}</h2>
        </div>
      )}
    </div>
  )
}
