/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/react'

export default function Dash() {
  const { data: session, status } = useSession()
  return (
    <div>
      {status === 'authenticated' && (
        <div>
          <h1 className="font-black text-4xl mb-2">Selamat Datang!</h1>
          <h2 className="font-bold text-lg">{session.user.name}</h2>
        </div>
      )}
    </div>
  )
}
