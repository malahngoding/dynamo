import { PrimaryButton } from '@/components/design/button'
import { useSession } from 'next-auth/react'
import { standService } from '@/lib/service'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import debounce from 'lodash/debounce'

export default function Feedback() {
  const { data: session, status } = useSession()
  const [feedback, setFeedback] = useState('')
  const [username, setUsername] = useState('')
  const [validation, setValidation] = useState('')
  const router = useRouter()
  console.log(session.dynamoToken)

  const handleChange = (e) => {
    const { value } = e.target
    setUsername(value)
    usernamevalidation(value)
  }
  const usernamevalidation = useCallback(
    debounce((value) => {
      if (status === 'authenticated') {
        standService
          .post(
            `/api/check-username`,
            { username: value },
            {
              headers: {
                Authorization: `Bearer ${session.dynamoToken}`,
              },
            }
          )
          .then(function (response) {
            setValidation(response.data)
            console.log(response.data)
          })
      }
    }, 500),
    []
  )
  const handleClick = () => {
    if (status === 'authenticated' && validation === 'Username bisa dipakai') {
      standService
        .post(
          `/api/post-feedback`,
          {
            message: feedback,
            username: username,
          },
          {
            headers: {
              Authorization: `Bearer ${session.dynamoToken}`,
            },
          }
        )
        .then(function (response) {
          // handle success
          if (response.data.success === false) {
            alert(response.data.message[0])
          } else {
            standService
              .post(
                `/api/awsm-noob-data`,
                {
                  level: 0,
                  steps: 0,
                },
                {
                  headers: {
                    Authorization: `Bearer ${session.dynamoToken}`,
                  },
                }
              )
              .then(function (response) {
                if (response.data.success === false) {
                  alert(response.data.message[0])
                } else {
                  router.push('/')
                }
              })
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="mb-6 flex flex-col">
          <textarea
            onChange={handleChange}
            value={username}
            className="border-2 border-black rounded-lg text-sm font-bold text-left w-[300px] h-[50px] break-words"
            type="textarea"
            placeholder="Masukkan username kamu"
          />
          <p className="mb-5 mt-1">{validation}</p>
          <textarea
            className="border-2 border-black rounded-lg text-sm font-bold text-left w-[300px] h-[139px] break-words"
            type="textarea"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Alasan kamu malahngoding?"
          />
        </div>
        {validation === 'Username bisa dipakai' ? (
          <PrimaryButton
            onClick={() => handleClick()}
            className="visible border mx-2 p-2 bg-green-200"
          >
            Submit
          </PrimaryButton>
        ) : (
          <PrimaryButton className="border mx-2 p-2 bg-red">Periksa Kembali</PrimaryButton>
        )}
      </div>
    </div>
  )
}
