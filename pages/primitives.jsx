import { PrimaryTypeFace, Bold, ExtraBold, Medium, Download} from '@/components/primitives/typography'
import { Spacing} from '@/components/primitives/spacing'
import { Seprator} from '@/components/primitives/seprator'
import { Color} from '@/components/primitives/colors'
import { Documentation} from '@/components/primitives/documentation'

export default function PrimitivePage() {
    return (
        <div>
            <PrimaryTypeFace />
            <Bold />
            <ExtraBold />
            <Medium />
            <Download  />
            <Spacing  />
            <Seprator  />
            <Color  />
            <Documentation  />
        </div>
    )
}