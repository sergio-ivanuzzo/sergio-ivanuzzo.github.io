import React from "react";
import styled from "styled-components";

import {Section} from "../../core/Layout";
import Email from "../../icons/Email";
import GitHub from "../../icons/GitHub";
import LinkedIn from "../../icons/LinkedIn";
import WhatsApp from "../../icons/WhatsApp";
import StackOverflow from "../../icons/StackOverflow";

const List = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  
  > * {
    margin: 2px 0;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;

  & > * {
    margin-right: 8px;
  }
`;

const Link = styled.a`
  color: #537FE7;
  text-decoration: none;
  
  &:hover {
    cursor: pointer;
  }
`;

const Contacts = () => {
    return (
        <Section>
            <List>
                <Item>
                    <Link href="mailto:sergio.ivanuzzo@gmail.com">
                        sergio.ivanuzzo@gmail.com
                    </Link>
                    <Email width={18} />
                </Item>
                <Item>
                    <Link target="_blank" href="https://www.linkedin.com/in/sergio-ivanuzzo/">
                        in.com/sergio-ivanuzzo
                    </Link>
                    <LinkedIn width={18} />
                </Item>
                <Item>
                    <Link target="_blank" href="https://github.com/sergio-ivanuzzo">github.com/sergio-ivanuzzo</Link>
                    <GitHub width={18} />
                </Item>
                <Item>
                    <Link target="_blank" href="https://stackoverflow.com/users/5397119/sergio-ivanuzzo">
                        stackoverflow.com/sergio-ivanuzzo
                    </Link>
                    <StackOverflow width={18} />
                </Item>
                <Item>
                    <Link target="_blank" href="https://wa.me/66829784530">
                        +66 82 978 4530
                    </Link>
                    <WhatsApp width={18} />
                </Item>
            </List>
        </Section>
    );
};

export default Contacts;