/* eslint-disable @next/next/link-passhref */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import CustomLink from '@/components/Link'

export const QuizQuestionPage = (props) => {
  // let correctAnswerCount = 0
  const [CorrectAnswerCount, setCorrectAnswerCount] = useState(0)
  // let wrongAnswerCount = 0
  const [WrongAnswerCount, setWrongAnswerCount] = useState(0)
  const [TotalAnswerCount, setTotalAnswerCount] = useState(0)
  const [question, setQuestion] = useState([])
  const router = useRouter()
  console.log(router.query.id)

  // const handleClick = () => {
  //   for (let i = 0; i < correctAnswerCount.length; i++) {
  //     totalAnswerCount = correctAnswerCount[i].value + wrongAnswerCount[i].value
  //   }
  // }

  useEffect(() => {
    // Ini yang akan dilakukan
    axios
      // ${router.query.id}
      .get(`http://127.0.0.1:8080/api/questions/get/${router.query.id}`)
      .then(function (response) {
        // handle success
        setQuestion(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })

    // Ini yang akan dilakukan
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {question.length === 0 ? (
        <>Loading</>
      ) : (
        <div>
          <div className="flex flex-row border-4 border-black-400 mt-5 pb-5 bg-black-400 rounded-t-lg mx-5">
            <div className="flex flex-1 mt-5 justify-center font-bold">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-left"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
            </div>
            <div className="flex flex-1 mt-5 justify-center font-bold">
              {question[props.currentPage - 1].groupname}
            </div>
            <div className="flex flex-1"></div>
          </div>
          <div className="flex flex-col border-4 border-purple-100 mt-0 mb-5 bg-white mx-5 rounded-b-lg">
            <div>
              <img
                className="flex my-8 "
                src="https://i.postimg.cc/13cQFMSy/Pembahasan-Soal-Kombinasi-2.jpg"
                alt="picture"
                title=""
              />
            </div>
            <div className="flex justify-center mx-28 rounded-full py-3 px-4 bg-yellow mb-5 text-white">
              Nilai {question[props.currentPage - 1].score} Point
            </div>
            <div className="text-center mx-4 my-4">{question[props.currentPage - 1].question}</div>

            <div className="flex flex-col justify-start items-center">
              {props.currentPage !== props.totalPage ? (
                <button
                  className="flex mx-2 py-2 px-3 rounded-xl mb-4 md:mx-2 md:py-3 md:px-4 flex-row border-2 md:rounded-full border-blue bg-blue text-purple-100"
                  onClick={() => {
                    props.setCurrentPage(props.currentPage + 1)
                    setCorrectAnswerCount(CorrectAnswerCount + 1)
                    setTotalAnswerCount(TotalAnswerCount + 1)
                  }}
                >
                  <div>{question[props.currentPage - 1].correct_answer}</div>
                </button>
              ) : (
                <CustomLink
                  href={`/study/flash-card/result?id=1&total_correct=${
                    CorrectAnswerCount + 1
                  }&total_incorrect=${WrongAnswerCount}&total_question=${TotalAnswerCount + 1}`}
                >
                  <button
                    className="flex mx-2 py-2 px-3 rounded-xl mb-4 md:mx-2 md:py-3 md:px-4 flex-row border-2 md:rounded-full border-blue bg-blue text-purple-100"
                    onClick={() => {
                      // props.setCurrentPage(props.currentPage + 1)
                      setCorrectAnswerCount(CorrectAnswerCount + 1)
                      setTotalAnswerCount(TotalAnswerCount + 1)
                    }}
                  >
                    <div>{question[props.currentPage - 1].correct_answer}</div>
                  </button>
                </CustomLink>
              )}

              {props.currentPage !== props.totalPage ? (
                question[props.currentPage - 1].incorrect_answer.map((item, index) => (
                  <button
                    key={index}
                    className="flex mx-2 py-2 px-3 rounded-xl mb-4 md:mx-2 md:py-3 md:px-4 flex-row border-2 md:rounded-full border-blue bg-blue text-purple-100"
                    onClick={() => {
                      props.setCurrentPage(props.currentPage + 1)
                      setWrongAnswerCount(WrongAnswerCount + 1)
                      setTotalAnswerCount(TotalAnswerCount + 1)
                    }}
                  >
                    <div>{item}</div>
                  </button>
                ))
              ) : (
                <CustomLink
                  href={`/study/flash-card/result?id=1&total_correct=${CorrectAnswerCount}&total_incorrect=${
                    WrongAnswerCount + 1
                  }&total_question=${TotalAnswerCount + 1}`}
                >
                  {question[props.currentPage - 1].incorrect_answer.map((item, index) => (
                    <button
                      key={index}
                      className="flex mx-2 py-2 px-3 rounded-xl mb-4 md:mx-2 md:py-3 md:px-4 flex-row border-2 md:rounded-full border-blue bg-blue text-purple-100"
                      onClick={() => {
                        // props.setCurrentPage(props.currentPage + 1)
                        setWrongAnswerCount(WrongAnswerCount + 1)
                        setTotalAnswerCount(TotalAnswerCount + 1)
                      }}
                    >
                      <div>{item}</div>
                    </button>
                  ))}
                </CustomLink>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
