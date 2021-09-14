import { useSession } from 'next-auth/react'

const AdminLayout = (props) => {
  const { status } = useSession()
  if (status === 'loading') {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <span className="font-black">Loading...</span>
      </div>
    )
  } else {
    return <div>{props.children}</div>
  }
}

export default AdminLayout
