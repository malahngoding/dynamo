import Image from './Image'

export const UnderConstruction = (props) => {
  const { subTitle, title } = props
  return (
    <div>
      <section className="w-full px-4 py-8 leading-normal md:p-8 md:mt-10 text-md">
        <h3 className="font-bold tracking-widest text-left uppercase text-blue dark:text-white md:text-center">
          {subTitle}
        </h3>
        <h1 className="text-5xl font-black text-left text-black dark:text-yellow md:text-center">
          {title}
        </h1>
      </section>
      <section className="w-full px-4 p-8 leading-normal md:p-8 md:mt-10 text-md flex flex-col-reverse md:flex-row justify-start items-start">
        <Image
          src="/static/images/under-construction.webp"
          height="512"
          width="512"
          alt="people codding using monitor head"
          quality="70"
        />
        <div className="flex flex-col mt-0 md:mt-8">
          <h1 className="text-4xl font-black">Sabar Ya...</h1>
          <h3 className="text-xl font-bold">Masih dikoding</h3>
        </div>
      </section>
    </div>
  )
}
