import { SegmentControl } from "@/components/base-component/segment-control";
import { Slider } from "@/components/base-component/slider";
import { StarReview } from "@/components/base-component/star-review";
import { TabBar } from "@/components/base-component/tab-bar";
import { Logo } from "@/components/logo-instead";

export default function BaseComponent() {
    return (
        <div className="bg-green-100 p-10 min-h-screen">
            <h1 className="mb-10 text-blue font-sans text-4xl font-bold tracking-wider">B A S E  C O M P O N E N T</h1>
            <h1 className="font-extrabold mb-2 ">Segment Control</h1>
            <SegmentControl />
            <br className="h-28px" />
            <h1 className="font-extrabold mb-2 ">Slider</h1>
            <Slider />
            <br className="h-28px" />
            <h1 className="font-extrabold mb-2 ">Tab Bar</h1>
            <TabBar />
            <br className="h-28px" />
            <h1 className="font-extrabold mb-2 ">Star Review</h1>
            <StarReview score={3.5} />
            <br className="h-28px" />
            <h1 className="font-extrabold mb-2 ">Logo</h1>
            <Logo />
        </div>
    )
}