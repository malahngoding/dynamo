import Head from "next/head"
import { Fragment } from "react"
import { useAuth } from '@/hooks/auth'
import { NavigationBar } from "@/components/navigations/landing-navigation"

export const LandingLayout = (props) => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <Fragment>
            <Head>
                <title>{props.title} - Malah Ngoding</title>
            </Head>
            <NavigationBar user={user} />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}