export const ArticleCard = (props) => {
  return (
    <div className="m-2 border-2 border-black dark:border-white rounded-lg bg-white dark:bg-black dark:hover:border-white dark:hover:bg-yellow-100 hover:bg-blue-100 px-6 py-4 h-[240px] dark:hover:text-black">
      <div className="flex flex-col justify-between items-start h-full">{props.children}</div>
    </div>
  )
}
