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

const WorkExperience = () => {
    return (
        <StyledSection>
            <h3>Work Experience</h3>
            <div className="content">
                <div className="item">
                    <Heading>
                        <Cell>
                            <Position>React Engineer</Position>
                            <ExtraInfo>
                                <JobType>Full Time</JobType>
                                <Location>Bangkok, Thailand</Location>
                            </ExtraInfo>
                        </Cell>
                        <Cell>
                            <CompanyName>Amity</CompanyName>
                            <TimePeriod>September 2020 - Present</TimePeriod>
                        </Cell>
                    </Heading>
                    <div className="body">
                        <ul>
                            <li>
                                owned and successfully implemented next features for SDK using JavaScript and MobX:
                                followers, hard delete, push notifications, comments, communities
                            </li>
                            <li>
                                owned and successfully implemented UI components
                                using React.js with hooks for that features
                            </li>
                            <li>
                                implemented manual tests using Storybook and added tests coverage using jest
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="item">
                    <Heading>
                        <Cell>
                            <Position>React Engineer</Position>
                            <ExtraInfo>
                                <JobType>Freelance</JobType>
                                <Location>Kharkov, Ukraine</Location>
                            </ExtraInfo>
                        </Cell>
                        <Cell>
                            <CompanyName>VoxUkraine</CompanyName>
                            <TimePeriod>April 2021 - June 2021</TimePeriod>
                        </Cell>
                    </Heading>
                    <div className="body">
                        <ul>
                            <li>
                                implemented from scratch data visualization tool for data analysts
                                using React.js with hooks and TypeScript
                            </li>
                            <li>
                                implemented charts components using d3.js
                            </li>
                            <li>
                                implemented manual tests using Storybook
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="item">
                    <Heading>
                        <Cell>
                            <Position>Python Engineer</Position>
                            <ExtraInfo>
                                <JobType>Full Time</JobType>
                                <Location>Kharkov, Ukraine</Location>
                            </ExtraInfo>
                        </Cell>
                        <Cell>
                            <CompanyName>Agile Engine</CompanyName>
                            <TimePeriod>December 2019 - July 2020</TimePeriod>
                        </Cell>
                    </Heading>
                    <div className="body">
                        <ul>
                            <li>
                                implemented Python codebase for legacy project (back-end for ticket broker service)
                            </li>
                            <li>
                                implemented lambdas for AWS
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="item">
                    <Heading>
                        <Cell>
                            <Position>React Engineer</Position>
                            <ExtraInfo>
                                <JobType>Full Time</JobType>
                                <Location>Kharkov, Ukraine</Location>
                            </ExtraInfo>
                        </Cell>
                        <Cell>
                            <CompanyName>DDI Development</CompanyName>
                            <TimePeriod>March 2019 - October 2019</TimePeriod>
                        </Cell>
                    </Heading>
                    <div className="body">
                        <ul>
                            <li>
                                implemented UI components for NDA hotel booking service using
                                React.js/Redux and Typescript
                            </li>
                            <li>
                                added tests coverage using jest
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="item">
                    <Heading>
                        <Cell>
                            <Position>AngularJS Engineer</Position>
                            <ExtraInfo>
                                <JobType>Full Time</JobType>
                                <Location>Kharkov, Ukraine</Location>
                            </ExtraInfo>
                        </Cell>
                        <Cell>
                            <CompanyName>Devart</CompanyName>
                            <TimePeriod>February 2017 - November 2018</TimePeriod>
                        </Cell>
                    </Heading>
                    <div className="body">
                        <ul>
                            <li>
                                implemented charts page for Web dashboard of timetracker using d3.js library
                            </li>
                            <li>
                                implemented new UI components for Web version of timetracker using AngularJS
                            </li>
                            <li>
                                investigated and implemented approach to port AngularJS components into Angular2+
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="item">
                    <Heading>
                        <Cell>
                            <Position>JavaScript Mentor</Position>
                            <ExtraInfo>
                                <JobType>Part Time</JobType>
                                <Location>Kharkov, Ukraine</Location>
                            </ExtraInfo>
                        </Cell>
                        <Cell>
                            <CompanyName>Spalah IT-School</CompanyName>
                            <TimePeriod>April 2016 - September 2017</TimePeriod>
                        </Cell>
                    </Heading>
                    <div className="body">
                        <ul>
                            <li>
                                released 6 groups of students with basic
                                knowledge of JavaScript, React, Node.js, AngularJS
                            </li>
                            <li>
                                worked on reviewing home tasks
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyledSection>
    );
};

export default WorkExperience;