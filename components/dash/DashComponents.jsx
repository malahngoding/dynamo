/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import { useState } from 'react'
import { CircleButtonNextChevron } from '@/components/backup/components/base-component-a/circlebutton'
import { Tags } from '@/components/backup/components/base-component-a/tags'
import { useState } from 'react'

export function FormDash(props) {
  const { var_Tes } = props
  const [var_BackButton, setBackButton] = useState('')

  const handleClick = () => {
    if (var_BackButton === 'visible') {
      alert('sip')
      // setBackButton('hidden')
    } else {
      // setBackButton('hidden')
      alert('bad')
    }
  }
  return (
    <div
      className={`lg:flex lg:flex-col lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/4 lg:h-full bg-white border-2 border-black z-10 ${var_BackButton}`}
    >
      <div className={`m-6`} onClick={handleClick}>
        <CircleButtonNextChevron
          width="w-[45px] lg:w-[50px]"
          height="h-[45px] lg:h-[50px]"
          color="bg-white"
          border="border-2 border-black"
          rounded="rounded-full"
        />
      </div>
      <div className="ml-6 mb-2 text-xl font-medium">
        <p>Welcome</p>
      </div>
      <div className="ml-6 text-2xl font-extrabold">
        <p>Denny Rismanto</p>
      </div>

      <div className="lg:absolute lg:inset-x-0 lg:bottom-0">
        <div className="flex flex-col justify-center items-center w-full h-[100px] bg-black-100 ">
          <div className="w-full h-[2px] bg-black mb-2"></div>
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center mr-10">
              <div className="mb-2">
                <Tags
                  width="w-[45px]"
                  height="h-[45px]"
                  color="bg-blue"
                  border="border-2 border-black"
                  rounded="rounded-full"
                />
              </div>
              <p>Profile</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="mb-2">
                <Tags
                  width="w-[45px]"
                  height="h-[45px]"
                  color="bg-white"
                  border="border-2 border-black"
                  rounded="rounded-lg"
                />
              </div>
              <p>Dash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
