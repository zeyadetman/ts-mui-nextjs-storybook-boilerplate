import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
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

MyDocument.getInitialProps = async (ctx) => {
  // TODO: Add support for server-side rendering of Material-UI styles.
  // const sheets = new ServerStyleSheets();
  // const originalRenderPage = ctx.renderPage;

  // ctx.renderPage = () =>
  //   originalRenderPage({
  //     enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  //   });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      // sheets.getStyleElement(),
    ],
  };
};
