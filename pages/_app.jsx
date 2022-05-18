import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router'

import '@fontsource/montserrat/100.css'
import '@fontsource/montserrat/200.css'
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import '@fontsource/montserrat/900.css'

import '@/styles/tailwind.css'

import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component key={router.asPath} {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
