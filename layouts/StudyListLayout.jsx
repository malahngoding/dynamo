import Tag from '@/components/Tag'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { Search } from 'tabler-icons-react'
import Image from '@/components/Image'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const StudyListLayout = ({
  posts,
  title,
  subTitle,
  category,
  initialDisplayPosts = [],
  pagination,
}) => {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const router = useRouter()

  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const handleClick = (event, rule) => {
    event.preventDefault()
    router.push(rule)
  }

  return (
    <>
      <div className="p-4">
        <div className="pb-8 space-y-2 md:space-y-5 flex flex-col justify-center items-center">
          <section className="w-full px-4 py-8 leading-normal md:p-8 md:mt-10 text-md">
            <h3 className="font-bold tracking-widest text-left uppercase text-blue dark:text-white md:text-center">
              {subTitle}
            </h3>
            <h1 className="text-5xl font-black text-left text-black dark:text-yellow md:text-center">
              {title}
            </h1>
          </section>
          <div className="w-full">
            <div className="relative mx-4 lg:mx-12 xl:mx-96">
              <input
                aria-label="Cari artikel"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Cari artikel"
                className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue focus:border-blue dark:bg-gray-800 dark:text-gray-100 dark:focus:ring-yellow dark:focus:border-yellow"
              />
              <Search className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300" />
            </div>
          </div>
        </div>
        <section className="container mx-auto" style={{ maxWidth: '960px' }}>
          <div className="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {!filteredBlogPosts.length && 'No posts found.'}
            {displayPosts.map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <Link key={slug} href={`/study/${category}/${slug}`} passHref>
                  <a>
                    <ArticleCard>
                      <Image src="https://emojicdn.elk.sh/🗂️" width="48" height="48" alt="Guide" />
                      <time dateTime={date}>{formatDate(date)}</time>
                      <h1 className="font-extrabold text-xl"> {title}</h1>
                      <div className="flex flex-row">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                      <p className="text-sm mt-2 hidden">{summary}</p>
                    </ArticleCard>
                  </a>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
      <div className="h-12" />
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          menu={pagination.menu}
        />
      )}
    </>
  )
}

const ArticleCard = (props) => {
  return (
    <div className="m-2  border-2 border-black rounded-lg drop-shadow bg-white dark:bg-black dark:hover:border-white hover:bg-blue-100 hover:drop-shadow-lg px-4 py-2 h-[240px]">
      <div className="flex flex-col justify-between items-start h-full">{props.children}</div>
    </div>
  )
}
