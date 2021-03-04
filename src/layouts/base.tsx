import Head from "next/head";
import { Fragment, ReactElement, ReactNode } from "react";
import { Nav } from "src/components/nav";
import { Footer } from "src/components/footer";

interface BaseLayoutProps {
  children: ReactNode;
  title: string;
}

export const Base = (props: BaseLayoutProps): ReactElement => {
  return (
    <Fragment>
      <Head>
        <title>{props.title} - Malah Ngoding</title>
      </Head>
      <Nav />
      <div>{props.children}</div>
      <Footer />
    </Fragment>
  );
};
