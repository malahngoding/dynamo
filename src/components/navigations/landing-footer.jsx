import Link from "next/link"
import { BrandGithub, BrandInstagram, BrandYoutube } from "tabler-icons-react"
import { LogoMalahNgoding } from "../design/logo"

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="w-full px-4 pt-4 border-t-2 border-black-200 md:px-8 lg:px-32 lg:pt-8 xl:px-64">
            <div className="flex flex-col items-start content-center justify-between md:flex-row">
                <div className="w-64">
                    <LogoMalahNgoding />
                    <h1 className="mt-4 mb-1 text-2xl font-black">Malah Ngoding</h1>
                    <p className="text-sm font-bold text-black-800">
                        Lupa Makan, Lupa Tidur, Malah Ngoding.
                    </p>
                </div>
                <div className="flex flex-col items-start content-start mt-4 md:mt-0">
                    <h1 className="text-lg font-extrabold text-black">Study</h1>
                    <div className="h-4"></div>
                    {
                        [
                            { title: "Snippet", url: "/study/snippet" },
                            { title: "Guide", url: "/study/guide" },
                            { title: "Flash Card", url: "/study/flash-card" },
                        ].map((item, index) => {
                            return (
                                <Link href={item.url} key={`${item.title}-${index}`}>
                                    <a className="py-2 text-md sm:text-sm font-medium hover:underline">{item.title}</a>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col items-start content-start mt-4 md:mt-0">
                    <h1 className="text-lg font-extrabold text-black">Camps</h1>
                    <div className="h-4"></div>
                    {
                        [
                            { title: "Awesome Noob", url: "/camps/awesome-noob" },
                            { title: "Code Interact", url: "/camps/code-interact" },
                            { title: "Project", url: "/camps/project" },
                        ].map((item, index) => {
                            return (
                                <Link href={item.url} key={`${item.title}-${index}`}>
                                    <a className="py-2 text-md sm:text-sm font-medium hover:underline">{item.title}</a>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col items-start content-start mt-4 md:mt-0">
                    <h1 className="text-lg font-extrabold text-black">Services</h1>
                    <div className="h-4"></div>
                    {
                        [
                            { title: "Coding Tutor", url: "/tutor" },
                            { title: "Workshop", url: "/malah-belajar" },
                            { title: "Development Service", url: "/development-service" },
                        ].map((item, index) => {
                            return (
                                <Link href={item.url} key={`${item.title}-${index}`}>
                                    <a className="py-2 text-md sm:text-sm font-medium hover:underline">{item.title}</a>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col items-start content-start mt-4 md:mt-0">
                    <h1 className="text-lg font-extrabold text-black">Ours</h1>
                    <div className="h-4"></div>
                    {
                        [
                            { title: "About Us", url: "/about-us" },
                            { title: "Help & FAQs", url: "/help-and-faqs" },
                            { title: "Terms and Condition", url: "/terms-and-condition" },
                            { title: "Privacy Policy", url: "/privacy-policy" },
                        ].map((item, index) => {
                            return (
                                <Link href={item.url} key={`${item.title}-${index}`}>
                                    <a className="py-2 text-md sm:text-sm font-medium hover:underline">{item.title}</a>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col items-center content-center justify-center pt-8">
                <div className="flex flex-row m-4">
                    <div className="mx-4">
                        <a href="https://github.com/malahngoding/" target="_blank" rel="noreferrer" aria-label="Malah Ngoding Github">
                            <BrandGithub />
                        </a>
                    </div>
                    <div className="mx-4">
                        <a href="https://www.youtube.com/channel/UCKMCYwl48GRxkKP0c92GOJQ?view_as=subscriber?sub_confirmation=1" target="_blank" rel="noreferrer" aria-label="Malah Ngoding Youtube">
                            <BrandYoutube />
                        </a>
                    </div>
                    <div className="mx-4">
                        <a href="https://www.instagram.com/malahngoding/" target="_blank" rel="noreferrer" aria-label="Malah Ngoding Instagram">
                            <BrandInstagram />
                        </a>
                    </div>
                </div>
                <div className="h-4"></div>
                <p className="text-xs text-center"><strong>© {year} Malah Ngoding </strong>. All Rights Reserved.</p>
                <div className="h-4"></div>
            </div>
        </footer>
    )
}