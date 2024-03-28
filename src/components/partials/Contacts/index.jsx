import React from "react";
import styled from "styled-components";

import {Section} from "../../core/Layout";
import Email from "../../icons/Email";
import GitHub from "../../icons/GitHub";
import LinkIcon from "../../icons/Link";
import LinkedIn from "../../icons/LinkedIn";
import WhatsApp from "../../icons/WhatsApp";

const StyledSection = styled(Section)`
  @media only screen and (max-width: 600px), only screen and (min-width: 600px) {
    width: 100%;
  }

  @media
  only screen and (min-width: 768px),
  only screen and (min-width: 992px),
  only screen and (min-width: 1200px) {
    width: auto;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;

  @media 
  only screen and (max-width: 600px), 
  only screen and (min-width: 600px), 
  only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media
  only screen and (min-width: 992px), 
  only screen and (min-width: 1200px) {
    flex-direction: column;
  }
  
  > * {
    margin: 2px 0;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > :last-child {
    width: 18px;
  }

  @media 
  only screen and (max-width: 600px), 
  only screen and (min-width: 600px), 
  only screen and (min-width: 768px) {
    flex-direction: row-reverse;
    > :first-child {
      display: none;
    }
    
    > :last-child {
      width: 40px;
    }
  }

  @media 
  only screen and (min-width: 992px), 
  only screen and (min-width: 1200px) {
    flex-direction: row;
    
    > :first-child {
      display: inline;
    }

    > :last-child {
      width: 18px;
    }
  }

  & > * {
    margin-right: 8px;
  }
`;

const Link = styled.a`
  color: #537FE7;
  text-decoration: none;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Contacts = () => {
    return (
        <StyledSection>
            <List>
                <Link href="mailto:sergio.ivanuzzo@gmail.com">
                    <Item>
                        <span>sergio.ivanuzzo@gmail.com</span>
                        <Email />
                    </Item>
                </Link>
                <Link target="_blank" href="https://sergio-ivanuzzo.github.io/">
                    <Item>
                        <span>sergio-ivanuzzo.github.io</span>
                        <LinkIcon />
                    </Item>
                </Link>
                <Link target="_blank" href="https://wa.me/4915227817595">
                    <Item>
                        <span>+49 1522 781 75 95</span>
                        <WhatsApp />
                    </Item>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/sergio-ivanuzzo/">
                    <Item>
                        <span>sergio-ivanuzzo</span>
                        <LinkedIn />
                    </Item>
                </Link>
                <Link target="_blank" href="https://github.com/sergio-ivanuzzo">
                    <Item>
                        <span>sergio-ivanuzzo</span>
                        <GitHub />
                    </Item>
                </Link>
            </List>
        </StyledSection>
    );
};

export default Contacts;