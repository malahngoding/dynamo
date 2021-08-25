import Footer from '@/components/Footer'
import { NavigationBar } from '@/components/NavBar'
import { DashWrapper } from '@/components/dash/dash-wrapper'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <DashWrapper />
      <Footer />
    </>
  )
}

export default LayoutWrapper
