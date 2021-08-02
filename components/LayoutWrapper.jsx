import Footer from '@/components/Footer'
import { NavigationBar } from '@/components/NavBar'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LayoutWrapper
