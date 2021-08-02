import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FlashCard() {
  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Flash Card')}
        description={siteMetadata.description}
      />
      <div>FLash</div>
    </LayoutWrapper>
  )
}
