import React, {useContext} from "react";

import {Section, Content} from "../../core/Layout";
import styled from "styled-components";
import {LanguageContext} from "../../../providers/languageProvider";
import {EDUCATION, UI} from "../../../i18n/content";

const Heading = styled.div``;

const Cell = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (-webkit-min-device-pixel-ratio: 2) {
    &:last-child {
      flex-wrap: wrap;
    }
  }
`;

const OrganizationName = styled.div`
  font-weight: bold;
  font-style: italic;
  white-space: nowrap;
`;

const Location = styled.div`
  font-weight: bold;
`;

const Speciality = styled.div``;

const Degree = styled.span`
  white-space: nowrap;
  font-style: italic;
  font-weight: bold;
`;

const Education = () => {
    const { lang } = useContext(LanguageContext);
    const education = EDUCATION[lang];

    return (
        <Section>
            <h3>{UI[lang].education}</h3>
            <Content background={"rgba(100,222,240,0.1)"}>
                <div className="item">
                    <Heading>
                        <Cell>
                            <OrganizationName>{education.organization}</OrganizationName>
                            <Location>{education.location}</Location>
                        </Cell>
                        <Cell>
                            <Speciality>{education.speciality}</Speciality>
                            <Degree>{education.degree}</Degree>
                        </Cell>
                    </Heading>
                </div>
            </Content>
        </Section>
    );
};

export default Education;
