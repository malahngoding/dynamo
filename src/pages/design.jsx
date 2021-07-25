import { SecondaryButton } from '@/components/design/button'
import { SecondarySmallButton } from '@/components/design/button'
import { SmallPrimaryButton } from '@/components/design/button'
import { PrimaryButton } from '@/components/design/button'
import { LandingLayout } from '@/Layouts/landing-layout'

export default function Design() {

    return (
        <LandingLayout title="Instead!">
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="flex flex-col justify-start items-center">
                    <h1 className="text-4xl font-black">
                        Black
                    </h1>
                    <h1 className="text-4xl font-extrabold">
                        Extrabold
                    </h1>
                    <h1 className="text-4xl font-bold">
                        Bold
                    </h1>
                    <h1 className="text-4xl font-semibold">
                        Semibold
                    </h1>
                    <h1 className="text-4xl font-medium">
                        Medium
                    </h1>
                    <h1 className="text-4xl font-normal">
                        Normal
                    </h1>
                    <h1 className="text-4xl font-light">
                        Light
                    </h1>
                    <h1 className="text-4xl font-extralight">
                        Extralight
                    </h1>
                    <div className="h-4" />
                    <PrimaryButton>Primary Button</PrimaryButton>
                    <div className="h-4" />
                    <SecondaryButton>Secondary Button</SecondaryButton>
                    <div className="h-4" />
                    <SmallPrimaryButton>Small Button</SmallPrimaryButton>
                    <div className="h-4" />
                    <SecondarySmallButton>Secondary Small Button</SecondarySmallButton>
                    <div className="h-4" />
                </div>
            </div>
        </LandingLayout>
    )
}
