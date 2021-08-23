import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import { UnderConstruction } from '@/components/UnderConstruction'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/Link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/client'
import { QuizDashboardPages } from '@/components/quiz-dashboard'

export default function FlashCardInitiation() {
  // const [session, loading] = useSession()

  // const [currentQuestionGroup, setCurrentQuestionGroup] = useState(1)
  // // GET CURRENT QUESTION GROUP
  // console.log(session.user.email)
  // useEffect(() => {
  //   // Ini yang akan dilakukan diambil dari stand
  //   axios
  //     .get('http://localhost:8080/api/quiz-group-name')
  //     .then(function (response) {
  //       // handle success
  //       console.log(response.data.results)
  //       // setCurrentQuestionGroup()
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
      {/* <div className="flex flex-col justify-center items-center my-8">
        <div className="w-[352px] h-[720px] border-2 border-black">
          <div>Pertanyaan Quiz ke 1</div>
          <CustomLink href={`/study/flash-card/question?id=${currentQuestionGroup}`}>
            Menuju Pertanyaan
          </CustomLink>
        </div>
      </div>
       */}
      <div className="flex flex-col justify-center items-center my-8">
        <QuizDashboardPages />
      </div>
    </LayoutWrapper>
  )
}
