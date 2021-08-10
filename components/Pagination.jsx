import Link from '@/components/Link'
import { ChevronLeft, ChevronRight, X } from 'tabler-icons-react'
import { PrimaryButton } from './design/button'

export default function Pagination({ totalPages, currentPage, menu }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <section className="bg-blue-100 dark:bg-yellow">
      <div className="p-6">
        <nav className="flex justify-between items-center">
          {!prevPage && (
            <PrimaryButton
              rel="previous"
              className="cursor-auto disabled:opacity-100"
              disabled={!prevPage}
            >
              <X />
            </PrimaryButton>
          )}
          {prevPage && (
            <Link
              href={
                currentPage - 1 === 1 ? `/study/${menu}` : `/study/${menu}/page/${currentPage - 1}`
              }
            >
              <PrimaryButton rel="previous">
                <ChevronLeft />
                <span>Sebelum</span>
              </PrimaryButton>
            </Link>
          )}
          <span className="text-black font-black">
            {currentPage} dari {totalPages} halaman
          </span>
          {!nextPage && (
            <PrimaryButton
              rel="next"
              className="cursor-auto disabled:opacity-50"
              disabled={!nextPage}
            >
              <X />
            </PrimaryButton>
          )}
          {nextPage && (
            <Link href={`/study/${menu}/page/${currentPage + 1}`}>
              <PrimaryButton rel="next">
                <span>Selanjutnya</span>
                <ChevronRight />
              </PrimaryButton>
            </Link>
          )}
        </nav>
      </div>
    </section>
  )
}
