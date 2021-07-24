import Link from 'next/link'
import { PrimaryButton } from '../design/button'

export const NavigationBar = (props) => {
    return (
        <nav className="flex flex-row justify-between items-center px-8 py-2 border-b-2 border-black-200 h-[64px]">
            <Link href="/">
                <a>
                    <div className="flex flex-row items-center justify-center h-[38px] w-[58px] border-[4px] border-black">
                        <div className="flex flex-1 h-full bg-black-800" />
                        <div className="flex flex-[2] border-l-[4px] border-black h-full bg-white" />
                    </div>
                </a>
            </Link>
            <div className="flex flex-row justify-center items-center">
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
    )
}