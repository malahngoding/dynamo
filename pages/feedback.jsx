import { PrimaryButton } from '@/components/design/button'
import { useSession } from 'next-auth/react'
import { standService } from '@/lib/service'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Feedback() {
  const { data: session, status } = useSession()
  const [feedback, setFeedback] = useState('')
  const router = useRouter()

  const handleClick = () => {
    if (status === 'authenticated') {
      standService
        .post(
          `/api/post-feedback`,
          { message: feedback },
          {
            headers: {
              Authorization: `Bearer ${session.dynamoToken}`,
            },
          }
        )
        .then(function (response) {
          // handle success
          console.log(response.data)
          if (response.data.success === false) {
            alert(response.data.message[0])
          } else {
            router.push('/')
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
        <div className="mb-6">
          <textarea
            className="border-2 border-black rounded-lg text-sm font-bold text-left w-[300px] h-[139px] break-words"
            type="textarea"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Alasan kamu malahngoding?"
          />
        </div>
        <PrimaryButton onClick={() => handleClick()} className="border mx-2 p-2">
          Submit
        </PrimaryButton>
      </div>
    </div>
  )
}
