import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import { UnderConstruction } from '@/components/UnderConstruction'
import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/Link'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'

export default function FlashCardResults() {
  const router = useRouter()
  console.log(router.query)

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

  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Flash Card')}
        description={siteMetadata.description}
      />
      <div className="hidden">
        <UnderConstruction title="Jawab Pertanyaan!" subTitle="Flash Card" />
      </div>
      <div className="w-[352px] border-2 border-black">
        <div>Score anda adalah</div>
        <button onClick={handleSubmit}>selesai</button>
        <CustomLink href="/study/flash-card">Menuju Pertanyaan</CustomLink>
      </div>
    </LayoutWrapper>
  )
}
