import { Card } from '@/components/design/card'
import Image from '@/components/Image'
import { LayoutWrapper } from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { useRouter } from 'next/router'

export default function Study() {
  const router = useRouter()

  const handleClick = (e, rule) => {
    e.preventDefault()
    router.push(`/study/${rule}`)
  }
  return (
    <LayoutWrapper>
      <PageSeo title={siteMetadata.titleHandler('Study')} description={siteMetadata.description} />

      <section className="w-full px-4 py-8 leading-normal md:p-8 md:mt-10 text-md">
        <h3 className="font-bold tracking-widest text-left uppercase text-blue dark:text-white md:text-center">
          STUDY
        </h3>
        <h1 className="text-5xl font-black text-left text-black dark:text-yellow md:text-center">
          Belajar Secara Mandiri
        </h1>
      </section>
      <section className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 px-4 gap-8">
        <Card
          className="hover:bg-blue-100 hover:cursor-pointer dark:hover:bg-black-800"
          onClick={(event) => {
            handleClick(event, 'article')
          }}
        >
          <div className="flex flex-row justify-start items-center">
            <div className="flex w-1/4 justify-center items-center">
              <div className="rounded-xl bg-black-100 dark:bg-black p-2">
                <Image
                  src="https://emojicdn.elk.sh/%F0%9F%97%82%EF%B8%8F"
                  width="48"
                  height="48"
                  alt="article"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-3/4 py-6">
              <h1 className="font-extrabold text-xl">Articles</h1>
              <p className="text-sm mt-2">
                Artikel yang akan memandu mu melakukan berbagai macam hal tentang{' '}
                <em>programming</em>.
              </p>
            </div>
          </div>
        </Card>
        <Card
          className="hover:bg-yellow-100 hover:cursor-pointer dark:hover:bg-black-800"
          onClick={(event) => {
            handleClick(event, 'snippets')
          }}
        >
          <div className="flex flex-row justify-start items-center">
            <div className="flex w-1/4 justify-center items-center">
              <div className="rounded-xl bg-black-100 dark:bg-black p-2">
                <Image src="https://emojicdn.elk.sh/💾" width="48" height="48" alt="Snippets" />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-3/4 py-6">
              <h1 className="font-extrabold text-xl">Snippets</h1>
              <p className="text-sm mt-2">
                Potongan kode untuk melakukan suatu hal. Tinggal <em>copy</em> kemudian{' '}
                <em>paste</em> di bagian kamu membutuhkannya.
              </p>
            </div>
          </div>
        </Card>
        <Card
          className="hover:bg-pink-100 hover:cursor-pointer dark:hover:bg-black-800"
          onClick={(event) => {
            handleClick(event, 'flash-card')
          }}
        >
          <div className="flex flex-row justify-start items-center">
            <div className="flex w-1/4 justify-center items-center">
              <div className="rounded-xl bg-black-100 dark:bg-black p-2">
                <Image src="https://emojicdn.elk.sh/🃏" width="48" height="48" alt="Flash Card" />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-3/4 py-6">
              <h1 className="font-extrabold text-xl">Flash Card</h1>
              <p className="text-sm mt-2">
                Pertajam analisa kamu dengan menjawab pertanyaan-pertanyaan seputar kode dan
                sekitarnya. Daftarkan dirimu untuk meraih posisi teratas.
              </p>
            </div>
          </div>
        </Card>
      </section>
      <section className="p-4 md:p-16 text-center">
        <Image
          src="/static/images/study-instead.webp"
          height="512"
          width="512"
          alt="people on desk"
          quality="70"
        />
      </section>
    </LayoutWrapper>
  )
}
