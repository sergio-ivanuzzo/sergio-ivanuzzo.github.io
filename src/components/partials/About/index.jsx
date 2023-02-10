import React from "react";

import {Section} from "../../core/Layout";

const About = () => {
    return (
        <Section>
            <h3>About Me</h3>
            <div className="content">
                <div>
                    <span className="bold">Frontend</span>: React.js/Hooks/Redux/Redux
                    Saga/Next.js/Storybook/Vue.js/JavaScript/TypeScript/d3.js
                </div>
                <div>
                    <span className="bold">Backend</span>: Rust/Python/SQL/Node.js/Express
                </div>
                <div>
                    <span className="bold">DevOps</span>: VPS/VPN/iptables/SSL/Squid
                </div>
            </div>
        </Section>
    );
};

export default About;