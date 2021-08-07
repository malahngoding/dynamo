export function CircleButtonNext(props) {
  const { width, height, border, rounded, color = 'bg-black' } = props
  return (
    <div>
      <button
        className={`flex flex-row ${border} ${rounded} ${width} ${height} shadow-xl ${color} justify-center`}
      >
        <svg className="m-3" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.16683 14H27.8335"
            stroke="#18191F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.6668 22.1667L27.8335 14L19.6668 5.83337"
            stroke="#18191F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
export function CircleButtonBack(props) {
  const { width, height, border, rounded, color = 'bg-black', color_img = 'black' } = props
  return (
    <div>
      <button
        className={`flex flex-row ${border} ${rounded} ${width} ${height} shadow-xl ${color} justify-center`}
      >
        <svg className="m-3" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.8332 14H2.1665"
            stroke={`${color_img}`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.3332 22.1666L2.1665 14L10.3332 5.83331"
            stroke={`${color_img}`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export function CircleButtonChevron(props) {
  const { width, height, border, rounded, color = 'bg-black', color_img = 'black' } = props
  return (
    <div>
      <button
        className={`flex flex-row ${border} ${rounded} ${width} ${height} shadow-xl ${color} justify-center`}
      >
        <svg className="m-2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.6665 24L10.6665 16L18.6665 8"
            stroke={`${color_img}`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
export function CircleButtonNextChevron(props) {
  const { width, height, border, rounded, color = 'bg-black', color_img = 'black' } = props
  return (
    <div>
      <button
        className={`flex flex-row ${border} ${rounded} ${width} ${height} shadow-xl ${color} justify-center`}
      >
        <svg className="m-2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.3333 8L21.3333 16L13.3333 24"
            stroke="#18191F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
export function CircleButtonClose(props) {
  const { width, height, border, rounded, color = 'bg-black', color_img = 'black' } = props
  return (
    <div>
      <button
        className={`flex flex-row ${border} ${rounded} ${width} ${height} shadow-xl ${color} justify-center`}
      >
        <svg className="m-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 5L5 15"
            stroke={`${color_img}`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 5L15 15"
            stroke={`${color_img}`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
