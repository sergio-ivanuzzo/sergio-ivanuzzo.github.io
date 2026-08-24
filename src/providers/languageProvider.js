import React, {createContext, useState} from "react";

export const LANG = Object.freeze({
    EN: "en",
    DE: "de",
});

export const LanguageContext = createContext({
    lang: LANG.EN,
});

const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(LANG.EN);

    const context = { lang, setLang };

    return (
        <LanguageContext.Provider value={context}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
