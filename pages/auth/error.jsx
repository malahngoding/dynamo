import { PrimaryButton } from '@/components/design/button'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Error() {
  const router = useRouter()
  return (
    <>
      <PageSeo title={siteMetadata.titleHandler('Error')} description={siteMetadata.description} />
      <div className="flex flex-col min-h-screen min-w-full justify-center items-center">
        {router.query.error === 'Callback' && 'Masalah Otentikasi'}
        <Link href="/" passHref>
          <PrimaryButton>Kembali</PrimaryButton>
        </Link>
      </div>
    </>
  )
}
