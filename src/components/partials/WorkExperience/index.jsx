import React from "react";

import {Caption, Section} from "../../core/Layout";

const WorkExperience = () => {
    return (
        <Section>
            <h3>Work Experience</h3>
            <div className="content">
                <div className="item">
                    <Caption>
                        <div className="bold">React Engineer</div>
                        <div><span className="bold">Full Time</span> &#9656; Bangkok, Thailand</div>
                    </Caption>
                    <Caption>
                        <div className="bold">Amity</div>
                        <div>September 2020 - Present</div>
                    </Caption>
                    <div className="body">
                        <ul>
                            <li>
                                owned and successfully implemented next features for SDK using JavaScript and MobX:
                                followers, hard delete, push notifications, comments, communities
                            </li>
                            <li>
                                owned and successfully implemented UI components
                                using React.js (Hooks) for that features
                            </li>
                            <li>
                                implemented manual tests using Storybook and added tests coverage using jest
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="item">
                    <Caption>
                        <div className="bold">React Engineer</div>
                        <div><span className="bold">Freelance</span> &#9656; Kharkov, Ukraine</div>
                    </Caption>
                    <Caption>
                        <div className="bold">VoxUkraine</div>
                        <div>April 2021 - June 2021</div>
                    </Caption>
                    <div className="body">
                        <ul>
                            <li>
                                implemented from scratch data visualization tool for data analysts
                                using React.js (Hooks) and TypeScript
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
                    <Caption>
                        <div className="bold">Python Engineer</div>
                        <div><span className="bold">Full Time</span> &#9656; Kharkov, Ukraine</div>
                    </Caption>
                    <Caption>
                        <div className="bold">Agile Engine</div>
                        <div>December 2019 - July 2020</div>
                    </Caption>
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
                    <Caption>
                        <div className="bold">React Engineer</div>
                        <div><span className="bold">Full Time</span> &#9656; Kharkov, Ukraine</div>
                    </Caption>
                    <Caption>
                        <div className="bold">DDI Development</div>
                        <div>March 2019 - October 2019</div>
                    </Caption>
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
                    <Caption>
                        <div className="bold">AngularJS Engineer</div>
                        <div><span className="bold">Full Time</span> &#9656; Kharkov, Ukraine</div>
                    </Caption>
                    <Caption>
                        <div className="bold">Devart</div>
                        <div>February 2017 - November 2018</div>
                    </Caption>
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
                    <Caption>
                        <div className="bold">JavaScript Mentor</div>
                        <div><span className="bold">Part Time</span> &#9656; Kharkov, Ukraine</div>
                    </Caption>
                    <Caption>
                        <div className="bold">Spalah (It-School)</div>
                        <div>April 2016 - September 2017</div>
                    </Caption>
                    <div className="body">
                        <ul>
                            <li>
                                released 6 groups of students with basic
                                knowledge of JavaScript/React/Node.js/AngularJS
                            </li>
                            <li>
                                was working on reviewing home tasks
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WorkExperience;