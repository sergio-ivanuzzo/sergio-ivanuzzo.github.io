import React, {useContext} from "react";
import styled from "styled-components";

import {Content, Section} from "../../core/Layout";
import {LanguageContext} from "../../../providers/languageProvider";
import {SKILLS, UI} from "../../../i18n/content";

const SkillType = styled.span`
  font-weight: bold;
  text-decoration: underline;  
`;

const Skills = () => {
    const { lang } = useContext(LanguageContext);

    return (
        <Section>
            <h3>{UI[lang].skills}</h3>
            <Content background={"rgba(100,222,240,0.1)"}>
                {SKILLS[lang].map((group) => (
                    <div key={group.type}>
                        <SkillType>{group.type}</SkillType>: {group.items}
                    </div>
                ))}
            </Content>
        </Section>
    );
};

export default Skills;
