import React from "react";
import styled from "styled-components";

import {Section} from "../../core/Layout";

const Content = styled.div`
  & > *:not(:last-child) {
    margin: 10px 0;
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
                    <SkillType>Frontend</SkillType>: React.js/Hooks/Redux/Redux
                    Saga/Next.js/Storybook/Vue.js/JavaScript/TypeScript/d3.js
                </div>
                <div>
                    <SkillType>Backend</SkillType>: Rust/Python/SQL/Node.js/Express
                </div>
                <div>
                    <SkillType>DevOps</SkillType>: VPS/VPN/iptables/SSL/Squid
                </div>
            </Content>
        </Section>
    );
};

export default Skills;