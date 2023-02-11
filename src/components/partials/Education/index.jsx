import React from "react";

import {Section} from "../../core/Layout";
import styled from "styled-components";

const Heading = styled.div``;

const Cell = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (-webkit-min-device-pixel-ratio: 2) {
    &:last-child {
      flex-wrap: wrap;
    }
  }
`;

const OrganizationName = styled.div`
  font-weight: bold;
`;

const Location = styled.div`
  font-weight: bold;
`;

const Speciality = styled.div``;

const Degree = styled.span`
  white-space: nowrap;
`;

const Education = () => {
    return (
        <Section>
            <h3>Education</h3>
            <div className="content">
                <div className="item">
                    <Heading>
                        <Cell>
                            <OrganizationName>Kharkov Radio-Engineering College</OrganizationName>
                            <Location>Kharkov, Ukraine</Location>
                        </Cell>
                        <Cell>
                            <Speciality>Programming for computers and automated systems</Speciality>
                            <Degree>Associate degree</Degree>
                        </Cell>
                    </Heading>
                </div>
            </div>
        </Section>
    );
};

export default Education;