/* eslint-disable no-undef */
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import headerNavLinksID from '@/data/headerNavLinksID'
import Link from './Link'
import MobileNav from './MobileNav'
import { LogoMalahNgoding } from './design/logo'
import { PrimaryButton } from './design/button'
import { signIn, useSession } from 'next-auth/react'
import { useDashNav } from '@/modules/dash-nav.store'
import { useLanguageSwitching } from '@/modules/languageswitch-home.store'

export const NavigationBar = (props) => {
  const languageID = useLanguageSwitching((state) => state.languageID)
  const languageENG = useLanguageSwitching((state) => state.languageENG)
  return (
    <header className="sticky bg-white dark:bg-black z-10 top-0 flex items-center justify-between p-5 border-b-2 border-black-200 dark:border-black-800">
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
        <>
          {languageID === true && (
            <div className="hidden sm:block">
              {headerNavLinksID.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-bold text-gray-900 sm:p-4 dark:text-gray-100 hover:text-blue-800 dark:hover:text-yellow"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )}
          {languageENG === true && (
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
          )}
        </>
        <Auth />
        <MobileNav />
      </div>
    </header>
  )
}

const Auth = () => {
  const { data: session, status } = useSession()
  const shown = useDashNav((state) => state.shown)
  const toggleNav = useDashNav((state) => state.toggleNav)

  const handleToggleDash = () => {
    toggleNav()
  }

  const languageID = useLanguageSwitching((state) => state.languageID)
  const languageENG = useLanguageSwitching((state) => state.languageENG)
  const toogleSwitchingID = useLanguageSwitching((state) => state.toogleSwitchingID)
  const toogleSwitchingENG = useLanguageSwitching((state) => state.toogleSwitchingENG)

  const handleClickSwitchingID = () => {
    toogleSwitchingID()
  }
  const handleClickSwitchingENG = () => {
    toogleSwitchingENG()
  }

  return (
    <>
      {status === 'loading' ? (
        <p>Checking...</p>
      ) : (
        <>
          {!session && languageID === true && (
            <PrimaryButton variant="success" onClick={() => signIn()}>
              Masuk
            </PrimaryButton>
          )}
          {!session && languageENG === true && (
            <PrimaryButton variant="success" onClick={() => signIn()}>
              Login
            </PrimaryButton>
          )}
          {session && (
            <PrimaryButton variant={shown ? 'info' : 'normal'} onClick={handleToggleDash}>
              <span className="font-bold">Dash</span>
            </PrimaryButton>
          )}
        </>
      )}
      <div className="ml-4">
        {languageID === true && languageENG === false ? <p>Aku</p> : <p>I'am</p>}

        <button className="border-2 mr-4 py-1 px-2" onClick={handleClickSwitchingID}>
          ID
        </button>
        <button className="border-2 py-1 px-2" onClick={handleClickSwitchingENG}>
          ENG
        </button>
      </div>
    </>
  )
}
