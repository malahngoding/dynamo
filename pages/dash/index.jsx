import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import AppLayout from '@/layouts/AppLayout'

export default function Dash() {
  return (
    <AppLayout>
      <PageSeo title={siteMetadata.titleHandler('Dash')} description={siteMetadata.description} />
      <h1>DASH</h1>
    </AppLayout>
  )
}
