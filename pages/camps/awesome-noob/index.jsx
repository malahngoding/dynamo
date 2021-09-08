import { LayoutWrapper } from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { UnderConstruction } from '@/components/UnderConstruction'

export default function AwesomeNoobs() {
  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Awesome Noob')}
        description={siteMetadata.description}
      />
      <UnderConstruction title="Awesome Noobs" subTitle="Penuh Semangat" />
    </LayoutWrapper>
  )
}
