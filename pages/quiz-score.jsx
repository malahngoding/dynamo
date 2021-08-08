/* eslint-disable @next/next/link-passhref */
/* eslint-disable prettier/prettier */
import Link from 'next/link'

export default function quizQuestionPage() {
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
              <p className="text-center font-bold text-2xl">20</p>
              <p>Points</p>
            </div>
          </div>
          <div>
            <p className="text-center font-bold text-purple-100 mb-8">Total point kamu 900</p>
          </div>
        </div>
        <div className="flex flex-row border-4 border-white m-3">
          <div className="flex flex-1 ml-5">
            <div className="flex flex-col">
              <p className="text-gray font-bold justify-center">Jawaban Benar</p>
              <p className="text-black text-2xl font-bold"> 2 Soal</p>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="flex flex-col justify-start">
              <p className="text-gray font-bold">Rata-rata point</p>
              <p className="text-black text-2xl font-bold">20</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row border-4 border-white m-3">
          <div className="flex flex-1">
            <div className="flex flex-col ml-5">
              <p className="text-gray font-bold justify-center">Akurasi</p>
              <p className="text-black text-2xl font-bold">32%</p>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="flex flex-col justify-start ml-2">
              <p className="text-gray font-bold">Soal dilewati</p>
              <p className="text-black text-2xl font-bold">1</p>
            </div>
          </div>
        </div>
        <Link href="/quiz-dashboard">
          <button className="flex mx-24 my-8 justify-center rounded-full py-3 px-4 flex-row border-2 border-purple-400 bg-white text-black font-bold">
            Selesai
          </button>
        </Link>
      </div>
    </div>
  )
}
