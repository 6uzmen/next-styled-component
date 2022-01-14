import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "../style/theme.config";
import "../style/globals.css";
import "../style/custom.scss";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
