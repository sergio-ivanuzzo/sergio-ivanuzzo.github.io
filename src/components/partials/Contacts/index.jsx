import React from "react";
import styled from "styled-components";
import {Section} from "../../core/Layout";

const Item = styled.div`
  display: flex;
`;

const Name = styled.span`
  font-weight: bold;
  margin-right: 10px;
  
  &:after {
    content: ": ";
  }
`;

const Address = styled.span``;

const Contacts = () => {
    return (
        <Section>
            <h3>Contacts</h3>
            <Item>
                <Name>Email</Name>
                <Address>sergio.ivanuzzo@gmail.com</Address>
            </Item>
            <Item>
                <Name>Skype</Name>
                <Address>sergio.ivanuzzo</Address>
            </Item>
            <Item>
                <Name>Phone</Name>
                <Address>+66 82 978 453</Address>
            </Item>
        </Section>
    );
};

export default Contacts;