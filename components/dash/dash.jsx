/* eslint-disable prettier/prettier */
import { standService } from '@/lib/service'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Dash() {
  const { data: session, status } = useSession()
  const [questionResult, setquestionResult] = useState([])
  const [sum, setSum] = useState(0)
  // console.log(session, status)
  const token = session.dynamoToken

  useEffect(() => {
    if (status === 'authenticated') {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dash-question-answer`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(function (response) {
          setquestionResult(response.data)
          const correct = parseInt(response.data.correct_answer)
          const incorrect = parseInt(response.data.incorrect_answer)
          setSum(correct + incorrect)
        })
        .catch(function (error) {
          // handle error
        })
        .then(function () {
          // always executed
        })
    }
  }, [])

  return (
    <div>
      {status === 'authenticated' && (
        <div>
          <h1 className="font-black text-4xl mb-2">Selamat Datang!</h1>
          <h2 className="font-bold text-lg">{session.user.name}</h2>
          <h2 className="font-bold text-lg">Menjawab Pertanyaan Artikel</h2>
          <h2 className="font-bold text-lg">Total : {sum} Kali</h2>
          <h2 className="font-bold text-lg">Benar : {questionResult.correct_answer}</h2>
          <h2 className="font-bold text-lg">Salah : {questionResult.incorrect_answer}</h2>
        </div>
      )}
    </div>
  )
}
