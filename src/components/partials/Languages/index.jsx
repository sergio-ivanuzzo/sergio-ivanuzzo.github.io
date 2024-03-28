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

const Language = styled.span`
  font-weight: bold;
`;

const Languages = () => {
    return (
        <Section>
            <h3>Languages</h3>
            <Content>
                <div>
                    <Language>English</Language>: B2
                </div>
                <div>
                    <Language>German</Language>: B1
                </div>
                <div>
                    <Language>Russian</Language>: Native
                </div>
            </Content>
        </Section>
    );
};

export default Languages;