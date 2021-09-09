import { Card } from '@/components/design/card'
import Image from '@/components/Image'
import { LayoutWrapper } from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { useRouter } from 'next/router'

export default function Camps() {
  const router = useRouter()

  const handleClick = (e, rule) => {
    e.preventDefault()
    router.push(`/camps/${rule}`)
  }
  return (
    <LayoutWrapper>
      <PageSeo title={siteMetadata.titleHandler('Camps')} description={siteMetadata.description} />
      <section className="w-full px-4 py-8 leading-normal md:p-8 md:mt-10 text-md">
        <h3 className="font-bold tracking-widest text-left uppercase text-blue dark:text-white md:text-center">
          CAMPS
        </h3>
        <h1 className="text-5xl font-black text-left text-black dark:text-yellow md:text-center">
          Pergi Berkemah Kode
        </h1>
      </section>
      <section className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 px-4 gap-8">
        <Card
          className="hover:bg-blue-100 hover:cursor-pointer dark:hover:bg-black-800"
          onClick={(event) => {
            handleClick(event, 'awesome-noob')
          }}
        >
          <div className="flex flex-row justify-start items-center">
            <div className="flex w-1/4 justify-center items-center">
              <div className="rounded-xl bg-black-100 dark:bg-black p-2">
                <Image
                  src="https://emojicdn.elk.sh/%F0%9F%91%A8%E2%80%8D%F0%9F%9A%80%EF%B8%8F"
                  width="48"
                  height="48"
                  alt="Awesome Noob"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-3/4 py-6 ml-4">
              <h1 className="font-extrabold text-xl">Awesome Noob</h1>
              <p className="text-sm mt-2">Menyelesaikan tantangan luar angkasa.</p>
            </div>
          </div>
        </Card>
        <Card
          className="hover:bg-yellow-100 hover:cursor-pointer dark:hover:bg-black-800"
          onClick={(event) => {
            handleClick(event, 'code-interact')
          }}
        >
          <div className="flex flex-row justify-start items-center">
            <div className="flex w-1/4 justify-center items-center">
              <div className="rounded-xl bg-black-100 dark:bg-black p-2">
                <Image
                  src="https://emojicdn.elk.sh/%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB%EF%B8%8F"
                  width="48"
                  height="48"
                  alt="Code Interact"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-3/4 py-6 ml-4">
              <h1 className="font-extrabold text-xl">Code Interact</h1>
              <p className="text-sm mt-2">
                Langsung <em>ngoding</em> tanpa menginstall apapun.
              </p>
            </div>
          </div>
        </Card>
        <Card
          className="hover:bg-pink-100 hover:cursor-pointer dark:hover:bg-black-800"
          onClick={(event) => {
            handleClick(event, 'labs')
          }}
        >
          <div className="flex flex-row justify-start items-center">
            <div className="flex w-1/4 justify-center items-center">
              <div className="rounded-xl bg-black-100 dark:bg-black p-2">
                <Image
                  src="https://emojicdn.elk.sh/%E2%9A%97%EF%B8%8F"
                  width="48"
                  height="48"
                  alt="Labs"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-3/4 py-6 ml-4">
              <h1 className="font-extrabold text-xl">Labs</h1>
              <p className="text-sm mt-2">
                Kumpulan project yang menarik untuk dibuat. Langkah demi langkah.
              </p>
            </div>
          </div>
        </Card>
      </section>
      <section className="p-4 md:p-16 text-center">
        <Image
          src="/static/images/camps-instead.webp"
          height="846"
          width="540"
          alt="people on desk"
          quality="70"
        />
      </section>
    </LayoutWrapper>
  )
}
