import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function AwesomeNoobs() {
  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Awesome Noob')}
        description={siteMetadata.description}
      />

      <div>CAMPS</div>
    </LayoutWrapper>
  )
}
