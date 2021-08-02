/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'

import {
  Button,
  NormalOrLarge,
  Small,
  Steppers,
  IconOnly,
  SpecialOrImage,
} from '@/components/base-component-a/buttons'
import { ButtonGroup1, LongButton } from '@/components/base-component-a/buttongroup'
import { Slidder } from '@/components/base-component-a/sliddercomponent'
import { Tags, TagsCross } from '@/components/base-component-a/tags'
import { ToggleOff, ToggleOn } from '@/components/base-component-a/toggle'
import { RadioButton, RadioButtonChecklist } from '@/components/base-component-a/radiobutton'
import { CheckBox, CheckBoxBorder } from '@/components/base-component-a/checkbox'
import {
  CircleButtonNext,
  CircleButtonBack,
  CircleButtonChevron,
  CircleButtonClose,
} from '@/components/base-component-a/circlebutton'
import { InputBox, ToggleSwitch, Sliderdots } from '@/components/base-component-a/fromcomponent'

export default function Buttons() {
  const [var_ToggleOff, setToggleOff] = useState('visible')
  const [var_ToggleOn, setToggleOn] = useState('hidden')

  const handleClick = () => {
    if (var_ToggleOff === 'visible' && var_ToggleOn === 'hidden') {
      setToggleOff('hidden')
      setToggleOn('visible')
    } else {
      setToggleOff('visible')
      setToggleOn('hidden')
    }
  }
  return (
    <div className="bg-green-100">
      <NormalOrLarge />
      <br className="h-[28px]" />
      <h1 className="font-extrabold mb-2 text-black text-lg pl-6">Small</h1>
      <div className="pl-6">
        <Button
          tittle="I'm tiny"
          width="w-[81px]"
          height="h-[36px]"
          color="bg-white font-extrabold text-base"
          border="border-2 border-black"
          rounded="rounded-lg"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <Button
          tittle="I'm tiny"
          width="w-[81px]"
          height="h-[36px]"
          color="bg-black font-extrabold text-base text-white"
          border="border-2 border-black"
          rounded="rounded-lg"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <Button
          tittle="I'm tiny"
          width="w-[81px]"
          height="h-[36px]"
          color="bg-white font-extrabold text-base"
          border="border-2 border-b-4 border-black"
          rounded="rounded-lg"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <Button
          tittle="I'm tiny"
          width="w-[81px]"
          height="h-[36px]"
          color="bg-blue font-extrabold text-base"
          border="border-b-4 border-black"
          rounded="rounded-lg"
        />
      </div>
      <Steppers />
      <br className="h-[28px]" />
      <h1 className="font-extrabold mb-2 text-black text-lg pl-6">Icon Only</h1>
      <div className="pl-6">
        <CircleButtonBack
          width="w-[60px]"
          height="h-[60px]"
          color="bg-white"
          border="border-2 border-b-4"
          rounded="rounded-full"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <CircleButtonBack
          width="w-[60px]"
          height="h-[60px]"
          color="bg-blue"
          color_img="white"
          border="border-2 border-blue"
          rounded="rounded-full"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <CircleButtonChevron
          width="w-[48px]"
          height="h-[48px]"
          color="bg-white"
          border="border-2 border-b-4"
          rounded="rounded-full"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <CircleButtonChevron
          width="w-[48px]"
          height="h-[48px]"
          color="bg-blue"
          color_img="white"
          border="border-2 border-blue"
          rounded="rounded-full"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <CircleButtonClose
          width="w-[32px]"
          height="h-[32px]"
          color="bg-white"
          border="border-2 border-b-4"
          rounded="rounded-full"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <CircleButtonClose
          width="w-[32px]"
          height="h-[32px]"
          color="bg-blue"
          color_img="white"
          border="border-2 border-blue"
          rounded="rounded-full"
        />
      </div>
      <br className="h-[28px]" />
      <h1 className="font-extrabold mb-2 text-black pl-6">Special / Image</h1>
      <br className="h-[28px]" />
      <div className="pl-6">
        <SpecialOrImage
          color="bg-yellow-100"
          width="w-[80px]"
          height="h-[80px]"
          rounded="rounded-lg"
          border="border-2"
        />
      </div>
      <br className="h-[28px]" />
      <h1 className="font-extrabold mb-2 text-blue pl-6 text-xl">B U T T O N G R O U P</h1>
      <div className="pl-6">
        <div className="flex bg-white p-6 w-[375px]">
          <div className="pr-4">
            <ButtonGroup1 tittle="Button" color="bg-white" />
          </div>
          <ButtonGroup1 tittle="Button" color="bg-black text-white" />
        </div>
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <div className="flex bg-white p-6 w-[375px]">
          <LongButton tittle="Button" color="bg-black text-white" />
        </div>
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <div className="flex bg-white p-6 w-[375px] items-center">
          <div className="pr-28">
            <p className="font-black text-2xl">$545</p>
          </div>
          <ButtonGroup1 tittle="Button" color="bg-black text-white" />
        </div>
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <div className="flex bg-white p-6 w-[375px] items-center">
          <div className="pr-28">
            <Slidder
              width="w-[12px]"
              height="h-[12px]"
              color1="bg-yellow"
              color2="bg-white"
              color3="bg-white"
            />
          </div>
          <CircleButtonNext
            width="w-[60px]"
            height="h-[60px]"
            color="bg-yellow"
            border="border-2 border-b-4"
            rounded="rounded-full"
          />
        </div>
      </div>
      <InputBox />
      <br className="h-[28px]" />
      <h1 className="font-extrabold mb-2 text-black pl-6">Radio Button</h1>
      <br className="h-[28px]" />
      <div className="pl-6">
        <RadioButton width1="w-[32px]" height1="h-[32px]" width2="w-[16px]" height2="h-[16px]" />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <RadioButtonChecklist
          width1="w-[32px]"
          height1="h-[32px]"
          width2="w-[16px]"
          height2="h-[16px]"
          color1="bg-yellow"
        />
      </div>
      <br className="h-[28px]" />
      <h1 className="font-extrabold mb-2 text-black pl-6">Check Box</h1>
      <br className="h-[28px]" />
      <div className="pl-6">
        <CheckBox width1="w-[32px]" height1="h-[32px]" width2="w-[16px]" height2="h-[16px]" />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <CheckBoxBorder
          width1="w-[32px]"
          height1="h-[32px]"
          width2="w-[16px]"
          height2="h-[16px]"
          color1="bg-yellow"
        />
      </div>
      <br className="h-[28px]" />
      <h1 className="font-extrabold mb-2 text-black pl-6">Toggle Switch</h1>
      <br className="h-[28px]" />
      <div
        className={`pb-4 pl-6 ${var_ToggleOff === 'visible' ? 'visible' : 'hidden'}`}
        onClick={handleClick}
      >
        <ToggleOff color="bg-black-400" />
      </div>
      <div
        className={`pb-4 pl-6 ${var_ToggleOn === 'hidden' ? 'hidden' : 'visible'}`}
        onClick={handleClick}
      >
        <ToggleOn color="bg-yellow" />
      </div>
      <br className="h-[28px]" />
      <h1 className="font-extrabold mb-2 text-black pl-6">Tags</h1>
      <br className="h-[28px]" />
      <div className="pb-4 pl-6">
        <Tags
          tittle="Tag name"
          width="w-[81px]"
          height="h-[36px]"
          color="bg-white font-extrabold text-xs pt-1"
          border="border-2 border-black"
          rounded="rounded-full"
        />
      </div>
      <div className="pb-4 pl-6">
        <TagsCross
          tittle="Active name"
          width="w-[125px]"
          height="h-[36px]"
          color="bg-pink-800 font-extrabold text-xs pt-1"
          border="border-2 border-black"
          rounded="rounded-full"
        />
      </div>
      <div className="pl-6">
        <Tags
          tittle="99+"
          width="w-[32px]"
          height="h-[24px]"
          color="bg-red font-extrabold text-xs text-white"
          border="border-2 border-black"
          rounded="rounded-full"
        />
      </div>
      {/* <ToggleSwitch />
      <Tags /> */}
      <br className="h-[28px]" />
      <h1 className="font-extrabold mb-2 text-black pl-6">Slider dots</h1>
      <br className="h-[28px]" />
      <div className="pl-6">
        <Slidder
          width="w-[8px]"
          height="h-[8px]"
          color1="bg-yellow"
          color2="bg-white"
          color3="bg-white"
        />
      </div>
      <br className="h-[28px]" />
      <div className="pl-6">
        <Slidder
          width="w-[12px]"
          height="h-[12px]"
          color1="bg-yellow"
          color2="bg-white"
          color3="bg-white"
        />
      </div>
    </div>
  )
}
