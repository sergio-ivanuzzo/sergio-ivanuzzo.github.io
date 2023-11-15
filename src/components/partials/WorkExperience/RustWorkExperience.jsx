import React from "react";
import styled from "styled-components";

import {Section} from "../../core/Layout";

const StyledSection = styled(Section)`
  h3 {
    background: #FBE8D3;
    box-shadow: 2px 2px 3px 1px silver;
  }
`;

const Heading = styled.div``;

const Cell = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Position = styled.div`
  font-weight: bold;
`;

const JobType = styled.span`
  font-weight: bold;
  
  &:after {
    content: "\\25B8";
  }
`;

const Location = styled.span``;

const ExtraInfo = styled.div``;

const TimePeriod = styled.div``;

const CompanyName = styled.div`
  font-weight: bold;
`;

const RustWorkExperience = () => {
    return (
        <StyledSection>
            <h3>Work Experience</h3>
            <div className="content">

                <div className="item">
                    <Heading>
                        <Cell>
                            <Position>Rust Engineer</Position>
                            <ExtraInfo>
                                <JobType>Part Time</JobType>
                                <Location>At Home</Location>
                            </ExtraInfo>
                        </Cell>
                        <Cell>
                            <CompanyName>Idewave</CompanyName>
                            <TimePeriod>January 2022 - December 2022</TimePeriod>
                        </Cell>
                    </Heading>
                    <div className="body">
                        <ul>
                            <li>
                                this is my pet project, console wow client for version 3.3.5a, written in Rust
                            </li>
                            <li>
                                this client has next features: console UI, keyboard interaction and can be used for
                                wow packets debugging or as multi-functional bot.
                            </li>
                            <li>
                                in the code I used: tokio-rs, serde, tui + crossterm, thiserror + anyhow, dotenv and
                                many another libraries.
                            </li>
                            <li>
                                also I used macros, including proc macros and function macros.
                            </li>
                            <li>
                                link to the project: <a href="https://github.com/idewave/idewave-cli">https://github.com/idewave/idewave-cli</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyledSection>
    );
};

export default RustWorkExperience;