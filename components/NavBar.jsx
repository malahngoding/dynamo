import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import { LogoMalahNgoding } from './design/logo'
import { PrimaryButton } from './design/button'
import { signIn, useSession } from 'next-auth/client'
import { useDashNav } from '@/modules/dash-nav.store'

export const NavigationBar = (props) => {
  return (
    <header className="sticky bg-white dark:bg-black-800 z-10 top-0 flex items-center justify-between p-5 border-b-2 border-black-200 dark:border-yellow-800">
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
        <MobileNav />
      </div>
    </header>
  )
}

const Auth = () => {
  const [session, loading] = useSession()
  const shown = useDashNav((state) => state.shown)
  const toggleNav = useDashNav((state) => state.toggleNav)

  const handleToggleDash = () => {
    toggleNav()
  }
  return (
    <>
      {loading ? (
        <p>Checking...</p>
      ) : (
        <>
          {!session && (
            <PrimaryButton variant="success" onClick={() => signIn()}>
              Masuk
            </PrimaryButton>
          )}

          {session && (
            <PrimaryButton variant={shown ? 'info' : 'normal'} onClick={handleToggleDash}>
              <span className="font-bold">Dash</span>
            </PrimaryButton>
          )}
        </>
      )}
    </>
  )
}
