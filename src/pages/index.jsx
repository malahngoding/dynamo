import Link from 'next/link'
import Head from 'next/head'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ?
                        <Link href="/dashboard">
                            <a className="ml-4 text-sm text-gray-700 underline">
                                Dashboard
                            </a>
                        </Link>
                        :
                        <>
                            <Link href="/login">
                                <a className="text-sm text-gray-700 underline">Login</a>
                            </Link>

                            <Link href="/register">
                                <a className="ml-4 text-sm text-gray-700 underline">
                                    Register
                                </a>
                            </Link>
                        </>
                    }
                </div>
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
                </div>
            </div>
        </>
    )
}
