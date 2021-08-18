import CustomLink from '@/components/Link'
import { AdminLayout } from '@/layouts/AdminLayout'
import { useSession } from 'next-auth/client'

export default function AdminPage() {
  const [session, loading] = useSession()

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <span className="font-black">Loading...</span>
      </div>
    )
  } else {
    console.log(session)
    return (
      <AdminLayout>
        <h1>Malah Ngoding Admin</h1>
        <CustomLink href="/">OK</CustomLink>
      </AdminLayout>
    )
  }
}
