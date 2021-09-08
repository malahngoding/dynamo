import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { LogoMalahNgoding } from '@/components/design/logo'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="w-screen px-4 pt-4 border-t-2 border-black-200 dark:border-black-800 md:px-8 lg:px-32 lg:pt-8 xl:px-64">
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
      <div className="flex flex-col items-center content-center justify-center pt-8">
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
