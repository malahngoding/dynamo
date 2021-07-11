import { PrimaryTypeFace, Bold, ExtraBold, Black, Download} from '@/components/primitives/typography'
import { Spacing} from '@/components/primitives/spacing'
import { Seprator} from '@/components/primitives/seprator'
import { Color} from '@/components/primitives/colors'
import { Documentation} from '@/components/primitives/documentation'

export default function PrimitivePage() {
    return (
        <div>
            <br className="h-28px" />
            <h1 className="font-extrabold mb-2 text-blue text-lg pl-6">
            T Y P O G R A P H Y
            </h1>
            <br className="h-28px" />
            <h1 className="font-normal mb-2 text-black text-lg pl-6">
            Primary Typeface
            </h1>
            <div className="pl-6 pb-4">
            <Black />
            </div>
            <div className="pl-6 pb-4">
            <ExtraBold />
            </div>
            <div className="pl-6 pb-4">
            <Bold />
            </div>
            <div className="pl-6 pb-4">
            <PrimaryTypeFace />
            </div>
            <br className="h-28px" />
            <h1 className="font-bold mb-2 text-black text-lg pl-6">
            Download
            </h1>
            <div className="pl-6 pb-4">
            <Download  />
            </div>
            <br className="h-28px" />
            <h1 className="font-extrabold mb-2 text-blue text-lg pl-6">
            S P A C I N G
            </h1>
            <br className="h-28px" />
            <div className="flex">
            <div className="flex-1 pl-6">
            <Spacing color="bg-red" width="w-2px" height="h-2px" />
            </div>
            <div className="flex-1 pl-6">
            <Spacing color="bg-red" width="w-4px" height="h-4px" />
            </div>
            <div className="flex-1 pl-6">
            <Spacing color="bg-red" width="w-8px" height="h-8px" />
            </div>
            <div className="flex-1 pl-6">
            <Spacing color="bg-red" width="w-12px" height="h-12px" />
            </div>
            <div className="flex-1 pl-6">
            <Spacing color="bg-red" width="w-16px" height="h-16px" />
            </div>
            <div className="flex-1 pl-6">
            <Spacing color="bg-red" width="w-24px" height="h-24px" />
            </div>
            <div className="flex-1 pl-6">
            <Spacing color="bg-red" />
            </div>
            </div>
            <br className="h-28px" />
            <h1 className="font-extrabold mb-2 text-blue text-lg pl-6">
            S E P R A T O R
            </h1>
            <Seprator  />
            <br className="h-28px" />
            <h1 className="font-extrabold mb-2 text-blue text-lg pl-6">
            C O L O R S
            </h1>
            <div className="flex-1 pl-6">
            <Spacing color="bg-black border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-black-800 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-black-600 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-black-400 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-black-200 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-black-100 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-white border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-blue border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-blue-800 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-blue-100 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-pink border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-pink-800 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-pink-100 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-yellow border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-yellow-800 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-yellow-100 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-green border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-green-800 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-green-100 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-red border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-red-800 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <div className="flex-1 pl-6">
            <Spacing color="bg-red-100 border-none" width="w-104px" height="h-104px" />
            </div>
            <br className="h-28px" />
            <h1 className="font-extrabold mb-2 text-blue text-lg pl-6">
            D O C U M E N T A T I O N
            </h1>
            <Documentation  />
        </div>
    )
}