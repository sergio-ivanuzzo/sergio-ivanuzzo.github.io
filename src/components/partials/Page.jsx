import React from "react";
import styled from "styled-components";

import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Contacts from "./Contacts";

export const Container = styled.div`
  display: flex;
  justify-content: center;
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

const Page = () => {
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
                            <Position>Rust/React Engineer</Position>
                        </LeftColumn>
                        <Contacts />
                    </Title>
                </Row>
                <Row>
                    <About>
                        I have strong experience implementing both backend and frontend from scratch.
                        I like automation, machine learning, implementing bots and game servers.
                        Also I like to implement clear, user-friendly and intuitively understandable UI.
                    </About>
                </Row>
                <Row>
                    <LeftColumn>
                        <WorkExperience />
                    </LeftColumn>
                    <RightColumn>
                        <Skills />
                        <Education />
                    </RightColumn>
                </Row>
            </Content>
        </Container>
    );
};

export default Page;