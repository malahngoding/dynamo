import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'

export const POSTS_PER_PAGE = 64

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('snippets')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    menu: 'snippets',
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Study({ posts, initialDisplayPosts, pagination }) {
  return (
    <LayoutWrapper>
      <PageSeo title={`Study - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Code Snippets"
        subTitle="TLDR;"
        category="snippets"
      />
    </LayoutWrapper>
  )
}
