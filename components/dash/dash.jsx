import { standService } from '@/lib/service'
import { useSession } from 'next-auth/react'

export default function Dash() {
  const { data: session, status } = useSession()

  return (
    <div className="overflow-y-scroll" style={{ height: 'calc(100vh - 148px)' }}>
      {status === 'authenticated' && (
        <>
          <h1 className="font-black text-4xl mb-2">Selamat Datang!</h1>
          <h2 className="font-bold text-lg">{session.user.name}</h2>
        </>
      )}
    </div>
  )
}
