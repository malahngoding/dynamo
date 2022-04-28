import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ArticlesListLayout from '@/layouts/ArticlesListLayout'
import { PageSeo } from '@/components/SEO'
import { LayoutWrapper } from '@/components/LayoutWrapper'
import _ from 'lodash'
import { object } from 'sharp/lib/is'

export const POSTS_PER_PAGE = 64

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('articles')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    menu: 'articles',
  }
  // Article Category
  const articleCategory = _.groupBy(posts, 'tags')
  const mantap = _.chain(posts)
    // Group the elements of Array based on `color` property
    .groupBy('tags')
    // `key` is group's name (color), `value` is the array of objects
    .map((value, key) => ({ tags: key, article: value }))
    .value()
  return { props: { initialDisplayPosts, posts, pagination, articleCategory, mantap } }
}

export default function Study({
  posts,
  mantap,

  initialDisplayPosts,
  pagination,
  articleCategory,
}) {
  return (
    <LayoutWrapper>
      <PageSeo title={`Study - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ArticlesListLayout
        mantap={mantap}
        articleCategory={articleCategory}
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Baca Artikel"
        subTitle="Intinya Blog Lah"
        category="articles"
      />
    </LayoutWrapper>
  )
}
