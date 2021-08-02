import { ScreenBigTitle } from '@/components/screentitles/titles'
import {
  ScreenTitleBlue,
  ScreenTitleWhite,
  TitleStar,
  ScreenTitleNotification,
  TitleCross,
  Title,
} from '@/components/screentitles/titles'

export default function ScreenTitlesPage() {
  return (
    <div className="bg-black-100">
      <br className="h-[28px]" />
      <h1 className="font-extrabold mb-2 text-blue text-lg pl-6">T I T L E S</h1>
      <br className="h-[28px]" />
      <div className="pl-6">
        <ScreenTitleBlue
          tittle2="Screen Title"
          width="w-[375px]"
          height="h-[136px]"
          color="bg-blue"
          text2="text-xl font-extrabold text-left text-white"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <ScreenTitleWhite
          tittle2="Screen Title"
          width="w-[375px]"
          height="h-[136px]"
          color="bg-white"
          text2="text-xl font-extrabold text-left text-black"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <TitleStar
          tittle2="Title"
          width="w-[375px]"
          height="h-[136px]"
          color="bg-white"
          text2="text-xl font-extrabold text-left text-black"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <ScreenTitleNotification
          tittle2="contra"
          width="w-[375px]"
          height="h-[136px]"
          color="bg-blue"
          color_img="white"
          text2="text-xl font-extrabold text-left text-white"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <ScreenTitleNotification
          tittle2="Screen Title"
          width="w-[375px]"
          height="h-[136px]"
          color="bg-white"
          color_img="black"
          text2="text-xl font-extrabold text-left text-black"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <TitleCross
          tittle2="Title"
          width="w-[375px]"
          height="h-[136px]"
          color="bg-white"
          text2="text-xl font-extrabold text-left text-black"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <Title
          tittle="Title"
          width="w-[375px]"
          height="h-[136px]"
          color="bg-blue"
          text="text-4xl font-extrabold text-left text-white"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <Title
          tittle="Title"
          width="w-[375px]"
          height="h-[136px]"
          color="bg-white"
          text="text-4xl font-extrabold text-left text-black"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <TitleCross
          tittle2="Box Title"
          width="w-[375px]"
          height="h-[136px]"
          color="bg-white border-b-4"
          text2="text-xl font-extrabold text-left text-black"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <ScreenBigTitle
          tittle="big Title"
          width="w-[375px]"
          height="h-[136px]"
          color="bg-blue"
          color_img="white"
          text="text-4xl font-extrabold text-left text-white"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <ScreenBigTitle
          tittle="big Title"
          width="w-[375px]"
          height="h-[136px]"
          color="bg-white"
          text="text-4xl font-extrabold text-left text-black"
        />
      </div>
      <br className="h-[28px]" />
      <br className="h-[28px]" />
    </div>
  )
}
