import Head from "next/head";
import { Fragment, ReactElement, ReactNode } from "react";
import { Nav } from "src/components/nav";
import { Footer } from "src/components/footer";

interface PostLayoutProps {
  children: ReactNode;
  title: string;
}

export const Post = (props: PostLayoutProps): ReactElement => {
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
