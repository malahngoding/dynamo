import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import { UnderConstruction } from '@/components/UnderConstruction'
import siteMetadata from '@/data/siteMetadata'
import { CihuyComponent, CihuyComponent2 } from '@/components/page/awesome-noob/cihuy-component'
import { CihuyButton } from '@/components/page/awesome-noob/cihuy-component'
import { QuestionCard, QuestionPagination } from '@/components/page/awesome-noob/stateful'
import { useState } from 'react'
import CustomLink from '@/components/Link'

export default function FlashCardAnsweringQuestion() {
  const [isActive, setIsActive] = useState(false)

  const [page, setPage] = useState(1)
  const totalPage = 10
  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Flash Card')}
        description={siteMetadata.description}
      />
      <div className="hidden">
        <UnderConstruction title="Jawab Pertanyaan!" subTitle="Flash Card" />
      </div>
      <div>
        <QuestionCard currentPage={page} isActive={isActive} setIsActive={setIsActive} />
        <QuestionPagination
          currentPage={page}
          setCurrentPage={setPage}
          totalPage={totalPage}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
      <CustomLink
        href={`/study/flash-card/result?id=1&total_correct=${7}&total_incorrect=${2}&total_question=${10}`}
      >
        Menuju Pertanyaan
      </CustomLink>
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
