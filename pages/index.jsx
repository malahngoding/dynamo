import { Logo } from '@/components/logo-instead'
import { PageLayout } from '@/layouts/page'

export default function Home() {
  return (
    <PageLayout title="Home">
      <div className="flex flex-row items-center justify-center min-h-screen">
        <Logo />
      </div>
    </PageLayout>
  )
}
