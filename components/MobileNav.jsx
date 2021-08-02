import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import { ArrowRight, Menu2 } from 'tabler-icons-react'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="w-8 h-8 ml-1 mr-1 rounded p-2"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <Menu2 />
      </button>
      <div
        className={`fixed w-full h-full top-0 right-0 
        bg-white dark:bg-gray-800 z-10 transform
        ease-in-out duration-300 ${navShow ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        />
        <nav className="fixed h-full w-full">
          <div className="flex flex-row justify-end items-center py-6 px-4">
            <button onClick={onToggleNav} className="p-2">
              <ArrowRight />
            </button>
          </div>
          {[
            { href: '/study/snippet', title: 'Snippet' },
            { href: '/snippet/guide', title: 'Guide' },
            ...headerNavLinks,
            { href: '/sign-up', title: 'Bergabung' },
          ].map((link) => (
            <div key={link.title} className="px-12 py-4 w-full">
              <Link
                href={link.href}
                // eslint-disable-next-line prettier/prettier
                className={`text-2xl tracking-widest ${
                  link.title === 'Bergabung'
                    ? 'text-red  dark:text-pink'
                    : 'text-black  dark:text-gray-100'
                } font-black`}
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
