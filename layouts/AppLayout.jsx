import { useAuth } from '@/hooks/auth'
import { Fragment } from 'react'

const AppLayout = ({ header, children }) => {
  const { user } = useAuth({ middleware: 'auth' })

  return (
    <Fragment>
      {user && (
        <div className="min-h-screen bg-gray-100">
          {/* Page Content */}
          <main>{children}</main>
        </div>
      )}
    </Fragment>
  )
}

export default AppLayout
