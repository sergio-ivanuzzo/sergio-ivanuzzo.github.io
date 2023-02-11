import React from "react";
import { ThemeProvider } from "styled-components";
import "normalize.css";
import {Roboto} from "@next/font/google";

import {GlobalStyle} from "../styles";
import {theme} from "../theme";

const roboto = Roboto({
    weight: ["100"],
    style: ["italic"],
    subsets: ["latin"],
})

const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} className={roboto.className} />
        </ThemeProvider>
    );
}

export default App;
