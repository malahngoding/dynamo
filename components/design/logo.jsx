export const LogoMalahNgoding = (props) => {
  const { size = 1 } = props
  const handleWidth = (size) => {
    return size * 58
  }
  const handleHeight = (size) => {
    return size * 38
  }
  return (
    <div
      className="border-[1px] dark:border-white"
      style={{
        width: handleWidth(size),
        height: handleHeight(size),
      }}
    >
      <div className={`flex flex-row items-center justify-center border-[4px] border-black h-full`}>
        <div className="flex flex-1 h-[100%] bg-black-800" />
        <div className="flex flex-[2] border-l-[4px] border-black h-[100%] bg-white" />
      </div>
    </div>
  )
}
