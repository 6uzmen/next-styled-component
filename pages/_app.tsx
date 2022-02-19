import React, { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "../styles/theme.config";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/custom.scss";
import { NextPage, NextPageContext } from "next";
import { AppProps } from "next/app";
import { DocumentInitialProps } from "next/document";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}