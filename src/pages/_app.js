import React from "react";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import {GlobalStyle} from "../styles";
import {theme} from "../theme";

const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
