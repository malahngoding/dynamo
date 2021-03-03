import React from "react";
import NextDocument, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { css } from "stitches.config";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const originalRenderPage = ctx.renderPage;

    try {
      let extractedStyles: string[] | undefined;
      ctx.renderPage = () => {
        const { styles, result } = css.getStyles(originalRenderPage);
        extractedStyles = styles;
        return result;
      };

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}

            {extractedStyles?.map((content, index) => (
              <style
                key={index}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ))}
          </>
        ),
      };
    } finally {
      // eslint-disable-next-line no-console
      console.info("Success");
    }
  }
  render(): JSX.Element {
    return (
      <Html lang="id">
        <Head>
          <link rel="shortcut icon" href="favicon.png" />
          <link
            rel="preload"
            href="/fonts/Montserrat-VF.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <meta
            name="description"
            content="Malah Ngoding merupakan platform pembelajaran praktis untuk para pengembang aplikasi web dan mobile."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
