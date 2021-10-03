/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { standService } from '@/lib/service'

export const CommentPost = (props) => {
  const [inputValue, setinputValue] = useState('')
  const { data: session, status } = useSession()

  const handleInput = (event) => {
    setinputValue(event.target.value)
  }

  const handlePostClick = () => {
    standService
      .post(
        `/api/comment-for-article`,
        { url: props.url[0], text: inputValue, name: session.user.name, image: session.user.image },
        {
          headers: {
            Authorization: `Bearer ${session.dynamoToken}`,
          },
        }
      )
      .then(function (response) {
        console.log(response)
        window.location.reload()
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }
  return (
    <div className="flex justify-center items-center my-10">
      <div className="flex flex-row justify-center items-center">
        <div className="flex items-center justify-center shadow-lg mx-8 mb-4 max-w-lg">
          <div className="w-screen bg-white rounded-lg px-4 pt-2">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-full px-3 mb-2 mt-2"></div>
              <textarea
                onChange={() => handleInput(event)}
                className="m-5 bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                required
              ></textarea>
            </div>
            <div className="w-full md:w-full flex items-start px-3">
              <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                <p className="text-xs md:text-sm pt-px"></p>
              </div>
              <div className="mb-5">
                <button
                  onClick={() => handlePostClick()}
                  className="bg-green-500 text-white font-extrabold py-1 px-4 rounded-lg tracking-wide mr-1"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const CommentList = (props) => {
  const [commentValue, setCommentValue] = useState([])
  const { data: session, status } = useSession()

  useEffect(() => {
    standService
      .post(`/api/get-comment-for-article`, { url: props.url[0] })
      .then(function (response) {
        console.log(response.data)
        setCommentValue(response.data)
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])
  return (
    <>
      <div>
        <p className="text-center text-2xl font-extrabold">Komentar</p>
        {commentValue.map((d) => (
          <div key={d.id}>
            <div className="flex flex-row border-2 border-white justify-center items-center min-w-screen">
              <img
                src={`https://avatars.dicebear.com/api/miniavs/${d.users_name}.svg`}
                height={50}
                width={50}
                alt={d.users_name}
              />
              <div className="flex flex-col border-2 border-white mt-2">
                <p className="font font-extrabold text-black">{d.text}</p>
                <p className="font font-bold text-black-400 text-sm">
                  By {d.users_name} {d.created_at}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
