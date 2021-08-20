import CustomLink from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { AdminLayout } from '@/layouts/AdminLayout'

export default function AdminPage() {
  return (
    <AdminLayout>
      <PageSeo title={siteMetadata.titleHandler('Admin')} description={siteMetadata.description} />
      <h1>Malah Ngoding Dashboard</h1>
      <CustomLink href="/">OK</CustomLink>
    </AdminLayout>
  )
}
