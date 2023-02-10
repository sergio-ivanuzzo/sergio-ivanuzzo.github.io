import React from "react";
import styled from "styled-components";

import WorkExperience from "./WorkExperience";
import Education from "./Education";
import About from "./About";


export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  @media screen and (min-width: 1024px) {
    width: 50%;
  }

  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 80%;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2) {
    width: 90%;

    h3 {
      font-size: 16px;
    }

    .item {
      font-size: 12px;
    }
  }
`;

const Page = () => {
    return (
        <Container>
            <Content>
                <WorkExperience />
                <Education />
                <About />
            </Content>
        </Container>
    );
};

export default Page;