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

  // console.log(session.user.email)

  // useEffect(() => {
  //   // Ini yang akan dilakukan
  //   axios
  //     // ${router.query.id}
  //     .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions/get/${router.query.id}`)
  //     .then(function (response) {
  //       // handle success
  //       // setQuestions(response.data)
  //       console.log(response.data, 'Efecct question')
  //       axios
  //         .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-total-score/`, {
  //           email: session.user.email,
  //         })
  //         .then(function (response) {
  //           // handle success
  //           // setTotalScores(response.data.totalscore)
  //           console.log(response.data.totalscore, 'effect totalscore')
  //         })
  //         .catch(function (error) {
  //           // handle error
  //           console.log(error)
  //         })
  //         .then(function () {
  //           // always executed
  //         })
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error)
  //     })
  //     .then(function () {
  //       // always executed
  //     })

  //   // Ini yang akan dilakukan
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
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
        {/* <QuestionCard currentPage={page} isActive={isActive} setIsActive={setIsActive} />
        <QuestionPagination
          currentPage={page}
          setCurrentPage={setPage}
          totalPage={totalPage}
          isActive={isActive}
          setIsActive={setIsActive}
        /> */}
      </div>
      {/* <CustomLink
        href={`/study/flash-card/result?id=1&total_correct=${7}&total_incorrect=${2}&total_question=${10}`}
      >
        Menuju Pertanyaan
      </CustomLink> */}
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
