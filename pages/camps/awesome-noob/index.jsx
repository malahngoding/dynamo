import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { CihuyComponent, CihuyComponent2 } from '@/components/page/awesome-noob/cihuy-component'
import { CihuyButton } from '@/components/page/awesome-noob/cihuy-component'
import { QuestionCard, QuestionPagination } from '@/components/page/awesome-noob/stateful'
import { useState } from 'react'

// Cara 1
export default function AwesomeNoobs() {
  // 10 Halaman
  // 1 Tombol kembali hilang
  // 10 Tombol lanjutkan hilang

  const [page, setPage] = useState(1)
  const totalPage = 10

  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Awesome Noob')}
        description={siteMetadata.description}
      />
      <div>
        <QuestionCard currentPage={page} />
        <QuestionPagination currentPage={page} setCurrentPage={setPage} totalPage={totalPage} />
      </div>
    </LayoutWrapper>
  )
}

export const Backup1 = () => {
  return (
    <>
      {/* Cara 1 */}
      <CihuyComponent />
      <CihuyComponent2 />
      {/* Cara 2 */}
      <CihuyComponent>
        <div>menerima props yang bernama children</div>
        <CihuyComponent2 />
      </CihuyComponent>
      <CihuyButton color="bg-red" isRounded={true} ngeng={<CihuyComponent />} list={[1, 2, 34]}>
        Masuk
      </CihuyButton>
    </>
  )
}
