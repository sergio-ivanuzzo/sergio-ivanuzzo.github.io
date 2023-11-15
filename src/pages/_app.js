import React, {useEffect, useState} from "react";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import {GlobalStyle} from "../styles";
import {theme} from "../theme";

const App = ({ Component, pageProps }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            {loaded && (
                <>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </>
            )}
        </ThemeProvider>
    );
}

export default App;
