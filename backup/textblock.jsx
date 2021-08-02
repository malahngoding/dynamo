import {
  TextBlock,
  TextBlockImg,
  TextBlockImgLeft,
  TextBlock2Img,
} from '@/components/textblock/textblock'

export default function TextBlockPage() {
  return (
    <div className="bg-yellow-100">
      <br className="h-[28px]" />
      <h1 className="font-extrabold mb-2 text-blue text-lg pl-6">T E X T B L O C K S</h1>
      <br className="h-[28px]" />
      <div className="pl-6">
        <TextBlock
          tittle1="Contra wireframe kit"
          tittle2="Wireframe is still important for ideation. It will help you to quickly test idea."
          width="w-[375px]"
          height="h-[238px]"
          color="text-black"
          text1="font-black text-left text-4xl"
          text2="text-base font-normal text-left text-black-800"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <TextBlock
          tittle1="Contra wireframe kit"
          tittle2="Wireframe is still important for ideation. It will help you to quickly test idea."
          width="w-[375px]"
          height="h-[238px]"
          color="text-black"
          text1="font-black text-center text-4xl"
          text2="text-base font-normal text-center text-black-800"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <TextBlock
          tittle1="Small header with small font size if you have less text"
          tittle2="Wireframe is still important for ideation. It will help you to quickly test idea. Sometime it’s ok to feel the body text will some random paragraph like this."
          width="w-[375px]"
          height="h-[238px]"
          color="text-black"
          text1="font-black text-left text-base"
          text2="text-base font-normal text-left text-black-800"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <TextBlock
          tittle1="SIMPLE TAG"
          tittle2="Work with best designers to improve skills"
          tittle3="Wireframe is still important for ideation. It will help you to quickly test idea."
          width="w-[375px]"
          height="h-[238px]"
          color="text-black"
          text1="font-black text-center text-sm -mt-6"
          text2="text-3xl font-black text-center"
          text3="font-normal text-center text-base text-black-800"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <TextBlock
          tittle1="SOME TAGLINE"
          tittle2="I’m Large title with two line or if you want add more your choice"
          tittle3="Wireframe is still important for ideation. It will help you to quickly test idea."
          width="w-[375px]"
          height="h-[238px]"
          color="text-black"
          text1="font-black text-left text-sm"
          text2="text-xl font-extrabold text-left"
          text3="font-normal text-left text-sm text-black-800"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <TextBlock
          tittle1="Contra wireframe kit"
          tittle2="by realvjy"
          tittle3="Wireframe is still important for ideation. It will help you to quickly test idea."
          width="w-[375px]"
          height="h-[238px]"
          color="text-black"
          text1="font-black text-left text-2xl pt-6"
          text2="text-sm font-extrabold text-left"
          text3="font-normal text-left text-sm text-black-800"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <TextBlock
          tittle1="Contra wireframe kit"
          tittle2="by realvjy"
          tittle3="Wireframe is still important for ideation. It will help you to quickly test idea."
          width="w-[375px]"
          height="h-[238px]"
          color="text-black"
          text1="font-black text-left text-2xl pt-6"
          text2="text-sm font-extrabold text-left"
          text3="font-normal text-left text-sm text-black-800"
        />
      </div>

      <br className="h-[28px]" />
      <div className="pl-6">
        <TextBlockImg
          tittle2="Simple Title"
          tittle3="Wireframe is still important for ideation. It will help you to quickly test idea."
          width="w-[375px]"
          height="h-[238px]"
          color="text-black"
          img1="w-[64px] h-[64px] place-self-center"
          text2="text-xl font-extrabold text-center"
          text3="font-normal text-center text-sm text-black-800"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <TextBlockImgLeft
          tittle2="Simple max four word"
          tittle3="If you have small description you should write here."
          width="w-[375px]"
          height="h-[238px]"
          color="text-black"
          img1="w-[64px] h-[64px]"
          text2="text-xl font-extrabold text-left"
          text3="font-normal text-left text-sm text-black-800"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <TextBlock2Img
          tittle2="I’m Large title with two line or more"
          tittle3="Wireframe is still important for ideation."
          width="w-[375px]"
          height="h-[238px]"
          color="text-black"
          img1="w-[36px] h-[36px]"
          text2="text-xl font-extrabold text-left"
          text3="font-normal text-left text-base text-black-800"
        />
      </div>
      <br className="h-[60px]" />
    </div>
  )
}
