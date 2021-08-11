import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import { StudyListLayout } from '@/layouts/StudyListLayout'
import { PageSeo } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'

export const POSTS_PER_PAGE = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('guide')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    menu: 'guide',
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Study({ posts, initialDisplayPosts, pagination }) {
  return (
    <LayoutWrapper>
      <PageSeo title={`Study - ${siteMetadata.author}`} description={siteMetadata.description} />
      <StudyListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Baca Panduan"
        subTitle="Intinya Blog Lah"
        category="guide"
      />
    </LayoutWrapper>
  )
}
