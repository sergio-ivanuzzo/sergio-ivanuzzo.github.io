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
  
  @media screen and (min-width: 1024px) {
    width: 50%;
  }

  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 80%;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2) {
    width: 80%;

    h3 {
      font-size: 16px;
    }

    .item {
      font-size: 12px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LeftColumn = styled.div`
  flex: 4;
  margin-right: 30px;
`;

const RightColumn = styled.div`
  flex: 1;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 1px 0 5px 4px rgba(221, 215, 211, .8);
  padding: 0 5px;
`;

const Title = styled.div`
  font-size: 18px;
  margin: 0 auto;
  text-align: center;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const Position = styled.div`
  font-size: 20px;
  font-style: italic;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 16px;
  margin-top: 4px;

  @media print {
    text-decoration: none;
    color: black;
    display: none;
  }
`;

const Link = styled.a`
  color: #537FE7;
  text-decoration: underline;
  
  &:hover {
    cursor: pointer;
    text-decoration: none;
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
                            <Link target="_blank" href="https://www.linkedin.com/in/sergio-ivanuzzo/">LinkedIn</Link>
                            <Link target="_blank" href="https://github.com/sergio-ivanuzzo">GitHub</Link>
                            <Link target="_blank" href="https://stackoverflow.com/users/5397119/sergio-ivanuzzo">
                                StackOverflow
                            </Link>
                        </Links>
                    </Title>
                </Row>
                <Row>
                    <p>
                        I like automation, implementing bots and implementing game servers.
                        Also I like to implement clear, user-friendly and intuitively understandable UI.
                        I have strong experience implementing both backend and frontend from scratch and have strong knowledge
                        on all stages of development lifecycle (architecture design, development itself, testing and deployment).
                    </p>
                </Row>
                <Row>
                    <LeftColumn>
                        <WorkExperience />
                    </LeftColumn>
                    <RightColumn>
                        <Contacts />
                        <Skills />
                        <Education />
                    </RightColumn>
                </Row>
            </Content>
        </Container>
    );
};

export default Page;