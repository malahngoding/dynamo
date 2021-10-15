/* eslint-disable prettier/prettier */
import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { LayoutWrapper } from '@/components/LayoutWrapper'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { standService } from '@/lib/service'
import { CommentPost, CommentList } from '@/components/CommentSection'
import router, { Router } from 'next/router'
const DEFAULT_LAYOUT = 'ArticlesLayout'

export async function getStaticPaths() {
  const posts = getFiles('articles')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('articles')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('articles', params.slug.join('/'))
  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  const rss = generateRss(allPosts)
  fs.writeFileSync('./public/feed.xml', rss)

  return { props: { post, authorDetails, prev, next, params } }
}

export default function Study({ post, authorDetails, prev, next, params }) {
  const { mdxSource, frontMatter } = post
  const { data: session, status } = useSession()
  const [questionss, setQuestion] = useState([])
  const [after_answer, setAfterAnswer] = useState('')
  let arrayWrongAnswer = []

  questionss.length === 0 ? (
    <></>
  ) : (
    questionss.incorrect_answer.map((item) => {
      arrayWrongAnswer.push({ isCorrect: false, question: item })
    })
  )
  const arrayTrueAnswer = []

  questionss.length === 0 ? (
    <></>
  ) : (
    arrayTrueAnswer.push({
      isCorrect: true,
      question: questionss.correct_answer,
    })
  )

  const arr = [...arrayWrongAnswer, ...arrayTrueAnswer]

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  useEffect(() => {
    if (status === 'authenticated') {
      standService
        .post(
          `/api/article-question`,
          { url: params.slug[0] },
          {
            headers: {
              Authorization: `Bearer ${session.dynamoToken}`,
            },
          }
        )
        .then(function (response) {
          // handle success
          if (response.data.length === 0) {
            standService
              .get(`/api/article-question/getQuestion`, {
                headers: {
                  Authorization: `Bearer ${session.dynamoToken}`,
                },
              })
              .then(function (response) {
                // handle success
                setQuestion(response.data[0])
                // setCurrentQuestionGroup()
              })
              .catch(function (error) {
                // handle error
                console.log(error)
              })
          } else {
            setQuestion([])
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }

    //   // Ini yang akan dilakukan
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, status, params.slug])
  const handleClickTrueAnswer = () => {
    if (status === 'authenticated') {
      standService
        .post(
          `/api/post-article-question-result`,
          { url: params.slug[0], correct_answer: 1, incorrect_answer: 0 },
          {
            headers: {
              Authorization: `Bearer ${session.dynamoToken}`,
            },
          }
        )
        .then(function (response) {
          // handle success
          setAfterAnswer('Benar')
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
  }
  const handleClickFalseAnswer = () => {
    if (status === 'authenticated') {
      standService
        .post(
          `/api/post-article-question-result`,
          { url: params.slug[0], correct_answer: 0, incorrect_answer: 1 },
          {
            headers: {
              Authorization: `Bearer ${session.dynamoToken}`,
            },
          }
        )
        .then(function (response) {
          // handle success
          setAfterAnswer('Salah')
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
  }

  useEffect(() => {
    const currentClick = localStorage.getItem('clickcount')
    const result = Number(currentClick) + 1
    console.log(result)
    if (status === 'unauthenticated') {
      if (currentClick >= 5) {
        router.push('/')
      } else {
        localStorage.setItem('clickcount', result)
      }
    }
  }, [])

  return (
    <LayoutWrapper>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
      {after_answer === '' ? (
        questionss.length === 0 ? (
          <></>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <div className="border-2 p-6 max-w-xl">
              <p className="font-bold text-base mb-4">Pertanyaan</p>
              <div className="border-2 p-2 mb-4 break-all">
                <p>{questionss.question}</p>
              </div>
              <p className="font-bold text-base mb-4">Jawaban</p>
              <div className="grid grid-cols-2">
                {arr.map((item, index) => (
                  <>
                    <button
                      key={index}
                      className="mx-2 py-2 px-3 mb-4 md:mx-2 md:py-3 md:px-4   border-2 border-b-4 border-black dark:border-white rounded-lg break-all"
                      onClick={() => {
                        if (item.isCorrect === true) {
                          handleClickTrueAnswer()
                        } else {
                          handleClickFalseAnswer()
                        }
                      }}
                    >
                      {item.question}
                    </button>
                  </>
                ))}
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="flex flex-col justify-center items-center">
          <p>{after_answer}</p>
        </div>
      )}
      {status === 'authenticated' ? <CommentPost url={params.slug}></CommentPost> : <></>}
      <CommentList url={params.slug}></CommentList>
    </LayoutWrapper>
  )
}
