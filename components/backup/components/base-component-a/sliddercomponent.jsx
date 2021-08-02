import { useState } from 'react'

export function Slidder(props) {
  const [activeSlidder, setActiveSlidder] = useState(1)

  const { width, height, color1 = 'bg-black', color2 = 'bg-black', color3 = 'bg-black' } = props
  return (
    <div>
      <div className="pr-24 justify-items-center">
        <div className="pr-1 inline-block radio">
          <button
            className={`${width} ${height} border ${
              activeSlidder === 1 ? 'bg-red' : '#EEEFF4'
            }  rounded-full`}
            onClick={() => setActiveSlidder(1)}
          ></button>
        </div>
        <div className="pr-1 inline-block radio">
          <button
            className={`${width} ${height} border ${
              activeSlidder === 2 ? 'bg-red' : '#EEEFF4'
            }  rounded-full`}
            onClick={() => setActiveSlidder(2)}
          ></button>
        </div>
        <div className="inline-block radio">
          <button
            className={`${width} ${height} border ${
              activeSlidder === 3 ? 'bg-red' : '#EEEFF4'
            } rounded-full`}
            onClick={() => setActiveSlidder(3)}
          ></button>
        </div>
      </div>
    </div>
  )
}
