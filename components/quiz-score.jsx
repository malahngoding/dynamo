/* eslint-disable @next/next/link-passhref */
/* eslint-disable prettier/prettier */
import CustomLink from '@/components/Link'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/client'
import { email } from '@/data/siteMetadata'
import { useRouter } from 'next/router'
export const QuizResultPages = (props) => {
  const [session, loading] = useSession()
  const [result, setResult] = useState([])
  const [updatequizgroup, setUpdateQuizGroup] = useState(0)
  const router = useRouter()
  // useEffect(() => {
  //   // Ini yang akan dilakukan
  //   if (!loading) {
  //     axios
  //       // ${router.query.id}
  //       .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/quiz-result/${session.user.email}`)
  //       .then(function (response) {
  //         // handle success
  //         console.log(response.data[0])
  //         setResult(response.data[0])
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error)
  //         console.log('mantap')
  //       })
  //       .then(function () {
  //         // always executed
  //       })
  //   }
  //   // Ini yang akan dilakukan
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loading])

  return (
    <div>
      <div className="flex flex-col border-4 border-purple-400 rounded-xl m-5 bg-white overflow-y-auto">
        <div className="flex flex-col border-4 border-purple-400 bg-purple-400 rounded-xl m-3">
          <div className="flex mx-24 my-8 justify-center rounded-full py-3 px-4 flex-row border-2 border-white bg-white text-purple font-bold">
            Quiz Selesai
          </div>
          <div className="flex justify-center font-bold text-purple-100">
            Kamu Mendapatkan Nilai
          </div>
          <div className="rounded-full h-24 w-24 mx-32 my-8 flex items-center justify-center bg-white border-4 border-black">
            <div className="flex flex-col text-center">
              <p className="text-center font-bold text-2xl">{props.score.nilai}</p>
              <p>Points</p>
            </div>
          </div>
          <div>
            <p className="text-center font-bold text-purple-100 mb-8">
              Total point kamu {props.score.totalscore}
            </p>
          </div>
        </div>
        <div className="flex flex-row border-4 border-white m-3">
          <div className="flex flex-1 ml-5">
            <div className="flex flex-col">
              <p className="text-gray font-bold justify-center">Jawaban Benar</p>
              <p className="text-black text-2xl font-bold">{props.score.jawaban_benar} Soal</p>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="flex flex-col justify-start">
              <p className="text-gray font-bold">Rata-rata point</p>
              <p className="text-black text-2xl font-bold">{props.score.rata_rata}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row border-4 border-white m-3">
          <div className="flex flex-1">
            <div className="flex flex-col ml-5">
              <p className="text-gray font-bold justify-center">Akurasi</p>
              <p className="text-black text-2xl font-bold">{props.score.akurasi}</p>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="flex flex-col justify-start ml-2">
              <p className="text-gray font-bold">Soal dilewati</p>
              <p className="text-black text-2xl font-bold">{props.score.soal_dilewati}</p>
            </div>
          </div>
        </div>
        <CustomLink href="/study/flash-card">
          <div className="flex mx-24 my-8 justify-center rounded-full py-3 px-4 flex-row border-2 border-purple-400 bg-white text-black font-bold">
            Selesai
          </div>
        </CustomLink>
      </div>
    </div>
  )
}
