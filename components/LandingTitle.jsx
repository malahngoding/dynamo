export const LandingTitle = (props) => {
  return (
    <div className="w-full px-4 py-8 leading-normal md:p-8 text-md">
      <h3 className="font-bold tracking-widest text-left uppercase text-blue md:text-center">
        {props.subTitle}
      </h3>
      <h1 className="text-5xl font-black text-left text-black md:text-center">{props.title}</h1>
    </div>
  )
}
