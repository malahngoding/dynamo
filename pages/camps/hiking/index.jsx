import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import HikingListLayout from '@/layouts/HikingListLayout'
import { PageSeo } from '@/components/SEO'
import { LayoutWrapper } from '@/components/LayoutWrapper'

export const POSTS_PER_PAGE = 64

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('hiking')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    menu: 'hiking',
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Camps({ posts, initialDisplayPosts, pagination }) {
  return (
    <LayoutWrapper>
      <PageSeo title={`Camps - ${siteMetadata.author}`} description={siteMetadata.description} />
      <HikingListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Hiking"
        subTitle="TLDR;"
        category="hiking"
      />
    </LayoutWrapper>
  )
}
