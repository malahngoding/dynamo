import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { UnderConstruction } from '@/components/UnderConstruction'

// Cara 1
export default function AwesomeNoobs() {
  // 10 Halaman
  // 1 Tombol kembali hilang
  // 10 Tombol lanjutkan hilang

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
