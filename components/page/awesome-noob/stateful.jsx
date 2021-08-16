import axios from 'axios'
import { useEffect, useState } from 'react'

export const QuestionCard = (props) => {
  let correctAnswerCount = 0
  let wrongAnserCount = 0
  const [question, setQuestion] = useState([])
  useEffect(() => {
    // Ini yang akan dilakukan
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(function (response) {
        // handle success
        setQuestion(response.data.results)
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
        <div className="m-4 h-[512px] w-[512px] border-black border-2">
          Pertanyaan ke - {props.currentPage} <br />
          {question[props.currentPage - 1].category} <br />
          <p className="text-xs">{question[props.currentPage - 1].question} </p>
          <div>
            <button
              className="border-black border-2 m-4 p-2"
              onClick={() => {
                correctAnswerCount++
              }}
            >
              {question[props.currentPage - 1].correct_answer}
            </button>
            {question[props.currentPage - 1].incorrect_answers.map((item, index) => (
              <button
                key={index}
                className="border-black border-2 m-4 p-2"
                onClick={() => {
                  wrongAnserCount++
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export const QuestionPagination = (props) => {
  const { currentPage, setCurrentPage, totalPage } = props
  return (
    <div>
      {currentPage !== 1 ? (
        <button
          className="border-black border-2 m-4 p-2"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Kembali
        </button>
      ) : (
        <></>
      )}

      {currentPage !== totalPage ? (
        <button
          className="border-black border-2 m-4 p-2"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Lanjut
        </button>
      ) : (
        <></>
      )}
    </div>
  )
}
