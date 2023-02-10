import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Sergey Ivanenko | Senior React Engineer</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
};

export default Document;