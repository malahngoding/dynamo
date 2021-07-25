import { useScrollBlock } from '@/hooks/scroll-body'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Menu2, X } from 'tabler-icons-react'
import { PrimaryButton } from '../design/button'
import { LogoMalahNgoding } from '../design/logo'

export const NavigationBar = (props) => {
    const [blockScroll, allowScroll] = useScrollBlock()
    const [showNavigationDrawer, setNavigationDrawer] = useState(false)
    return (
        <Fragment>
            <nav className="fixed top-0 w-screen flex flex-row justify-between items-center px-4 sm:px-8 py-2 border-b-2 border-black-200 h-[64px] bg-white z-20">
                <Link href="/">
                    <a>
                        <LogoMalahNgoding />
                    </a>
                </Link>
                <div className="flex sm:hidden">
                    <button onClick={() => {
                        blockScroll()
                        setNavigationDrawer(true)
                    }}>
                        <Menu2 size={32} />
                    </button>
                </div>
                <div className="hidden sm:flex flex-row justify-center items-center">
                    <Link href="/study">
                        <a>
                            <span className="font-extrabold mx-2 text-base text-black hover:text-blue">Study</span>
                        </a>
                    </Link>
                    <Link href="/camps">
                        <a>
                            <span className="font-extrabold mx-2 text-base text-black hover:text-pink">Camps</span>
                        </a>
                    </Link>
                    <Link href="/about-us">
                        <a>
                            <span className="font-extrabold mx-2 text-base text-black hover:text-green">About Us</span>
                        </a>
                    </Link>
                </div>
                <div className="hidden sm:flex flex-row justify-center items-center">
                    <div className="w-8" />
                    {props.user ?
                        <Link href="/dashboard">
                            <a className="ml-4 text-sm text-black">
                                Dashboard
                            </a>
                        </Link>
                        :
                        <>
                            <Link href="/login">
                                <a className="text-sm text-black">
                                    <PrimaryButton background="bg-blue-800">Masuk</PrimaryButton>
                                </a>
                            </Link>

                            <Link href="/register">
                                <a className="ml-4 text-sm text-black">
                                    <PrimaryButton>Daftar</PrimaryButton>
                                </a>
                            </Link>
                        </>
                    }
                </div>
            </nav>
            <div className={`${showNavigationDrawer ? "block" : "hidden"} top-0 fixed min-h-screen min-w-full bg-black-100 z-30`}>
                <div className="flex flex-col justify-between items-center min-h-screen p-4">
                    <button className="flex self-end" onClick={() => {
                        allowScroll()
                        setNavigationDrawer(false)
                    }}>
                        <X size={32} />
                    </button>
                    <div className="flex flex-col justify-center items-center">
                        <Link href="/study">
                            <a className="my-4">
                                <span className="font-extrabold text-xl text-black hover:text-blue">Study</span>
                            </a>
                        </Link>
                        <Link href="/camps">
                            <a className="my-4">
                                <span className="font-extrabold text-xl text-black hover:text-pink">Camps</span>
                            </a>
                        </Link>
                        <Link href="/about-us">
                            <a className="my-4">
                                <span className="font-extrabold text-xl text-black hover:text-green">About Us</span>
                            </a>
                        </Link>
                        <div className="flex flex-row justify-center items-center mt-8">
                            {props.user ?
                                <Link href="/dashboard">
                                    <a className="ml-4 text-sm text-black">
                                        Dashboard
                                    </a>
                                </Link>
                                :
                                <Fragment>
                                    <Link href="/login">
                                        <a className="text-sm text-black">
                                            <PrimaryButton background="bg-blue-800">Masuk</PrimaryButton>
                                        </a>
                                    </Link>

                                    <Link href="/register">
                                        <a className="text-sm text-black ml-6">
                                            <PrimaryButton>Daftar</PrimaryButton>
                                        </a>
                                    </Link>
                                </Fragment>
                            }
                        </div>
                    </div>
                    <p className="text-xs font-extrabold">Malah Ngoding</p>
                </div>
            </div>
        </Fragment>
    )
}