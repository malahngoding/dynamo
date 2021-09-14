/* eslint-disable @next/next/no-img-element */
import { useSession, signOut } from 'next-auth/react'
import { Logout } from 'tabler-icons-react'
import { PrimaryButton } from '../design/button'
import ThemeSwitch from '../ThemeSwitch'

export default function Settings() {
  const { status } = useSession()
  return (
    <div>
      {status === 'authenticated' && (
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
