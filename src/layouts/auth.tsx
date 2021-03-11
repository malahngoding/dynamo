import Head from "next/head";
import { Fragment, ReactElement, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

export const Auth = (props: AuthLayoutProps): ReactElement => {
  return (
    <Fragment>
      <Head>
        <title>{props.title} - Malah Ngoding</title>
      </Head>
      <div>{props.children}</div>
    </Fragment>
  );
};
