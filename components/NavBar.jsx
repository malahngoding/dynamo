import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { LogoMalahNgoding } from './design/logo'
import { PrimaryButton } from './design/button'
import { signIn, signOut, useSession } from 'next-auth/client'

export const NavigationBar = (props) => {
  return (
    <header className="flex items-center justify-between p-5 border-b-2 border-black-200 dark:border-black-800">
      <div>
        <Link href="/" aria-label="Malah Ngoding">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <LogoMalahNgoding />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold">{siteMetadata.headerTitle}</div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-bold text-gray-900 sm:p-4 dark:text-gray-100 hover:text-blue-800 dark:hover:text-yellow"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <Auth />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

const Auth = () => {
  const [session, loading] = useSession()

  return (
    <>
      {loading ? (
        <p>Checking...</p>
      ) : (
        <>
          {!session && (
            <PrimaryButton type="success" onClick={() => signIn()}>
              Masuk
            </PrimaryButton>
          )}

          {session && (
            <PrimaryButton type="warning" onClick={() => signOut()}>
              {session.user.name}
            </PrimaryButton>
          )}
        </>
      )}
    </>
  )
}
