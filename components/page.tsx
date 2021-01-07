import { useState, useEffect, FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Nav, Footer } from "components/navigation";

interface Page {
  pageTitle: string;
  children: any;
}

export const Page: FC<Page> = (props: Page) => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = (url: unknown) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: unknown) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <>
      <Head>
        <title>{props.pageTitle} - Malah Ngoding</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Platform build and designed to learn together in a fun, informal, and engaging way."
        />
      </Head>
      {loading ? (
        <div className="fixed h-1 bg-gradient-to-r from-green to-pink top-0 z-50 w-screen animate-pulse" />
      ) : (
        <></>
      )}
      <Nav />
      <div className="h-20 w-full" />
      {props.children}
      <Footer />
    </>
  );
};
