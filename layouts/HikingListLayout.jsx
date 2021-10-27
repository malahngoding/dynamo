import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import Image from '@/components/Image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ArticleCard } from '@/components/ArticleCard'

const HikingListLayout = ({
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
        </div>
        <section className="container mx-auto" style={{ maxWidth: '960px' }}>
          <div className="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {!filteredBlogPosts.length && 'No posts found.'}
            {displayPosts.map((frontMatter) => {
              const { slug, title, tags, pageLink } = frontMatter
              return (
                <Link key={slug} href={`/camps/${category}/${pageLink}`} passHref>
                  <a>
                    <ArticleCard>
                      <p></p>
                      <h1 className="font-extrabold text-md"> {title}</h1>
                      <div className="flex flex-row flex-wrap gap-4">
                        {tags.map((tag) => (
                          <Image
                            key={tag}
                            src={`/static/images/${tag}.png`}
                            alt={tag}
                            width={48}
                            height={48}
                            className="mr-2"
                          />
                        ))}
                      </div>
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

export default HikingListLayout
