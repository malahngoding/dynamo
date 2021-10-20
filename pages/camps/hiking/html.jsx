/* eslint-disable prettier/prettier */
import { LayoutWrapper } from '@/components/LayoutWrapper'
import Image from '@/components/Image'
import { getSession } from 'next-auth/react'

export default function HtmlPages() {
  return (
    <LayoutWrapper>
      <h3 className="mt-8 font-bold tracking-widest text-left uppercase text-blue dark:text-white md:text-center">
        ALLRIGHT
      </h3>
      <h1 className="text-5xl font-black text-left text-black dark:text-yellow md:text-center">
        HTML Mountain
      </h1>
      <section className="w-full  px-4 py-8 leading-normal bg-black md:p-8 md:mt-10 text-md">
        <div className="flex flex-row justify-around border-2 border-black">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-black text-left text-white dark:text-yellow md:text-center">
              H T M L
            </h1>
            <h1 className="my-5 text-lg font-black text-left text-white dark:text-yellow md:text-center">
              The language for building web pages
            </h1>
            <button className="my-3 w-[275px] h-[50px] bg-green rounded-2xl text-white font-bold">
              Learn HTML
            </button>
            <button className="my-3 w-[275px] h-[50px] bg-yellow-200 rounded-2xl text-black font-bold">
              Video Tutorial
            </button>
            <button className="my-3 w-[275px] h-[50px] bg-white rounded-2xl text-black font-bold">
              HTML Reference
            </button>
          </div>
          <div className="flex flex-col bg-white p-5">
            <p className="mb-3 text-lg font-black text-left text-black dark:text-yellow ">
              HTML Example:
            </p>
            <Image src="/static/images/html-code.png" alt="User" width="408" height="320" />
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session === null) {
    return {
      redirect: {
        destination: '/',
      },
    }
  } else {
    return {
      props: {
        isAuthenticated: true,
        dynamoToken: session.dynamoToken,
      }, // will be passed to the page component as props
    }
  }
}
