import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Code() {
  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Code Interact')}
        description={siteMetadata.description}
      />
    </LayoutWrapper>
  )
}
