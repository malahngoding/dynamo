export function Spacing(props) {
  const { width = 'w-32px', height = 'h-32px', color = 'bg-black' } = props
  return (
    <div>
      <button className={`border border-red ${color} ${width} ${height}`}></button>
    </div>
  )
}
