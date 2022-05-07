/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import { LayoutWrapper } from '@/components/LayoutWrapper'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { UnderConstruction } from '@/components/UnderConstruction'
import { useState } from 'react'
import { PrimaryButton } from '@/components/design/button'
import { useRouter } from 'next/router'

export default function AwesomeNoobs() {
  const router = useRouter()
  const [slidePages, setSlidePages] = useState(1)
  const [animationPages, setAnimationPages] = useState(true)
  const handleClick = () => {
    setSlidePages(slidePages + 1)
    setAnimationPages(!animationPages)
  }
  const handleClickStart = () => {
    router.push('/camps/awesome-noob/level-1')
  }
  return (
    <LayoutWrapper>
      <PageSeo
        title={siteMetadata.titleHandler('Awesome Noob')}
        description={siteMetadata.description}
      />
      <Introductions animationPages={animationPages} slidePages={slidePages} />
      <div className="flex flex-col justify-center items-center mb-20">
        <PrimaryButton
          variant={`success`}
          children={slidePages < 3 ? `Lanjut..` : `Mulai`}
          onClick={slidePages < 3 ? handleClick : handleClickStart}
          parentClassName={`mt-6 `}
        />
      </div>
    </LayoutWrapper>
  )
}

const Introductions = (props) => {
  const click = [1, 2, 3]
  return (
    <div>
      {click.map((item, index) => (
        <div
          key={item}
          className={`flex flex-col justify-center items-center  ${
            props.slidePages === item ? 'animate__animated animate__backInLeft' : 'hidden'
          }  `}
        >
          <img
            src={`https://raw.githubusercontent.com/malahngoding/dynamo/Badge/public/static/images/user.png`}
            alt=""
          />
          <p className={`text-4xl ${props.slidePages === 1 ? '' : 'hidden'}`}>Hallo Semua</p>
          <p className={`text-4xl ${props.slidePages === 2 ? '' : 'hidden'}`}>
            Saya ingin pergi ke Planet Mars
          </p>
          <p className={`text-4xl ${props.slidePages === 3 ? '' : 'hidden'}`}>Bantu Saya</p>
        </div>
      ))}
    </div>
  )
}
