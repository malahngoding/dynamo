import LayoutWrapper from '@/components/LayoutWrapper'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'WallOfTextLayout'

export async function getStaticProps() {
  const content = await getFileBySlug('stuff', ['terms-and-conditions'])
  return { props: { content } }
}

export default function TermsAndConditions({ content }) {
  const { mdxSource, frontMatter } = content

  return (
    <>
      <LayoutWrapper>
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
        />
      </LayoutWrapper>
    </>
  )
}
