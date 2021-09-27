/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { email } from '@/data/siteMetadata'
import CustomLink from '@/components/Link'

export const QuizDashboardPages = () => {
  const { data: session, status } = useSession()
  const [currentQuestionGroup, setCurrentQuestionGroup] = useState([])
  // GET CURRENT QUESTION GROUP
  useEffect(() => {
    // Ini yang akan dilakukan diambil dari stand
    if (status === 'authenticated') {
      axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/quiz-group-name/`, {
          email: session.user.email,
        })
        .then(function (response) {
          // handle success
          console.log(response.data[0])
          // setCurrentQuestionGroupLength(response.data[0].length)
          setCurrentQuestionGroup(response.data[0])
          // console.log(setCurrentQuestionGroup)
          // setCurrentQuestionGroup()
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
    }

    // Ini yang akan dilakukan
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])
  return (
    <>
      <div className=" flex flex-col border-4 border-black bg-white rounded-3xl m-5 w-[375px]">
        {currentQuestionGroup ? (
          <CustomLink href={`/study/flash-card/question?id=${currentQuestionGroup.QuizGroup}`}>
            <div className="flex flex-row border-4 border-yellow-100 mx-5 bg-yellow-100 m-6 rounded-3xl">
              <div className="flex flex-1">
                <div className="flex flex-col justify-center">
                  <div className="ml-3 mt-3">Lanjutkan Quizmu</div>
                  <div className="mt-1 ml-3 mb-3 font-bold ">{currentQuestionGroup.groupname}</div>
                </div>
              </div>
              <div className="flex rounded-full h-12 w-12 items-center justify-center bg-orange border-b-4 border-l-4 border-t-4 border-yellow m-5 mr-8"></div>
            </div>
          </CustomLink>
        ) : (
          <div className="flex flex-row border-4 border-yellow-100 mx-5 bg-yellow-100 m-6 rounded-3xl">
            <div className="flex flex-1">
              <div className="flex flex-col justify-center">
                <div className="ml-3 mt-3">Quizmu Telah</div>
                <div className="mt-1 ml-3 mb-3 font-bold ">Selesai</div>
              </div>
            </div>
            <div className="flex rounded-full h-12 w-12 items-center justify-center bg-orange border-b-4 border-l-4 border-t-4 border-yellow m-5 mr-8"></div>
          </div>
        )}

        <div className="flex flex-row mt-0 border-4 border-green mx-5 bg-green m-6 rounded-3xl">
          <div className="flex flex-1">
            <div className="flex flex-col justify-center">
              <div className="ml-3 mt-3">Lanjutkan Kodemu</div>
              <div className="mt-1 ml-3 mb-3 font-bold ">Coming soon...</div>
            </div>
          </div>
          <div className="flex rounded-full h-12 w-12 items-center justify-center bg-green border-b-4 border-l-4 border-t-4 border-yellow m-5 mr-8"></div>
        </div>

        <div className="flex flex-col border-4 border-purple-400 mx-5 bg-purple-400 rounded-lg">
          <div className="text-white ml-5 mt-2">Progressmu</div>
          <div className="text-black font-bold ml-5">50 point lagi untuk naik ke level 5</div>
          <div>
            <img className="flex mt-4" src="https://i.postimg.cc/xdQjgjds/4.png" alt="" />
          </div>
        </div>
        <div className="flex flex-row border-4 border-white bg-white mx-5 mt-5 ">
          <p className="font-bold uppercase">Peringkat di level 5</p>
        </div>
        <div className="flex flex-row border-4 border-white bg-white mx-5 mt-5">
          <div className="flex mx-5 my-5 font-bold text-black"></div>
          <div className="flex  justify center mt-3">
            <img
              className="flex rounded-full h-10 w-10"
              src="https://i.postimg.cc/PJckkCxW/3.png"
              alt=""
            />
          </div>
          <div className="flex flex-1  mx-5 mt-2">
            <div className="flex flex-col">
              <div className="text-black font-bold">Sulthan Taqi Rabbani</div>
              <div>2000 points</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row border-4 border-white bg-white mx-5 mt-5">
          <div className="flex mx-5 my-5 font-bold text-black"></div>
          <div className="flex  justify center mt-3">
            <img
              className="flex rounded-full h-10 w-10"
              src="https://i.postimg.cc/PJckkCxW/3.png"
              alt=""
            />
          </div>
          <div className="flex flex-1  mx-5 mt-2 mb-5">
            <div className="flex flex-col">
              <div className="text-black font-bold">Pablo Escobar</div>
              <div>1000 points</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
