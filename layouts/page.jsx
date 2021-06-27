import Head from 'next/head'

export const PageLayout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.title} - Malah Ngoding</title>
                <link rel="shortcut icon" type="image/png" href="/favicon.png" />
            </Head>
            {props.children}
        </div>
    )
}