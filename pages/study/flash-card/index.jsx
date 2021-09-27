import { LayoutWrapper } from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import { UnderConstruction } from '@/components/UnderConstruction'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/Link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { QuizDashboardPages } from '@/components/quiz-dashboard'

export default function FlashCardInitiation() {
  const { data: session, status } = useSession()

  const [currentQuestionGroup, setCurrentQuestionGroup] = useState(1)
  // GET CURRENT QUESTION GROUP

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
