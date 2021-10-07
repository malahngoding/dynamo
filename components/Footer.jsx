import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { LogoMalahNgoding } from '@/components/design/logo'
import { useTheme } from 'next-themes'
import Image from './Image'
import CustomLink from './Link'
import { useLanguageSwitching } from '@/modules/languageswitch-home.store'

export default function Footer() {
  const { theme } = useTheme()
  const year = new Date().getFullYear()
  const toogleSwitchingID = useLanguageSwitching((state) => state.toogleSwitchingID)
  const toogleSwitchingENG = useLanguageSwitching((state) => state.toogleSwitchingENG)
  const languageID = useLanguageSwitching((state) => state.languageID)
  const languageENG = useLanguageSwitching((state) => state.languageENG)
  const handleClickSwitchingID = () => {
    toogleSwitchingID()
  }
  const handleClickSwitchingENG = () => {
    toogleSwitchingENG()
  }
  return (
    <footer className="w-screen px-4 pt-4 border-t-2 border-black-200 dark:border-black-800 md:px-8 lg:px-32 lg:pt-8 xl:px-64">
      {languageID === true && (
        <div className="flex flex-col items-start content-center justify-between md:flex-row">
          <div className="w-64">
            <LogoMalahNgoding size={1.5} />
            <h1 className="mt-4 mb-1 text-2xl font-black">Malah Ngoding</h1>
            <p className="text-sm font-medium text-black dark:text-white dark:font-bold">
              Lupa Makan, Lupa Tidur, Malah Ngoding.
            </p>
          </div>
          <div className="flex flex-col items-start content-start mt-4 md:mt-0">
            <h1 className="text-lg font-extrabold text-black dark:text-white">Study</h1>
            <div className="h-4"></div>
            {[
              { title: 'Artikel', url: '/study/articles' },
              { title: 'Snippets', url: '/study/snippets' },
              { title: 'Flash Card', url: '/study/flash-card' },
            ].map((item, index) => {
              return (
                <Link href={item.url} key={`FOOTER${item.title}-${index}`} className="py-1">
                  <span className="py-2 text-md sm:text-sm font-medium hover:underline">
                    {item.title}
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="flex flex-col items-start content-start mt-4 md:mt-0">
            <h1 className="text-lg font-extrabold text-black dark:text-white">Camps</h1>
            <div className="h-4"></div>
            {[
              { title: 'Awesome Noob', url: '/camps/awesome-noob' },
              { title: 'Code Interact', url: '/camps/code-interact' },
              { title: 'Labs', url: '/camps/labs' },
            ].map((item, index) => {
              return (
                <Link href={item.url} key={`${item.title}-${index}`} className="py-1">
                  <span className="py-2 text-md sm:text-sm font-medium hover:underline">
                    {item.title}
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="flex flex-col items-start content-start mt-4 md:mt-0">
            <h1 className="text-lg font-extrabold text-black dark:text-white">Services</h1>
            <div className="h-4"></div>
            {[
              { title: 'Changelog', url: '/changelog' },
              { title: 'Coding Tutor', url: '/coding-tutor' },
              { title: 'Workshop', url: '/workshop' },
              { title: 'Development Service', url: '/development-service' },
            ].map((item, index) => {
              return (
                <Link href={item.url} key={`${item.title}-${index}`} className="py-1">
                  <span className="py-2 text-md sm:text-sm font-medium hover:underline">
                    {item.title}
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="flex flex-col items-start content-start mt-4 md:mt-0">
            <h1 className="text-lg font-extrabold text-black dark:text-white">Ours</h1>
            <div className="h-4"></div>
            {[
              { title: 'Tentang kami', url: '/about-us' },
              { title: 'Help & FAQs', url: '/help-and-faqs' },
              { title: 'Terms and Conditions', url: '/terms-and-conditions' },
              { title: 'Privacy Policy', url: '/privacy-policy' },
              { title: 'Bantu Kami', url: '/bantu-kami' },
            ].map((item, index) => {
              return (
                <Link href={item.url} key={`${item.title}-${index}`} className="py-1">
                  <span className="py-2 text-md sm:text-sm font-medium hover:underline">
                    {item.title}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
      {languageENG === true && (
        <div className="flex flex-col items-start content-center justify-between md:flex-row">
          <div className="w-64">
            <LogoMalahNgoding size={1.5} />
            <h1 className="mt-4 mb-1 text-2xl font-black">Malah Ngoding</h1>
            <p className="text-sm font-medium text-black dark:text-white dark:font-bold">
              Lupa Makan, Lupa Tidur, Malah Ngoding.
            </p>
          </div>
          <div className="flex flex-col items-start content-start mt-4 md:mt-0">
            <h1 className="text-lg font-extrabold text-black dark:text-white">Study</h1>
            <div className="h-4"></div>
            {[
              { title: 'Articles', url: '/study/articles' },
              { title: 'Snippets', url: '/study/snippets' },
              { title: 'Flash Card', url: '/study/flash-card' },
            ].map((item, index) => {
              return (
                <Link href={item.url} key={`FOOTER${item.title}-${index}`} className="py-1">
                  <span className="py-2 text-md sm:text-sm font-medium hover:underline">
                    {item.title}
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="flex flex-col items-start content-start mt-4 md:mt-0">
            <h1 className="text-lg font-extrabold text-black dark:text-white">Camps</h1>
            <div className="h-4"></div>
            {[
              { title: 'Awesome Noob', url: '/camps/awesome-noob' },
              { title: 'Code Interact', url: '/camps/code-interact' },
              { title: 'Labs', url: '/camps/labs' },
            ].map((item, index) => {
              return (
                <Link href={item.url} key={`${item.title}-${index}`} className="py-1">
                  <span className="py-2 text-md sm:text-sm font-medium hover:underline">
                    {item.title}
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="flex flex-col items-start content-start mt-4 md:mt-0">
            <h1 className="text-lg font-extrabold text-black dark:text-white">Services</h1>
            <div className="h-4"></div>
            {[
              { title: 'Changelog', url: '/changelog' },
              { title: 'Coding Tutor', url: '/coding-tutor' },
              { title: 'Workshop', url: '/workshop' },
              { title: 'Development Service', url: '/development-service' },
            ].map((item, index) => {
              return (
                <Link href={item.url} key={`${item.title}-${index}`} className="py-1">
                  <span className="py-2 text-md sm:text-sm font-medium hover:underline">
                    {item.title}
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="flex flex-col items-start content-start mt-4 md:mt-0">
            <h1 className="text-lg font-extrabold text-black dark:text-white">Ours</h1>
            <div className="h-4"></div>
            {[
              { title: 'About Us', url: '/about-us' },
              { title: 'Help & FAQs', url: '/help-and-faqs' },
              { title: 'Terms and Conditions', url: '/terms-and-conditions' },
              { title: 'Privacy Policy', url: '/privacy-policy' },
              { title: 'Help us', url: '/bantu-kami' },
            ].map((item, index) => {
              return (
                <Link href={item.url} key={`${item.title}-${index}`} className="py-1">
                  <span className="py-2 text-md sm:text-sm font-medium hover:underline">
                    {item.title}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      <div className="flex flex-col items-center content-center justify-center pt-8">
        <CustomLink
          href={`https://www.dewaweb.com/?source=https://malahngoding.com`}
          target="_blank"
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-xs">Powered By</p>
            <Image
              src={
                theme === 'dark'
                  ? `/static/images/sponsor/dewaweb-chp-horizontal-logo-monochrome-white.png`
                  : `/static/images/sponsor/dewaweb-chp-horizontal-logo-rgb.png`
              }
              width={220.47}
              height={96}
              alt="Powered By: Dewaweb, Cloud Hosting Expert https://www.dewaweb.com/ "
            />
          </div>
        </CustomLink>
        <div className="ml-4">
          <button className="border-2 mr-4 py-1 px-2" onClick={handleClickSwitchingID}>
            ID
          </button>
          <button className="border-2 py-1 px-2" onClick={handleClickSwitchingENG}>
            ENG
          </button>
        </div>
        <div className="h-8"></div>
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size="6" />
          <SocialIcon kind="tiktok" href={siteMetadata.tiktok} size="6" />
        </div>
        <div className="h-4"></div>
        <p className="text-xs text-center">
          <strong>© {year} Malah Ngoding </strong>. All Rights Reserved.
        </p>
        <div className="h-4"></div>
      </div>
    </footer>
  )
}
