import React from "react";
import styled from "styled-components";

import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

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
    width: 80%;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 80%;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 50%;
  }

  @media only screen and (min-width: 992px) and (orientation: landscape) {
    width: 80%;
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
  flex-basis: available;
`;

const RightColumn = styled.div`
  border-top-right-radius: 10px;
  flex: 1;
`;

const Title = styled.div`
  font-size: 18px;
  margin: 0 auto;
  text-align: center;
`;

const About = styled.p`
  font-style: italic;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const Position = styled.div`
  font-size: 20px;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 16px;
  margin-top: 4px;
  justify-content: center;
`;

const Link = styled.a`
  color: #537FE7;
  text-decoration: underline;
  
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }

  @media print {
    text-decoration: none;
    color: #537FE7;
    
    &:not(.show) {
      display: none;
    }
  }
  
  &:not(:last-child) {
    margin-right: 10px;
    
    &:after {
      content: "|";
      margin-left: 10px;
      color: black;
    }
  }
`;

const Page = () => {
    return (
        <Container>
            <Content>
                <Row>
                    <Title>
                        <Name>Sergey Ivanenko</Name>
                        <Position>Senior React Engineer</Position>
                        <Links>
                            <Link href="mailto:sergio.ivanuzzo@gmail.com" className="show">
                                sergio.ivanuzzo@gmail.com
                            </Link>
                            <Link target="_blank" href="https://www.linkedin.com/in/sergio-ivanuzzo/">LinkedIn</Link>
                            <Link target="_blank" href="https://github.com/sergio-ivanuzzo">GitHub</Link>
                            <Link target="_blank" href="https://stackoverflow.com/users/5397119/sergio-ivanuzzo">
                                StackOverflow
                            </Link>
                            <Link target="_blank" href="https://wa.me/66829784530" className="show">
                                +66 82 978 4530
                            </Link>
                        </Links>
                    </Title>
                </Row>
                <Row>
                    <About>
                        I like automation, implementing bots and implementing game servers.
                        Also I like to implement clear, user-friendly and intuitively understandable UI.
                        I have strong experience implementing both backend and frontend from scratch and have strong knowledge
                        on all stages of development lifecycle (architecture design, development itself, testing and deployment).
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