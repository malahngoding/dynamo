import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import { UnderConstruction } from '@/components/UnderConstruction'
import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState } from 'react'
import CustomLink from '@/components/Link'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'
import { QuizResultPages } from '@/components/quiz-score'
import { useSession } from 'next-auth/client'

export default function FlashCardResults() {
  const router = useRouter()
  console.log(router.query)
  const [session, loading] = useSession('')
  const [TotalScores, setTotalScores] = useState(0)

  const handleSubmit = () => {
    axios
      // ${router.query.id}
      .post(`https://opentdb.com/api.php?amount=10`, { totalScore: 1 })
      .then(function (response) {
        router.push('/study/flash-card')
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }
  useEffect(() => {
    // Ini yang akan dilakukan
    axios
      // ${router.query.id}
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions/get/${router.query.id}`)
      .then(function (response) {
        // handle success

        axios
          .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-total-score/`, {
            email: session.user.email,
          })
          .then(function (response) {
            // handle success
            setTotalScores(response.data.totalscore)
            console.log(response.data.totalscore)
          })
          .catch(function (error) {
            // handle error
            console.log(error)
          })
          .then(function () {
            // always executed
          })
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })

    // Ini yang akan dilakukan
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {/* <div className="w-[352px] border-2 border-black">
        <div>Score anda adalah</div>
        <button onClick={handleSubmit}>selesai</b\utton>
        <CustomLink href="/study/flash-card">Menuju Pertanyaan</CustomLink>
      </div> */}
      <div className="flex flex-col justify-center items-center my-8">
        <QuizResultPages totalscore={TotalScores} />
      </div>
    </LayoutWrapper>
  )
}
