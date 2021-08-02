export const Card = (props) => {
  return (
    <div
      {...props}
      className={`flex border-2 border-b-4 border-black dark:border-white rounded-lg py-1 px-4 ${props.className}`}
    >
      {props.children}
    </div>
  )
}
