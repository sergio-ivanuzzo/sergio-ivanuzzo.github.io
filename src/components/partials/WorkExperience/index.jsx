import React, {useContext} from "react";
import styled from "styled-components";

import FullStackIcon from "../../icons/FullStack";
import ReactIcon from "../../icons/React";
import RustIcon from "../../icons/Rust";
import {POSITION, RoleContext, roleKeyOf} from "../../../providers/roleProvider";
import {LanguageContext} from "../../../providers/languageProvider";
import {EXPERIENCE, UI} from "../../../i18n/content";
import {Content, Section} from "../../core/Layout";

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;  
  width: 20px;
  padding: 0;
  background: transparent;
  box-shadow: 0 2px 4px 3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s;
  border: 1px solid snow;
  border-radius: 10px;  
  
  &:hover {
    cursor: pointer;
    svg {
      fill: red !important;
    }
  }

  &.selected {
    svg {
      fill: red !important;
    }
  }
`;

const ButtonContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  margin-left: auto;  
  
  > button:not(:first-child) {
    margin-left: 10px;
  }
`;

export const SwitchRole = () => {
    const { role, setRole } = useContext(RoleContext);
    return (
        <ButtonContainer className="not-print">
            <Button className={role === POSITION.DEFAULT && "selected"} onClick={() => setRole(POSITION.DEFAULT)} title="Rust · React Engineer">
                <FullStackIcon />
            </Button>
            <Button className={role === POSITION.REACT && "selected"} onClick={() => setRole(POSITION.REACT)} title="React Engineer">
                <ReactIcon />
            </Button>
            <Button className={role === POSITION.RUST && "selected"} onClick={() => setRole(POSITION.RUST)} title="Rust Engineer">
                <RustIcon />
            </Button>
        </ButtonContainer>
    );
}

export const StyledSection = styled(Section)`
  h3 {
    background: #FBE8D3;
    box-shadow: 2px 2px 3px 1px silver;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Heading = styled.div``;

const Cell = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  column-gap: 12px;
  align-items: start;

  > :first-child {
    min-width: 0;
  }

  > :last-child {
    min-width: 0;
    text-align: right;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 48%);
  }
`;

const Position = styled.div`
  font-weight: bold;
`;

const JobType = styled.span`
  font-weight: bold;
  white-space: nowrap;
`;

const Location = styled.span`
  white-space: nowrap;
`;

const ExtraInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: baseline;
  column-gap: 10px;
`;

const TimePeriod = styled.div`
  text-align: right;
`;

const CompanyName = styled.div`
  font-weight: bold;
`;

const WorkExperience = () => {
    const { role } = useContext(RoleContext);
    const { lang } = useContext(LanguageContext);

    const items = EXPERIENCE[lang][roleKeyOf(role)];

    return (
        <StyledSection>
            <h3>{UI[lang].workExperience} <SwitchRole /></h3>
            <Content>
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        <Heading>
                            <Cell>
                                <Position>{item.position}</Position>
                                <ExtraInfo>
                                    <JobType>{item.jobType}</JobType>
                                    {item.location && <Location>{item.location}</Location>}
                                </ExtraInfo>
                            </Cell>
                            <Cell>
                                <CompanyName>{item.company}</CompanyName>
                                <TimePeriod>{item.period}</TimePeriod>
                            </Cell>
                        </Heading>
                        <div className="body">
                            <ul>
                                {item.bullets.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </Content>
        </StyledSection>
    );
};

export default WorkExperience;
