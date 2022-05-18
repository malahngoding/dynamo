import { LayoutWrapper } from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import { UnderConstruction } from '@/components/UnderConstruction'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/Link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { QuizDashboardPages } from '@/components/quiz-dashboard'
import { getSession, useSession } from 'next-auth/react'

export default function FlashCardInitiation(props) {
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
        <QuizDashboardPages rankings={props.rankings} />
      </div>
    </LayoutWrapper>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session === null) {
    return {
      redirect: {
        destination: `${process.env.NEXTAUTH_URL}/study/flash-card/404`,
      },
    }
  } else {
    const rankings = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-ranked-score/`,
      {}
    )
    return {
      props: {
        isAuthenticated: true,
        dynamoToken: session.dynamoToken,
        rankings: rankings.data,
      }, // will be passed to the page component as props
    }
  }
}
