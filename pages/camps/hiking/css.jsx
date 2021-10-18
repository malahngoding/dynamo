/* eslint-disable prettier/prettier */
import { LayoutWrapper } from '@/components/LayoutWrapper'
import Image from '@/components/Image'

export default function CSSPages() {
  return (
    <LayoutWrapper>
      <h3 className="mt-8 font-bold tracking-widest text-left uppercase text-blue dark:text-white md:text-center">
        ALLRIGHT
      </h3>
      <h1 className="text-5xl font-black text-left text-black dark:text-yellow md:text-center">
        CSS Mountain
      </h1>
      <section className="w-full  px-4 py-8 leading-normal bg-green-100 md:p-8 md:mt-10 text-md">
        <div className="flex flex-row justify-around">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-black text-left text-black dark:text-yellow md:text-center">
              CSS
            </h1>
            <h1 className="my-5 text-lg font-black text-left text-black dark:text-yellow md:text-center">
              The language for styling web pages
            </h1>
            <button className="my-3 w-[275px] h-[50px] bg-green rounded-2xl text-white font-bold">
              Learn CSS
            </button>
            <button className="my-3 w-[275px] h-[50px] bg-black rounded-2xl text-white font-bold">
              CSS Reference
            </button>
          </div>
          <div className="flex flex-col bg-white p-5">
            <p className="mb-3 text-lg font-black text-left text-black dark:text-yellow ">
              CSS Example:
            </p>
            <Image src="/static/images/css-code.png" alt="User" width="420" height="272" />
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
