import { SecondaryButton } from '@/components/design/button'
import { PrimaryButton } from '@/components/design/button'
import LayoutWrapper from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Design() {
  return (
    <LayoutWrapper>
      <PageSeo title={siteMetadata.titleHandler('Design')} description={siteMetadata.description} />
      <div className="flex flex-row flex-wrap justify-center items-center py-24">
        <div className="flex flex-col justify-center items-center w-2/4">
          <h1 className="text-4xl font-black">Black</h1>
          <h1 className="text-4xl font-extrabold">Extrabold</h1>
          <h1 className="text-4xl font-bold">Bold</h1>
          <h1 className="text-4xl font-semibold">Semibold</h1>
          <h1 className="text-4xl font-medium">Medium</h1>
          <h1 className="text-4xl font-normal">Normal</h1>
          <h1 className="text-4xl font-light">Light</h1>
          <h1 className="text-4xl font-extralight">Extralight</h1>
        </div>
        <div className="flex flex-col justify-center items-center w-2/4">
          <PrimaryButton>Primary</PrimaryButton>
          <div className="h-8" />
          <PrimaryButton type="normal">Normal</PrimaryButton>
          <div className="h-8" />
          <PrimaryButton type="warning">Warning</PrimaryButton>
          <div className="h-8" />
          <PrimaryButton type="danger">Danger</PrimaryButton>
          <div className="h-8" />
          <PrimaryButton type="success">Success</PrimaryButton>
          <div className="h-8" />
          <SecondaryButton>Secondary</SecondaryButton>
        </div>
      </div>
    </LayoutWrapper>
  )
}
