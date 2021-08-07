export function Tags(props) {
  const { tittle, width, height, border, rounded, color = 'bg-black', color_img = 'black' } = props
  return (
    <div>
      <button
        className={`flex flex-row ${border} ${rounded} ${width} ${height} shadow-xl ${color} justify-center items-center`}
      >
        <div className="py-2">{tittle}</div>
      </button>
    </div>
  )
}

export function TagsCross(props) {
  const { tittle, width, height, border, rounded, color = 'bg-black', color_img = 'black' } = props
  return (
    <div>
      <button
        className={`flex flex-row ${border} ${rounded} ${width} ${height} shadow-xl ${color} justify-center`}
      >
        <div className="m-1">{tittle}</div>
        <div className="m-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12"
              stroke="#18191F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 4L12 12"
              stroke="#18191F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  )
}
