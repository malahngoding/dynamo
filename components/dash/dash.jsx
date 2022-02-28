/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { standService } from '@/lib/service'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useBadgeDetail } from '@/modules/dash-nav.store'
import { CircleX } from 'tabler-icons-react'
import { MediaBadge } from './media-badge'

export default function Dash() {
  const { data: session, status } = useSession()
  const [sum, setSum] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const token = session.dynamoToken
  const shown = useBadgeDetail((state) => state.shown)
  const toggleBadgeDetail = useBadgeDetail((state) => state.toggleBadgeDetail)

  useEffect(() => {
    if (status === 'authenticated') {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dash-question-answer`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(function (response) {
          setSum(response.data.length)
        })
        .catch(function (error) {
          // handle error
        })
        .then(function () {
          // always executed
        })
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dash-question-correct`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(function (response) {
          setCorrect(response.data.length)
        })
        .catch(function (error) {
          // handle error
        })
        .then(function () {
          // always executed
        })
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dash-question-incorrect`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(function (response) {
          setIncorrect(response.data.length)
        })
        .catch(function (error) {
          // handle error
        })
        .then(function () {
          // always executed
        })
    }
  }, [status, session, token])

  return (
    <div>
      {status === 'authenticated' && (
        <>
          <div className="z-0">
            <h1 className="font-black text-4xl mb-2">Selamat Datang!</h1>
            <h2 className="font-bold text-lg uppercase">{session.user.name}</h2>
            <h2 className="font-bold text-lg">Menjawab Pertanyaan Artikel</h2>
            <h2 className="font-bold text-lg">Total : {sum} Kali</h2>
            <h2 className="font-bold text-lg">Benar : {correct}</h2>
            <h2 className="font-bold text-lg">Salah : {incorrect}</h2>
            <button
              onClick={() => {
                toggleBadgeDetail()
              }}
            >
              Badges
            </button>
            <BadgeDetail hidden={shown === false ? 'hidden' : 'block'} />
          </div>
        </>
      )}
    </div>
  )
}

const BadgeDetail = () => {
  const { data: session, status } = useSession()
  const [dataDetail, setDataDetail] = useState(null)
  const tes = [{ tester: '/static/images/badge_one_year.png' }, { media: 'image' }]
  const shown = useBadgeDetail((state) => state.shown)
  const toggleBadgeDetail = useBadgeDetail((state) => state.toggleBadgeDetail)
  useEffect(() => {
    if (status === 'authenticated') {
      standService
        .post(
          `/api/get-badge-year-user`,
          {},
          {
            headers: {
              Authorization: `Bearer ${session.dynamoToken}`,
            },
          }
        )
        .then(function (response) {
          setDataDetail(response.data)
        })
        .catch(function (error) {
          // handle error
        })
    }
  }, [session])
  return (
    <div
      className={`absolute inset-x-0 top-0 w-full h-screen bg-black-400 opacity-90 my-20 overflow-y-auto ${
        shown === false ? 'hidden' : 'block'
      }`}
    >
      <div className="flex justify-end items-end">
        <button
          className="rounded-full m-2"
          onClick={() => {
            toggleBadgeDetail()
          }}
        >
          <CircleX className="w-[40px] h-[40px]" />
        </button>
      </div>
      <div className="flex justify-center items-center">
        {dataDetail === null ? <p>Loading</p> : <MediaBadge data={dataDetail} />}
      </div>
      <div className="flex justify-center items-center">
        {dataDetail === null ? (
          <p className="uppercase font-bold text-base opacity-100"></p>
        ) : (
          <p className="uppercase font-bold text-base opacity-100">{dataDetail[0].title}</p>
        )}
      </div>
      <div className="flex justify-center items-center opacity-100 mb-4">
        {dataDetail === null ? <p></p> : <p>{dataDetail[0].description}</p>}
      </div>
      <div className="flex justify-center items-center opacity-100 break-words text-center mx-6 ">
        <p>{'Users have joined for 1 year at malahngoding'}</p>
      </div>
    </div>
  )
}
