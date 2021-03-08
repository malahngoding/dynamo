import Head from "next/head";
import { Fragment, ReactElement, ReactNode } from "react";
import { Provider, atom } from "jotai";

interface ActivityLayoutProps {
  title: string;
  children: ReactNode | ReactElement;
}

export const adventureAtom = atom("adventure");

export const Activity = (props: ActivityLayoutProps): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>{props.title} - Malah Ngoding</title>
      </Head>
      <Provider>
        <div>{props.children}</div>
      </Provider>
    </Fragment>
  );
};
