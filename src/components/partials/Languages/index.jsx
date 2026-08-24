import React, {useContext} from "react";
import styled from "styled-components";

import {Section, Content} from "../../core/Layout";
import {LanguageContext} from "../../../providers/languageProvider";
import {LANGUAGES_LIST, UI} from "../../../i18n/content";

const Language = styled.span`
  font-weight: bold;
`;

const Languages = () => {
    const { lang } = useContext(LanguageContext);

    return (
        <Section>
            <h3>{UI[lang].languages}</h3>
            <Content background={"rgba(100,222,240,0.1)"}>
                {LANGUAGES_LIST[lang].map((item) => (
                    <div key={item.name}>
                        <Language>{item.name}</Language>: {item.level}
                    </div>
                ))}
            </Content>
        </Section>
    );
};

export default Languages;
