import { LayoutWrapper } from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import { UnderConstruction } from '@/components/UnderConstruction'
import siteMetadata from '@/data/siteMetadata'

export default function FlashCardInitiation() {
  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Flash Card')}
        description={siteMetadata.description}
      />
      <div>
        <UnderConstruction title="Tanya Jawab!" subTitle="Flash Card" />
      </div>
    </LayoutWrapper>
  )
}
