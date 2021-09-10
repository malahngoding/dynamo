import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import { UnderConstruction } from '@/components/UnderConstruction'
import siteMetadata from '@/data/siteMetadata'
import { CihuyComponent, CihuyComponent2 } from '@/components/page/awesome-noob/cihuy-component'
import { CihuyButton } from '@/components/page/awesome-noob/cihuy-component'
// import { QuestionCard, QuestionPagination } from '@/components/page/awesome-noob/stateful'
import { QuizQuestionPage } from '@/components/page/awesome-noob/quiz-question'
import { useEffect, useState } from 'react'
import { getSession, useSession } from 'next-auth/client'
import CustomLink from '@/components/Link'
import axios from 'axios'

import { useRouter } from 'next/router'

export default function FlashCardAnsweringQuestion(props) {
  const [isActive, setIsActive] = useState(false)
  const [questions, setQuestions] = useState(props.dataQuestions)
  const [page, setPage] = useState(1)
  const totalPage = questions.length
  const router = useRouter()

  const [TotalScores, setTotalScores] = useState(props.dataTotalScore)

  const [session, loading] = useSession('')

  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Flash Card')}
        description={siteMetadata.description}
      />
      <div className="hidden">
        <UnderConstruction title="Jawab Pertanyaan!" subTitle="Flash Card" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[352px] h-full md:w-[540px] md:h-full">
          <QuizQuestionPage
            totalscore={TotalScores}
            question={questions}
            currentPage={page}
            setCurrentPage={setPage}
            totalPage={totalPage}
          />
        </div>
      </div>
    </LayoutWrapper>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const questionss = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions/get/${context.query.id}`
  )
  const totalscores = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-total-score/`,
    {
      email: session.user.email,
    }
  )
  return {
    props: {
      id: context.query.id,
      dataQuestions: questionss.data,
      dataTotalScore: totalscores.data.totalscore,
    }, // will be passed to the page component as props
  }
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
