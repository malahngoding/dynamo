import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { LabsListLayout } from '@/layouts/LabsListLayout'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export const POSTS_PER_PAGE = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('labs')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    menu: 'labs',
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Labs({ posts, initialDisplayPosts, pagination }) {
  return (
    <LayoutWrapper>
      <PageSeo title={siteMetadata.titleHandler('Labs')} description={siteMetadata.description} />
      <LabsListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Baca Panduan"
        subTitle="Intinya Blog Lah"
        category="labs"
      />
    </LayoutWrapper>
  )
}
