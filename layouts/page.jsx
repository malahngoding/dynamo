import Head from "next/head";

export const PageLayout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title} - Malah Ngoding</title>
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />

        <meta name="csrf-token" content="{{ csrf_token() }}"></meta>
      </Head>
      {props.children}
    </div>
  );
};
