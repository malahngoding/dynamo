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

  const [currentQuestionGroup, setCurrentQuestionGroup] = useState(1)
  // GET CURRENT QUESTION GROUP
  useEffect(() => {
    // Ini yang akan dilakukan diambil dari stand
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(function (response) {
        // handle success
        console.log(response.data)
        // setCurrentQuestionGroup()
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })

    //   // Ini yang akan dilakukan
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Flash Card')}
        description={siteMetadata.description}
      />
      <div className="hidden">
        <UnderConstruction title="Jawab Pertanyaan!" subTitle="Flash Card" />
      </div>
      <div className="flex flex-col justify-center items-center my-8">
        <QuizDashboardPages />
      </div>
    </LayoutWrapper>
  )
}
