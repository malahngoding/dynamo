import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'tabler-icons-react'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <button aria-label="Toggle Theme Mode" type="button">
      {mounted && (
        <div className="flex flex-row justify-evenly items-center my-4">
          <DarkTheme theme={theme} setTheme={setTheme} resolvedTheme={resolvedTheme} />
          <LightTheme theme={theme} setTheme={setTheme} resolvedTheme={resolvedTheme} />
        </div>
      )}
    </button>
  )
}

const LightTheme = (props) => {
  return (
    <button
      className={`flex flex-row justify-center py-1 px-4 ${
        props.theme === 'light' ? 'border-2 border-black' : 'border-2 border-black'
      }`}
      onClick={() =>
        props.setTheme(props.theme === 'dark' || props.resolvedTheme === 'dark' ? 'light' : 'dark')
      }
    >
      <Sun />
      <span className="ml-4">Terang</span>
    </button>
  )
}

const DarkTheme = (props) => {
  return (
    <button
      className={`flex flex-row justify-center py-1 px-4 ${
        props.theme === 'light' ? 'border-2 border-white' : 'border-2 border-white'
      }`}
      onClick={() =>
        props.setTheme(props.theme === 'dark' || props.resolvedTheme === 'dark' ? 'light' : 'dark')
      }
    >
      <Moon />
      <span className="ml-4">Gelap</span>
    </button>
  )
}

export default ThemeSwitch
