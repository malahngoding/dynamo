import { AppProps } from "next/app";
import * as React from "react";

import "src/styles/preflight.css";
import "src/styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
