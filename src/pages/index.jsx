import { PrimaryButton } from "@/components/design/button";
import { LandingLayout } from "@/Layouts/landing-layout";
import { Terminal } from "tabler-icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <LandingLayout title="Hello World!">
            <div className="w-full px-4 py-8 leading-normal md:p-8 text-md">
                <h3 className="font-bold tracking-widest text-left uppercase text-blue md:text-center">
                    Hello World!
                </h3>
                <h1 className="text-5xl font-black text-left text-black md:text-center">
                    Malah Ngoding
                </h1>
            </div>
            <div className="container px-4 pb-32 mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-full ml-auto md:w-5/12 md:px-4">
                        <div className="md:pr-12">
                            <Terminal width={48} height={48} />
                            <div className="h-4" />
                            <h3 className="text-3xl font-semibold">
                                Cara termudah belajar koding, langkah demi langkah
                            </h3>
                            <p className="mt-4 text-lg leading-relaxed font-medium text-black-800">
                                Belajar koding dan berlatih di platform yang sangat cocok untuk
                                siapa saja. Cocok untuk para calon pengembang web atau aplikasi
                                mobile.
                            </p>
                            <ul className="mt-6 list-none">
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase bg-gray-100 rounded-full text-black-800">
                                                {`</>`}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-black font-medium">
                                                Dari dan untuk <i>Developers</i>
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase bg-gray-100 rounded-full text-black">
                                                {`</>`}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-black font-medium">
                                                Malah Ngoding cocok untuk pemula yang belum pernah
                                                menulis kode satu baris pun
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase bg-gray-100 rounded-full text-black-800">
                                                {`</>`}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-black-800 font-medium">
                                                Malah Ngoding juga cocok untuk para pengembang web dan
                                                aplikasi mobile yang ingin mengembangkan skill-nya
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full pt-24 mr-auto md:w-5/12 md:pt-0">
                        <Image
                            className="max-w-full"
                            src="/assets/carbon-copy.webp"
                            alt="Carbon Copy Code"
                            width="828"
                            height="686"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center content-center w-full py-16 bg-yellow">
                <div className="w-full md:w-3/4 lg:w-1/2">
                    <h1 className="px-4 text-4xl font-black text-start md:text-center">
                        Menghabiskan waktu luang untuk malah ngoding.
                    </h1>
                    <h2 className="mb-8 px-4 text-xl text-start md:text-center">
                        Bingung menghabiskan waktu luang? Yuk malah ngoding aja.
                    </h2>
                </div>
                <Link href="/study/guide">
                    <a className="text-start md:text-center">
                        <PrimaryButton background="bg-blue">Mulai</PrimaryButton>
                    </a>
                </Link>
            </div>
            <div className="flex flex-col items-center content-center w-full py-16 bg-white">
                <div className="w-full md:w-3/4 lg:w-1/2">
                    <h2 className="px-4 mb-4 text-xl text-start md:text-center font-bold">
                        Saatnya belajar ngoding dengan cara yang menarik dan menyenangkan!
                    </h2>
                    <h4 className="mb-4 px-4 text-start md:text-center">
                        Belajar mulai dari nol, praktik sambil memahami konsep dasar.
                        Semuanya seperti bermain video game. Memecahkan teka-teki sambil
                        membantu eMang menjelajah luar angkasa.
                    </h4>
                </div>
                <Image
                    alt="eMang Adventure"
                    src="/assets/emang-adventure.png"
                    width="617"
                    height="114"
                />
                <Link href="/camps/awesome-noob">
                    <a className="mt-8 text-start md:text-center">
                        <PrimaryButton background="bg-yellow">
                            <span className="text-black">Bermain</span>
                        </PrimaryButton>
                    </a>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center content-center w-full pt-16 bg-green">
                <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-center items-center">
                    <h1 className="px-4 text-4xl font-black text-start md:text-center">
                        Mulai ngoding dengan semangat
                    </h1>
                    <h2 className="px-4 mb-8 text-xl text-start md:text-center">
                        Bergabung dengan komunitas malah ngoding
                    </h2>
                    <Link href="/register">
                        <a className="text-start md:text-center">
                            <PrimaryButton background="bg-pink">
                                <span className="text-black">Bergabung</span>
                            </PrimaryButton>
                        </a>
                    </Link>
                    <div className="h-6"></div>
                    <div
                        style={{
                            width: "100vw",
                            backgroundSize: "cover",
                            height: "10rem",
                            backgroundColor: "#00C6AE",
                            backgroundImage: `url("/assets/activation.svg")`,
                        }}
                    />
                </div>
            </div>
        </LandingLayout>
    );
}
