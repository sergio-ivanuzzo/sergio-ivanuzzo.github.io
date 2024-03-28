import React from "react";
import styled from "styled-components";

import {Section} from "../../core/Layout";

const Content = styled.div`
  word-break: break-word;
  font-style: italic;
  
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const SkillType = styled.span`
  font-weight: bold;
`;

const Skills = () => {
    return (
        <Section>
            <h3>Skills</h3>
            <Content>
                <div>
                    <SkillType>Frontend</SkillType>: React.js, Redux, Redux Saga, React Router, Next.js, Storybook, Vue.js, Vuex, JavaScript, TypeScript, d3.js, SASS, AJAX, jest, HTML, CSS, SCSS, GraphQL, REST API
                </div>
                <div>
                    <SkillType>Backend</SkillType>: Rust, Tokio, serde, macros, ffi, Python, SQLAlchemy, SQL, MySQL, Node.js
                </div>
                <div>
                    <SkillType>DevOps</SkillType>: VPS, VPN, iptables, SSL, Squid, Git Actions, Docker
                </div>
            </Content>
        </Section>
    );
};

export default Skills;