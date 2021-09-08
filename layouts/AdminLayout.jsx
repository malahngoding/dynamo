import { useSession } from 'next-auth/client'

const AdminLayout = (props) => {
  const [session, loading] = useSession()
  console.log(session)
  if (loading) {
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
