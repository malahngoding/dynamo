export const PrimaryButton = (props) => {
  const typeHandler = () => {
    switch (props.variant) {
      case 'normal':
        return 'bg-blue-800 hover:bg-blue-100 text-[#000000] dark:text-black'
      case 'warning':
        return 'bg-yellow-800 hover:bg-yellow-100 dark:text-black'
      case 'danger':
        return 'bg-red-800 hover:bg-red-100 dark:text-black'
      case 'success':
        return 'bg-green-800 hover:bg-green-100 dark:text-black'
      default:
        return `bg-white dark:bg-black hover:bg-black-100 text-black dark:text-white`
    }
  }
  return (
    <button onClick={props.onClick} className={`${props.parentClassName}`}>
      <div
        className={`${
          props.className
        } flex border-2 border-b-4 border-black dark:border-white rounded-lg py-2 px-4 ${typeHandler()} font-medium`}
      >
        {props.children}
      </div>
    </button>
  )
}

export const SecondaryButton = (props) => {
  return (
    <button onClick={props.onClick}>
      <div
        className={`flex border-2 border-b-4 border-black dark:border-white rounded-lg py-2 px-4 bg-pink-300 hover:bg-pink-800 font-medium dark:text-black`}
      >
        {props.children}
      </div>
    </button>
  )
}
