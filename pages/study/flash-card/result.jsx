import { LayoutWrapper } from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import { UnderConstruction } from '@/components/UnderConstruction'
import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState } from 'react'
import CustomLink from '@/components/Link'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'
import { QuizResultPages } from '@/components/quiz-score'
import { useSession } from 'next-auth/react'
import { getSession } from 'next-auth/react'

export default function FlashCardResults(props) {
  const router = useRouter()

  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Flash Card')}
        description={siteMetadata.description}
      />
      <div className="hidden">
        <UnderConstruction title="Jawab Pertanyaan!" subTitle="Flash Card" />
      </div>
      {/* <div className="w-[352px] border-2 border-black">
        <div>Score anda adalah</div>
        <button onClick={handleSubmit}>selesai</b\utton>
        <CustomLink href="/study/flash-card">Menuju Pertanyaan</CustomLink>
      </div> */}
      <div className="flex flex-col justify-center items-center my-8">
        <QuizResultPages score={props.score} />
      </div>
    </LayoutWrapper>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const score = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/quiz-result/${session.user.email}`,
    {
      headers: {
        Authorization: `Bearer ${session.dynamoToken}`,
      },
    }
  )
  return {
    props: {
      score: score.data,
    }, // will be passed to the page component as props
  }
}
