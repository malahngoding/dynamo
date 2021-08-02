import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Labs() {
  return (
    <LayoutWrapper>
      <PageSeo title={siteMetadata.titleHandler('Labs')} description={siteMetadata.description} />
    </LayoutWrapper>
  )
}
