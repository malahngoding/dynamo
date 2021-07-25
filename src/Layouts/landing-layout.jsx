import Head from "next/head"
import { Fragment } from "react"
import { useAuth } from '@/hooks/auth'
import { NavigationBar } from "@/components/navigations/landing-navigation"
import { Footer } from "@/components/navigations/landing-footer"

export const LandingLayout = (props) => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <Fragment>
            <Head>
                <title>{props.title} - Malah Ngoding</title>
            </Head>
            <NavigationBar user={user} />
            <div className="h-[64px]" />
            <main>
                {props.children}
            </main>
            <Footer />
        </Fragment>
    )
}