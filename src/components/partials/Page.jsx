import React, {useContext} from "react";
import styled from "styled-components";

import WorkExperience from "./WorkExperience";
import Certifications from "./Certifications";
import Education from "./Education";
import Skills from "./Skills";
import Contacts from "./Contacts";
import Languages from "./Languages";
import {RoleContext, roleKeyOf} from "../../providers/roleProvider";
import {LANG, LanguageContext} from "../../providers/languageProvider";
import {ABOUT, UI} from "../../i18n/content";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 100%;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 100%;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 50%;
  }

  @media only screen and (min-width: 992px) and (orientation: landscape) {
    width: 100%;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 50%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  & > * {
    padding: 0 10px;
  }
`;

const LeftColumn = styled.div`
  flex: 3;

  flex-basis: min-content;

  @media only screen and (max-width: 600px) {
    flex-basis: max-content;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    flex-basis: max-content;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    flex-basis: max-content;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    flex-basis: min-content;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    flex-basis: min-content;
  }
`;

const RightColumn = styled.div`
  border-top-right-radius: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const About = styled.div`
  font-style: italic;
  margin-top: 5px;
  margin-bottom: 15px;  
`;

const FullName = styled.div`
  display: flex;
  font-size: 35px;
  flex-wrap: wrap;
  
  & > * {
    margin-right: 8px;
  }
`;

const Name = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

const Surname = styled.span`
  text-transform: uppercase;
`;

const Position = styled.div`
  font-size: 25px;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;

  > *:not(:first-child) {
    margin-left: 10px;
  }
`;

const ToolbarButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px 10px;
  font-family: inherit;
  font-size: 13px;
  font-weight: bold;
  background: transparent;
  box-shadow: 0 2px 4px 3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s;
  border: 1px solid snow;
  border-radius: 10px;
  color: #555;

  &:hover {
    cursor: pointer;
    color: red;
  }

  &.selected {
    color: red;
  }
`;

const Page = () => {

    const { role } = useContext(RoleContext);
    const { lang, setLang } = useContext(LanguageContext);

    return (
        <Container>
            <Content>
                <Row>
                    <Toolbar className="not-print">
                        <ToolbarButton className={lang === LANG.EN && "selected"} onClick={() => setLang(LANG.EN)} title="English">
                            EN
                        </ToolbarButton>
                        <ToolbarButton className={lang === LANG.DE && "selected"} onClick={() => setLang(LANG.DE)} title="Deutsch">
                            DE
                        </ToolbarButton>
                        <ToolbarButton onClick={() => window.print()} title={UI[lang].print}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: "6px"}}>
                                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
                            </svg>
                            {UI[lang].print}
                        </ToolbarButton>
                    </Toolbar>
                </Row>
                <Row>
                    <Title>
                        <LeftColumn>
                            <FullName>
                                <Name>Sergio</Name>
                                <Surname>Ivanuzzo</Surname>
                            </FullName>
                            <Position>{role}</Position>
                        </LeftColumn>
                        <Contacts />
                    </Title>
                </Row>
                <Row>
                    <About>
                        {ABOUT[lang][roleKeyOf(role)]}
                    </About>
                </Row>
                <Row>
                    <LeftColumn>
                        <WorkExperience />
                    </LeftColumn>
                    <RightColumn>
                        <Skills />
                        <Education />
                        <Languages />
                        <Certifications />
                    </RightColumn>
                </Row>
            </Content>
        </Container>
    );
};

export default Page;
