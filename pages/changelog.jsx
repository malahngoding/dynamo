import { LayoutWrapper } from '@/components/LayoutWrapper'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'WallOfTextLayoutAlt'

export async function getStaticProps() {
  const content = await getFileBySlug('stuff', ['changelog'])
  return { props: { content } }
}
export default function ChangeLog({ content }) {
  const { mdxSource, frontMatter } = content

  return (
    <>
      <LayoutWrapper>
        <MDXLayoutRenderer
          layout={DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
        />
      </LayoutWrapper>
    </>
  )
}
