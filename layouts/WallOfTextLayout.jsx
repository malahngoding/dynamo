import Image from '@/components/Image'
import { PageSeo } from '@/components/SEO'

const WallOfTextLayout = ({ children, frontMatter }) => {
  const { title, subTitle, description } = frontMatter

  return (
    <>
      <PageSeo title={title} description={description} />
      <div className="w-full px-4 py-8 leading-normal md:p-8 md:mt-10 text-md">
        <h3 className="font-bold tracking-widest text-left uppercase text-blue dark:text-white md:text-center">
          {subTitle}
        </h3>
        <h1 className="text-5xl font-black text-left text-black dark:text-yellow md:text-center">
          {title}
        </h1>
      </div>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full p-4">
        <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div>
      </article>
    </>
  )
}

export default WallOfTextLayout
