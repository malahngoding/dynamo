/* eslint-disable @next/next/no-img-element */
import { useSession, signOut } from 'next-auth/client'
import { Logout } from 'tabler-icons-react'
import { PrimaryButton } from '../design/button'
import ThemeSwitch from '../ThemeSwitch'

export default function Settings() {
  const [current] = useSession()
  return (
    <div>
      {current && (
        <div className="flex flex-col">
          <h1 className="font-black text-4xl mb-8">Pengaturan</h1>
          <p className="font-medium my-4">Tema</p>
          <ThemeSwitch />

          <PrimaryButton
            variant="danger"
            className="w-full mt-4 flex flex-row justify-center"
            onClick={signOut}
          >
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
