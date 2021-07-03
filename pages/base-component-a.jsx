import { NormalOrLarge, Small, Steppers, IconOnly, SpecialOrImage } from '@/components/base-component-a/buttons'
import { ButtonGroup } from '@/components/base-component-a/buttongroup'
import { InputBox, RadioButton, CheckBox, ToggleSwitch, Tags, Sliderdots } from '@/components/base-component-a/fromcomponent'

export default function Buttons() {
    return (
        <div>
            <NormalOrLarge />
            <Small />
            <Steppers />
            <IconOnly />
            <SpecialOrImage />
            <ButtonGroup />
            <InputBox />
            <RadioButton />
            <CheckBox />
            <ToggleSwitch />
            <Tags />
            <Sliderdots />
        </div>
    )
}
