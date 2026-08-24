import React, {useEffect, useState} from "react";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import {GlobalStyle} from "../styles";
import {theme} from "../theme";
import RoleProvider from "../providers/roleProvider";
import LanguageProvider from "../providers/languageProvider";

const App = ({ Component, pageProps }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <LanguageProvider>
        <RoleProvider>
            <ThemeProvider theme={theme}>
                {loaded && (
                    <>
                        <GlobalStyle />
                        <Component {...pageProps} />
                    </>
                )}
            </ThemeProvider>
        </RoleProvider>
        </LanguageProvider>
    );
}

export default App;
