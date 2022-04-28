/* eslint-disable react/no-children-prop */
import { LayoutWrapper } from '@/components/LayoutWrapper'
import { PrimaryButton } from '@/components/design/button'
import { signIn } from 'next-auth/react'

export default function LoginAweesomeNoob() {
  return (
    <div className="flex flex-col justify-around items-center h-screen sm:flex sm:flex-row">
      <div>Image</div>
      <div className="flex flex-col items-center">
        <p className="mb-4 ml-6 sm:ml-0 sm:mx-6 break-words">
          Silakan masuk terlebih dahulu sebelum melanjutkan, terima kasih!
        </p>
        <PrimaryButton variant="success" children="Masuk" onClick={() => signIn()} />
      </div>
    </div>
  )
}
