import React, { useState } from "react";
import styled from "styled-components";

import { FullStackWorkExperience, ReactWorkExperience, RustWorkExperience } from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Contacts from "./Contacts";
import Languages from "./Languages";

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

const About = styled.p`
  font-style: italic;
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

const Button = styled.button`
  background: #FBE8D3;
  border: 1px solid red;
  padding: 10px 15px;
  font-weight: bold;
  border-radius: 10px;
  
  &:hover {
    cursor: pointer;
    background: white;
  }

  &.selected {
    background: white !important;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  margin: 5px 0 25px 0;
  
  > button:not(:first-child) {
    margin-left: 20px;
  }
`;

const POSITION = Object.freeze({
    REACT: "React Engineer",
    RUST: "Rust Engineer",
    DEFAULT: "Full Stack Engineer",
});

const Page = () => {

    const [position, setPosition] = useState(POSITION.DEFAULT);

    return (
        <Container>
            <Content>
                <Row>
                    <Title>
                        <LeftColumn>
                            <FullName>
                                <Name>Sergey</Name>
                                <Surname>Ivanenko</Surname>
                            </FullName>
                            <Position>{position}</Position>
                        </LeftColumn>
                        <Contacts />
                    </Title>
                </Row>
                <Row>
                    <About>
                        In general I have around 10 years of experience implementing both backend and frontend solutions.
                        I specialize in creating clear, user-friendly, and intuitively understandable UI.
                        In my free time, I engage in projects related to automation, machine learning, and the development of bots and game servers.
                    </About>
                </Row>
                <Row>
                    <ButtonContainer className="not-print">
                        <Button className={position === POSITION.DEFAULT && "selected"} onClick={() => setPosition(POSITION.DEFAULT)}>
                            FULL STACK ENGINEER
                        </Button>
                        <Button className={position === POSITION.REACT && "selected"} onClick={() => setPosition(POSITION.REACT)}>
                            REACT ENGINEER
                        </Button>
                        <Button className={position === POSITION.RUST && "selected"} onClick={() => setPosition(POSITION.RUST)}>
                            RUST ENGINEER
                        </Button>
                    </ButtonContainer>
                </Row>
                <Row>
                    <LeftColumn>
                        { position === POSITION.DEFAULT &&  <FullStackWorkExperience /> }
                        { position === POSITION.REACT &&  <ReactWorkExperience /> }
                        { position === POSITION.RUST &&  <RustWorkExperience /> }
                    </LeftColumn>
                    <RightColumn>
                        <Skills />
                        <Education />
                        <Languages />
                    </RightColumn>
                </Row>
            </Content>
        </Container>
    );
};

export default Page;