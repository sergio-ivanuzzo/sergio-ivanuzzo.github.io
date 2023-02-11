import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,500&display=swap"
                      rel="stylesheet" />
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