import {
  Button,
  NormalOrLarge,
  Small,
  Steppers,
  IconOnly,
  SpecialOrImage,
} from "@/components/base-component-a/buttons";
import { ButtonGroup1, LongButton } from "@/components/base-component-a/buttongroup";
import { Slidder } from "@/components/base-component-a/sliddercomponent";
import { CircleButtonNext, CircleButtonBack, CircleButtonChevron, CircleButtonClose } from "@/components/base-component-a/circlebutton";
import {
  InputBox,
  RadioButton,
  CheckBox,
  ToggleSwitch,
  Tags,
  Sliderdots,
} from "@/components/base-component-a/fromcomponent";

export default function Buttons() {
  return (
    <div className="bg-green-100">
      <NormalOrLarge />
      <br className="h-28px" />
      <h1 className="font-extrabold mb-2 text-black text-lg pl-6">
        Small
      </h1>
      <div className="pl-6">
      <Button tittle="I'm tiny" width="w-81px" height="h-36px" color="bg-white font-extrabold text-base" border="border-2 border-black" rounded="rounded-lg" />
      </div>
      <br className="h-28px" />
      <div className="pl-6">
      <Button tittle="I'm tiny" width="w-81px" height="h-36px" color="bg-black font-extrabold text-base text-white" border="border-2 border-black" rounded="rounded-lg" />
      </div>
      <br className="h-28px" />
      <div className="pl-6">
      <Button tittle="I'm tiny" width="w-81px" height="h-36px" color="bg-white font-extrabold text-base" border="border-2 border-b-4 border-black" rounded="rounded-lg" />
      </div>
      <br className="h-28px" />
      <div className="pl-6">
      <Button tittle="I'm tiny" width="w-81px" height="h-36px" color="bg-blue font-extrabold text-base" border="border-b-4 border-black" rounded="rounded-lg" />
      </div>
      <Steppers />
      <br className="h-28px" />
      <h1 className="font-extrabold mb-2 text-black text-lg pl-6">
        Icon Only
      </h1>
      <div className="pl-6">
        <CircleButtonBack width="w-60px" height="h-60px" color="bg-white" border="border-2 border-b-4" rounded="rounded-full" />
      </div>
      <br className="h-28px" />
      <div className="pl-6">
        <CircleButtonBack width="w-60px" height="h-60px" color="bg-blue" color_img="white" border="border-2 border-blue" rounded="rounded-full" />
      </div>
      <br className="h-28px" />
      <div className="pl-6">
        <CircleButtonChevron width="w-48px" height="h-48px" color="bg-white" border="border-2 border-b-4" rounded="rounded-full" />
      </div>
      <br className="h-28px" />
      <div className="pl-6">
        <CircleButtonChevron width="w-48px" height="h-48px" color="bg-blue" color_img="white" border="border-2 border-blue" rounded="rounded-full" />
      </div>
      <br className="h-28px" />
      <div className="pl-6">
        <CircleButtonClose width="w-32px" height="h-32px" color="bg-white" border="border-2 border-b-4" rounded="rounded-full" />
      </div>
      <br className="h-28px" />
      <div className="pl-6">
        <CircleButtonClose width="w-32px" height="h-32px" color="bg-blue" color_img="white" border="border-2 border-blue" rounded="rounded-full" />
      </div>
      <SpecialOrImage />
      <br className="h-28px" />
      <h1 className="font-extrabold mb-2 text-blue pl-6">
        B U T T O N  G R O U P
      </h1>
      <div className="pl-6">
        <div className="flex bg-white p-6 w-375px">
            <div className="pr-4">
            <ButtonGroup1 tittle="Button" color="bg-white" />
            </div>
            <ButtonGroup1 tittle="Button" color="bg-black text-white" />
        </div>
      </div>
      <br className="h-28px" />
        <div className="pl-6">
            <div className="flex bg-white p-6 w-375px">
                <LongButton tittle="Button" color="bg-black text-white" />
            </div>
        </div>
      <br className="h-28px" />
      <div className="pl-6">
        <div className="flex bg-white p-6 w-375px items-center">
            <div className="pr-28">
            <p className="font-black text-2xl">$545</p>
            </div>
            <ButtonGroup1 tittle="Button" color="bg-black text-white" />
        </div>
      </div>
      <br className="h-28px" />
      <div className="pl-6">
        <div className="flex bg-white p-6 w-375px items-center">
            <div className="pr-28">
            <Slidder width="w-12px" height="h-12px" color1="bg-yellow" color2="bg-white" color3="bg-white" />
            </div>
            <CircleButtonNext width="w-60px" height="h-60px" color="bg-yellow" border="border-2 border-b-4" rounded="rounded-full" />
        </div>
      </div>
      <InputBox />
      <RadioButton />
      <CheckBox />
      <ToggleSwitch />
      <Tags />
      <Sliderdots />
    </div>
  );
}
