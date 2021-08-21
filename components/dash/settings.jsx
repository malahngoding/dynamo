/* eslint-disable @next/next/no-img-element */
import { useSession, signOut } from 'next-auth/client'
import { Logout } from 'tabler-icons-react'
import { PrimaryButton } from '../design/button'

export default function Settings() {
  const [current] = useSession()
  return (
    <div>
      {current && (
        <div>
          <h1 className="font-black text-4xl mb-2">Pengaturan</h1>
          <PrimaryButton variant="danger" className="w-full mt-4" onClick={signOut}>
            <span>
              <Logout />
            </span>
            <span className="ml-2 font-bold">Keluar</span>
          </PrimaryButton>
        </div>
      )}
    </div>
  )
}
