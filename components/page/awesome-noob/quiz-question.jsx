/* eslint-disable @next/next/link-passhref */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import Link from 'next/link'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import CustomLink from '@/components/Link'
import axios from 'axios'
import { useSession } from 'next-auth/client'

export const QuizQuestionPage = (props) => {
  // let correctAnswerCount = 0
  const [CorrectAnswerCount, setCorrectAnswerCount] = useState(0)
  const [CorrectScore, setCorrectScore] = useState(0)
  const [AvarageScore, setAvarageScore] = useState(0)
  const [AccuracyScore, setAccuracyScore] = useState(0)
  // let wrongAnswerCount = 0
  const [WrongAnswerCount, setWrongAnswerCount] = useState(0)
  const [TotalAnswerCount, setTotalAnswerCount] = useState(0)
  const [TotalScores, setTotalScore] = useState(0)
  const [TrueAnswer, setTrueAnswer] = useState('')
  const [Soal_dilewati, setSoal_dilewati] = useState(0)
  const [QuizGroup, setQuizGroup] = useState(0)
  const router = useRouter()
  console.log(router.query.id)
  const [session, loading] = useSession('')
  console.log(session.user.email)

  // const response = {
  //   correct_answer: TrueAnswer,
  //   wrong_answer: ['wrong answer 1', 'wrong answer 2', 'wrong answer 3'],
  // }
  let arrayWrongAnswer = []
  props.question.length === 0 ? (
    <>Loading</>
  ) : (
    props.question[props.currentPage - 1].incorrect_answer.map((item) => {
      arrayWrongAnswer.push({ isCorrect: false, question: item })
    })
  )
  console.log(arrayWrongAnswer)

  const arrayTrueAnswer = []
  props.question.length === 0 ? (
    <>Loading</>
  ) : (
    arrayTrueAnswer.push({
      isCorrect: true,
      question: props.question[props.currentPage - 1].correct_answer,
    })
  )
  console.log(arrayTrueAnswer)

  const arr = [...arrayWrongAnswer, ...arrayTrueAnswer]
  console.log(arr)

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  console.log(shuffleArray(arr))
  // const [session, loading] = useSession('')
  // console.log(session.user.email)

  const handleClickTrueAnswer = () => {
    setCorrectAnswerCount(CorrectAnswerCount + 1)
    setAccuracyScore(AccuracyScore + ((CorrectAnswerCount + 1) / (TotalAnswerCount + 1)) * 100)
    setAvarageScore(
      AvarageScore +
        (CorrectScore + props.question[props.currentPage - 1].score) / (TotalAnswerCount + 1)
    )
    setCorrectScore(CorrectScore + props.question[props.currentPage - 1].score)
    setTotalAnswerCount(TotalAnswerCount + 1)
    setTotalScore(
      parseInt(props.totalscore) + CorrectScore + props.question[props.currentPage - 1].score
    )
    setQuizGroup(parseInt(router.query.id) + 1)

    axios
      .post(`http://127.0.0.1:8080/api/post-result`, {
        email: session.user.email,
        nilai: CorrectScore + props.question[props.currentPage - 1].score,
        jawaban_benar: CorrectAnswerCount + 1,
        akurasi: AccuracyScore + ((CorrectAnswerCount + 1) / (TotalAnswerCount + 1)) * 100,

        rata_rata:
          AvarageScore +
          (CorrectScore + props.question[props.currentPage - 1].score) / (TotalAnswerCount + 1),
        TotalScore:
          parseInt(props.totalscore) + CorrectScore + props.question[props.currentPage - 1].score,
        soal_dilewati: Soal_dilewati,
        QuizGroup: parseInt(router.query.id) + 1,
      })
      .then(function (response) {
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }
  const handleClickFalseAnswer = () => {
    setWrongAnswerCount(WrongAnswerCount + 1)
    setSoal_dilewati(Soal_dilewati)
    setTotalAnswerCount(TotalAnswerCount + 1)
    setCorrectAnswerCount(CorrectAnswerCount)
    setAccuracyScore(AccuracyScore + (CorrectAnswerCount / (TotalAnswerCount + 1)) * 100)
    setAvarageScore(
      AvarageScore +
        (CorrectScore + props.question[props.currentPage - 1].score) / (TotalAnswerCount + 1)
    )
    setCorrectScore(CorrectScore + props.question[props.currentPage - 1].score)
    setTotalScore(
      parseInt(props.totalscore) + CorrectScore + props.question[props.currentPage - 1].score
    )
    setQuizGroup(parseInt(router.query.id) + 1)

    axios
      .post(`http://127.0.0.1:8080/api/post-result`, {
        email: session.user.email,
        nilai: CorrectScore,
        jawaban_benar: CorrectAnswerCount,
        akurasi: AccuracyScore + (CorrectAnswerCount / (TotalAnswerCount + 1)) * 100,

        rata_rata: AvarageScore + CorrectScore / (TotalAnswerCount + 1),
        TotalScore: parseInt(props.totalscore) + CorrectScore,
        soal_dilewati: Soal_dilewati,
        QuizGroup: parseInt(router.query.id) + 1,
      })
      .then(function (response) {
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }

  return (
    <>
      {props.question.length === 0 ? (
        <>Loading</>
      ) : (
        <div>
          <div className="flex flex-row justify-center items-center border-4 border-black-400 h-[75px] bg-black-400 rounded-t-lg mx-5">
            <div className="flex flex-1 justify-center items-center font-bold"></div>
            <div className="flex flex-1 pr-6 justify-center items-center font-bold">
              {props.question[props.currentPage - 1].groupname}
            </div>
            <div className="flex flex-1 justify-center items-end">
              {props.currentPage !== props.totalPage ? (
                <button
                  className="border-2 bg-black-800 p-2 rounded-lg  text-white"
                  onClick={() => {
                    props.setCurrentPage(props.currentPage + 1)
                    setSoal_dilewati(Soal_dilewati + 1)
                    setTotalAnswerCount(TotalAnswerCount + 1)
                  }}
                >
                  <p>SKIP</p>
                </button>
              ) : (
                <CustomLink href={`/study/flash-card/result`}>
                  <button
                    className="border-2 bg-black-800 p-2 rounded-lg  text-white"
                    onClick={() => {
                      setSoal_dilewati(Soal_dilewati + 1)
                      setTotalAnswerCount(TotalAnswerCount + 1)
                      setCorrectAnswerCount(CorrectAnswerCount)
                      setAccuracyScore(
                        AccuracyScore + (CorrectAnswerCount / (TotalAnswerCount + 1)) * 100
                      )
                      setAvarageScore(
                        AvarageScore +
                          (CorrectScore + props.question[props.currentPage - 1].score) /
                            (TotalAnswerCount + 1)
                      )
                      setCorrectScore(CorrectScore + props.question[props.currentPage - 1].score)
                      setTotalScore(
                        parseInt(props.totalscore) +
                          CorrectScore +
                          props.question[props.currentPage - 1].score
                      )
                      setQuizGroup(parseInt(router.query.id) + 1)

                      axios
                        .post(`http://127.0.0.1:8080/api/post-result`, {
                          email: session.user.email,
                          nilai: CorrectScore,
                          jawaban_benar: CorrectAnswerCount,
                          akurasi:
                            AccuracyScore + (CorrectAnswerCount / (TotalAnswerCount + 1)) * 100,

                          rata_rata: AvarageScore + CorrectScore / (TotalAnswerCount + 1),
                          TotalScore: parseInt(props.totalscore) + CorrectScore,
                          soal_dilewati: Soal_dilewati + 1,
                          QuizGroup: parseInt(router.query.id) + 1,
                        })
                        .then(function (response) {
                          // handle success
                        })
                        .catch(function (error) {
                          // handle error
                          console.log(error)
                        })
                        .then(function () {
                          // always executed
                        })
                    }}
                  >
                    <p>SKIP</p>
                  </button>
                </CustomLink>
              )}
            </div>
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
              Nilai {props.question[props.currentPage - 1].score} Point
            </div>
            <div className="text-center mx-4 my-4">
              {props.question[props.currentPage - 1].question}
            </div>

            <div className="flex flex-col justify-start items-center">
              {props.currentPage !== props.totalPage
                ? arr.map((item, index) => (
                    <button
                      key={index}
                      className="flex mx-2 py-2 px-3 rounded-xl mb-4 md:mx-2 md:py-3 md:px-4 flex-row border-2 md:rounded-full border-blue bg-blue text-purple-100"
                      onClick={() => {
                        if (item.isCorrect === true) {
                          props.setCurrentPage(props.currentPage + 1)
                          setCorrectScore(
                            CorrectScore + props.question[props.currentPage - 1].score
                          )
                          setCorrectAnswerCount(CorrectAnswerCount + 1)
                          setTotalAnswerCount(TotalAnswerCount + 1)
                        } else {
                          props.setCurrentPage(props.currentPage + 1)
                          setWrongAnswerCount(WrongAnswerCount + 1)
                          setTotalAnswerCount(TotalAnswerCount + 1)
                        }
                      }}
                    >
                      {item.question}
                    </button>
                  ))
                : arr.map((item, index) => (
                    <CustomLink href={`/study/flash-card/result`} key={index}>
                      <button
                        className="flex mx-2 py-2 px-3 rounded-xl mb-4 md:mx-2 md:py-3 md:px-4 flex-row border-2 md:rounded-full border-blue bg-blue text-purple-100"
                        onClick={() => {
                          if (item.isCorrect === true) {
                            handleClickTrueAnswer()
                            console.log('benar')
                          } else {
                            handleClickFalseAnswer()
                            console.log('salah')
                          }
                        }}
                      >
                        {item.question}
                      </button>
                    </CustomLink>
                  ))}
              {/* {props.currentPage !== props.totalPage ? (
                <button
                  className="flex mx-2 py-2 px-3 rounded-xl mb-4 md:mx-2 md:py-3 md:px-4 flex-row border-2 md:rounded-full border-blue bg-blue text-purple-100"
                  onClick={() => {
                    props.setCurrentPage(props.currentPage + 1)
                    setCorrectScore(CorrectScore + props.question[props.currentPage - 1].score)
                    setCorrectAnswerCount(CorrectAnswerCount + 1)
                    setTotalAnswerCount(TotalAnswerCount + 1)
                  }}
                >
                  <div>{props.question[props.currentPage - 1].correct_answer}</div>
                </button>
              ) : (
                <CustomLink
                  href={`/study/flash-card/result?id=1&total_correct=${
                    CorrectAnswerCount + 1
                  }&total_incorrect=${WrongAnswerCount}&total_question=${
                    TotalAnswerCount + 1
                  }&score=${CorrectScore + props.question[props.currentPage - 1].score}&akurasi=${
                    AccuracyScore + ((CorrectAnswerCount + 1) / (TotalAnswerCount + 1)) * 100
                  }&rata-rata_nilai=${
                    AvarageScore +
                    (CorrectScore + props.question[props.currentPage - 1].score) /
                      (TotalAnswerCount + 1)
                  }&totalnilai=${
                    parseInt(props.totalscore) +
                    CorrectScore +
                    props.question[props.currentPage - 1].score
                  }`}
                >
                  <button
                    className="flex mx-2 py-2 px-3 rounded-xl mb-4 md:mx-2 md:py-3 md:px-4 flex-row border-2 md:rounded-full border-blue bg-blue text-purple-100"
                    onClick={() => {
                      setCorrectAnswerCount(CorrectAnswerCount + 1)
                      setAccuracyScore(
                        AccuracyScore + ((CorrectAnswerCount + 1) / (TotalAnswerCount + 1)) * 100
                      )
                      setAvarageScore(
                        AvarageScore +
                          (CorrectScore + props.question[props.currentPage - 1].score) /
                            (TotalAnswerCount + 1)
                      )
                      setCorrectScore(CorrectScore + props.question[props.currentPage - 1].score)
                      setTotalAnswerCount(TotalAnswerCount + 1)
                      setTotalScore(
                        parseInt(props.totalscore) +
                          CorrectScore +
                          props.question[props.currentPage - 1].score
                      )

                      axios
                        .post(`http://127.0.0.1:8080/api/post-result`, {
                          email: session.user.email,
                          nilai: CorrectScore + props.question[props.currentPage - 1].score,
                          jawaban_benar: CorrectAnswerCount + 1,
                          akurasi:
                            AccuracyScore +
                            ((CorrectAnswerCount + 1) / (TotalAnswerCount + 1)) * 100,

                          rata_rata:
                            AvarageScore +
                            (CorrectScore + props.question[props.currentPage - 1].score) /
                              (TotalAnswerCount + 1),
                          TotalScore:
                            parseInt(props.totalscore) +
                            CorrectScore +
                            props.question[props.currentPage - 1].score,
                          soal_dilewati: Soal_dilewati,
                        })
                        .then(function (response) {
                          // handle success
                        })
                        .catch(function (error) {
                          // handle error
                          console.log(error)
                        })
                        .then(function () {
                          // always executed
                        })
                    }}
                  >
                    <div>{props.question[props.currentPage - 1].correct_answer}</div>
                  </button>
                </CustomLink>
              )}
              {props.currentPage !== props.totalPage ? (
                props.question[props.currentPage - 1].incorrect_answer.map((item, index) => (
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
                  {props.question[props.currentPage - 1].incorrect_answer.map((item, index) => (
                    <button
                      key={index}
                      className="flex mx-2 py-2 px-3 rounded-xl mb-4 md:mx-2 md:py-3 md:px-4 flex-row border-2 md:rounded-full border-blue bg-blue text-purple-100"
                      onClick={() => {
                        // props.setCurrentPage(props.currentPage + 1)
                        setWrongAnswerCount(WrongAnswerCount + 1)
                        setSoal_dilewati(Soal_dilewati)
                        setTotalAnswerCount(TotalAnswerCount + 1)
                        setCorrectAnswerCount(CorrectAnswerCount)
                        setAccuracyScore(
                          AccuracyScore + (CorrectAnswerCount / (TotalAnswerCount + 1)) * 100
                        )
                        setAvarageScore(
                          AvarageScore +
                            (CorrectScore + props.question[props.currentPage - 1].score) /
                              (TotalAnswerCount + 1)
                        )
                        setCorrectScore(CorrectScore + props.question[props.currentPage - 1].score)
                        setTotalScore(
                          parseInt(props.totalscore) +
                            CorrectScore +
                            props.question[props.currentPage - 1].score
                        )

                        axios
                          .post(`http://127.0.0.1:8080/api/post-result`, {
                            email: session.user.email,
                            nilai: CorrectScore,
                            jawaban_benar: CorrectAnswerCount,
                            akurasi:
                              AccuracyScore + (CorrectAnswerCount / (TotalAnswerCount + 1)) * 100,

                            rata_rata: AvarageScore + CorrectScore / (TotalAnswerCount + 1),
                            TotalScore: parseInt(props.totalscore) + CorrectScore,
                            soal_dilewati: Soal_dilewati,
                          })
                          .then(function (response) {
                            // handle success
                          })
                          .catch(function (error) {
                            // handle error
                            console.log(error)
                          })
                          .then(function () {
                            // always executed
                          })
                      }}
                    >
                      <div>{item}</div>
                    </button>
                  ))}
                </CustomLink>
              )} */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
