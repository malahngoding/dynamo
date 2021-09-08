import Footer from '@/components/Footer'
import { NavigationBar } from '@/components/NavBar'
import { DashWrapper } from '@/components/dash/dash-wrapper'

export const LayoutWrapper = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <DashWrapper />
      <Footer />
    </>
  )
}
