import LayoutWrapper from '@/components/LayoutWrapper'
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
        <UnderConstruction title="Jawab Pertanyaan!" subTitle="Flash Card" />
      </div>
    </LayoutWrapper>
  )
}
